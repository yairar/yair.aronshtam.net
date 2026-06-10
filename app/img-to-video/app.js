const previewCanvas = document.getElementById("previewCanvas");
const previewCtx = previewCanvas.getContext("2d", { alpha: false });
const fileInput = document.getElementById("fileInput");
const dropZone = document.getElementById("dropZone");
const motionPreset = document.getElementById("motionPreset");
const zoomFocus = document.getElementById("zoomFocus");
const focusField = document.getElementById("focusField");
const durationInput = document.getElementById("durationInput");
const exportButton = document.getElementById("exportButton");
const statusEl = document.getElementById("status");
const emptyState = document.getElementById("emptyState");

const PREVIEW_WIDTH = 720;
const PREVIEW_HEIGHT = 1280;
const EXPORT_WIDTH = 720;
const EXPORT_HEIGHT = 1280;
const FPS = 30;

let sourceImage = null;
let sourceUrl = "";
let animationStart = performance.now();
let animationFrame = 0;
let isExporting = false;

const focusPoints = {
  center: [0.5, 0.5],
  "upper-left": [0.22, 0.18],
  "upper-right": [0.78, 0.18],
  "lower-left": [0.22, 0.82],
  "lower-right": [0.78, 0.82],
};

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("is-error", isError);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function easedProgress(progress) {
  const t = clamp(progress, 0, 1);
  return t * t * (3 - 2 * t);
}

function getDuration() {
  const parsed = Number(durationInput.value);
  if (!Number.isFinite(parsed) || parsed < 1) {
    durationInput.value = "1";
    return 1;
  }
  return parsed;
}

function getMimeType() {
  const types = [
    "video/mp4;codecs=avc1.42E01E",
    "video/mp4;codecs=h264",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];

  return types.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function cropFromCenter(canvasWidth, canvasHeight, scale, centerX, centerY) {
  const image = sourceImage;
  const cropWidth = canvasWidth / scale;
  const cropHeight = canvasHeight / scale;

  return {
    sx: clamp(centerX - cropWidth / 2, 0, image.naturalWidth - cropWidth),
    sy: clamp(centerY - cropHeight / 2, 0, image.naturalHeight - cropHeight),
    sw: cropWidth,
    sh: cropHeight,
  };
}

function directionalCrop(canvasWidth, canvasHeight, scale, motion, fromX, fromY, toX, toY) {
  const image = sourceImage;
  const cropWidth = canvasWidth / scale;
  const cropHeight = canvasHeight / scale;
  const minX = cropWidth / 2;
  const maxX = image.naturalWidth - cropWidth / 2;
  const minY = cropHeight / 2;
  const maxY = image.naturalHeight - cropHeight / 2;
  const centerX = minX + (maxX - minX) * (fromX + (toX - fromX) * motion);
  const centerY = minY + (maxY - minY) * (fromY + (toY - fromY) * motion);

  return cropFromCenter(canvasWidth, canvasHeight, scale, centerX, centerY);
}

function cropFor(canvasWidth, canvasHeight, progress) {
  const image = sourceImage;
  const preset = motionPreset.value;
  const motion = easedProgress(progress);
  const coverScale = Math.max(canvasWidth / image.naturalWidth, canvasHeight / image.naturalHeight);
  let scale = coverScale;
  let centerX = image.naturalWidth / 2;
  let centerY = image.naturalHeight / 2;

  if (preset === "pan-ltr" || preset === "pan-rtl") {
    scale = coverScale * 1.08;
    return preset === "pan-ltr"
      ? directionalCrop(canvasWidth, canvasHeight, scale, motion, 0, 0.5, 1, 0.5)
      : directionalCrop(canvasWidth, canvasHeight, scale, motion, 1, 0.5, 0, 0.5);
  }

  if (preset === "tilt-down" || preset === "tilt-up") {
    scale = coverScale * 1.14;
    return preset === "tilt-down"
      ? directionalCrop(canvasWidth, canvasHeight, scale, motion, 0.5, 0, 0.5, 1)
      : directionalCrop(canvasWidth, canvasHeight, scale, motion, 0.5, 1, 0.5, 0);
  }

  if (preset.startsWith("diag-")) {
    scale = coverScale * 1.16;
    const paths = {
      "diag-dl-ur": [0, 1, 1, 0],
      "diag-ur-dl": [1, 0, 0, 1],
      "diag-dr-ul": [1, 1, 0, 0],
      "diag-ul-dr": [0, 0, 1, 1],
    };
    return directionalCrop(canvasWidth, canvasHeight, scale, motion, ...paths[preset]);
  }

  const zoomMotion = preset === "zoom-out" ? 1 - motion : motion;
  scale = coverScale * (1 + 0.15 * zoomMotion);
  const [focusX, focusY] = focusPoints[zoomFocus.value] || focusPoints.center;
  centerX = image.naturalWidth * focusX;
  centerY = image.naturalHeight * focusY;

  return cropFromCenter(canvasWidth, canvasHeight, scale, centerX, centerY);
}

function drawFrame(ctx, canvasWidth, canvasHeight, progress) {
  ctx.fillStyle = "#10120f";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  if (!sourceImage) {
    return;
  }

  const crop = cropFor(canvasWidth, canvasHeight, progress);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(
    sourceImage,
    crop.sx,
    crop.sy,
    crop.sw,
    crop.sh,
    0,
    0,
    canvasWidth,
    canvasHeight,
  );
}

function animate(now) {
  const duration = getDuration();
  const elapsed = ((now - animationStart) / 1000) % duration;
  drawFrame(previewCtx, PREVIEW_WIDTH, PREVIEW_HEIGHT, elapsed / duration);
  animationFrame = requestAnimationFrame(animate);
}

function restartAnimation() {
  animationStart = performance.now();
}

function updateFocusState() {
  const isZoom = motionPreset.value === "zoom-in" || motionPreset.value === "zoom-out";
  focusField.style.display = isZoom ? "grid" : "none";
}

async function loadImage(file) {
  if (!file || !file.type.startsWith("image/")) {
    setStatus("Choose a valid image file.", true);
    return;
  }

  if (sourceUrl) {
    URL.revokeObjectURL(sourceUrl);
  }

  sourceUrl = URL.createObjectURL(file);
  const image = new Image();
  image.decoding = "async";
  image.src = sourceUrl;

  try {
    await image.decode();
  } catch {
    setStatus("The browser could not decode that image.", true);
    return;
  }

  sourceImage = image;
  emptyState.classList.add("is-hidden");
  exportButton.disabled = false;
  restartAnimation();
  setStatus(`${file.name} loaded at ${image.naturalWidth}x${image.naturalHeight}.`);
}

async function exportVideo() {
  if (!sourceImage || isExporting) {
    return;
  }

  if (!previewCanvas.captureStream || typeof MediaRecorder === "undefined") {
    setStatus("This browser cannot record canvas video locally.", true);
    return;
  }

  const mimeType = getMimeType();
  if (!mimeType) {
    setStatus("No supported video encoder is available in this browser.", true);
    return;
  }

  isExporting = true;
  exportButton.disabled = true;
  const duration = getDuration();
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = EXPORT_WIDTH;
  exportCanvas.height = EXPORT_HEIGHT;
  const exportCtx = exportCanvas.getContext("2d", { alpha: false });
  const stream = exportCanvas.captureStream(FPS);
  const chunks = [];
  const recorder = new MediaRecorder(stream, {
    mimeType,
    videoBitsPerSecond: 8_000_000,
  });

  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  recorder.onerror = () => {
    setStatus("Video export failed while recording.", true);
  };

  const finished = new Promise((resolve) => {
    recorder.onstop = resolve;
  });

  recorder.start(100);
  const started = performance.now();
  const totalMs = duration * 1000;

  await new Promise((resolve) => {
    function render(now) {
      const elapsed = now - started;
      const progress = clamp(elapsed / totalMs, 0, 1);
      drawFrame(exportCtx, EXPORT_WIDTH, EXPORT_HEIGHT, progress);
      setStatus(`Exporting ${Math.round(progress * 100)}%...`);

      if (progress >= 1) {
        resolve();
        return;
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  });

  recorder.stop();
  stream.getTracks().forEach((track) => track.stop());
  await finished;

  const blob = new Blob(chunks, { type: mimeType });
  const isMp4 = mimeType.startsWith("video/mp4");
  const extension = isMp4 ? "mp4" : "webm";
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = `instagram-loop-${duration}s.${extension}`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  isExporting = false;
  exportButton.disabled = false;
  setStatus(isMp4 ? "MP4 export complete." : "MP4 encoding is unavailable here; exported WebM instead.");
}

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("is-over");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("is-over");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("is-over");
  loadImage(event.dataTransfer.files[0]);
});

fileInput.addEventListener("change", () => {
  loadImage(fileInput.files[0]);
});

motionPreset.addEventListener("change", () => {
  updateFocusState();
  restartAnimation();
});

zoomFocus.addEventListener("change", restartAnimation);
durationInput.addEventListener("change", restartAnimation);
exportButton.addEventListener("click", exportVideo);

updateFocusState();
drawFrame(previewCtx, PREVIEW_WIDTH, PREVIEW_HEIGHT, 0);
animationFrame = requestAnimationFrame(animate);
