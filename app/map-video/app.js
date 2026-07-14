const canvas = document.querySelector("#mapCanvas");
const ctx = canvas.getContext("2d");

const startInput = document.querySelector("#startPoint");
const endInput = document.querySelector("#endPoint");
const durationInput = document.querySelector("#duration");
const zoomInput = document.querySelector("#zoomLevel");
const mapTypeInput = document.querySelector("#mapType");
const followRoadsInput = document.querySelector("#followRoads");
const exportModeInput = document.querySelector("#exportMode");
const form = document.querySelector("#settings");
const exportBtn = document.querySelector("#exportBtn");
const previewBtn = document.querySelector("#previewBtn");
const statusText = document.querySelector("#statusText");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const outputFormatText = document.querySelector("#outputFormatText");
const codecSupportText = document.querySelector("#codecSupportText");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const TILE_SIZE = 256;
const FPS = 30;
const VIDEO_BITS_PER_SECOND = 10_000_000;

const recorderProfiles = [
  {
    family: "mp4",
    label: "MP4 (H.264 Baseline)",
    extension: "mp4",
    mime: "video/mp4;codecs=avc1.42E01E"
  },
  {
    family: "mp4",
    label: "MP4 (H.264 High)",
    extension: "mp4",
    mime: "video/mp4;codecs=avc1.640028"
  },
  {
    family: "mp4",
    label: "MP4 (browser default)",
    extension: "mp4",
    mime: "video/mp4"
  },
  {
    family: "webm",
    label: "WebM (VP9)",
    extension: "webm",
    mime: "video/webm;codecs=vp9"
  },
  {
    family: "webm",
    label: "WebM (VP8)",
    extension: "webm",
    mime: "video/webm;codecs=vp8"
  },
  {
    family: "webm",
    label: "WebM (browser default)",
    extension: "webm",
    mime: "video/webm"
  }
];

const tileProviders = {
  streets: {
    name: "OpenStreetMap",
    subdomains: ["a", "b", "c"],
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors"
  },
  light: {
    name: "CARTO Light",
    subdomains: ["a", "b", "c", "d"],
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors © CARTO"
  },
  dark: {
    name: "CARTO Dark",
    subdomains: ["a", "b", "c", "d"],
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors © CARTO"
  },
  voyager: {
    name: "CARTO Voyager",
    subdomains: ["a", "b", "c", "d"],
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors © CARTO"
  }
};

const imageCache = new Map();
const failedRecorderFamilies = new Map();
let previewFrame = 0;
let currentScene = null;
let isExporting = false;

function parsePoint(value) {
  const parts = value
    .trim()
    .split(/[,\s]+/)
    .filter(Boolean)
    .map(Number);

  if (parts.length !== 2 || parts.some((part) => Number.isNaN(part))) {
    throw new Error("Use coordinates as latitude, longitude.");
  }

  const [lat, lng] = parts;
  if (lat < -85 || lat > 85 || lng < -180 || lng > 180) {
    throw new Error("Latitude must be -85..85 and longitude must be -180..180.");
  }

  return { lat, lng };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function easeInOut(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function lerp(a, b, value) {
  return a + (b - a) * value;
}

function lonLatToWorld(point, zoom) {
  const scale = TILE_SIZE * Math.pow(2, zoom);
  const sinLat = Math.sin((point.lat * Math.PI) / 180);
  const x = ((point.lng + 180) / 360) * scale;
  const y = (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * scale;
  return { x, y };
}

function worldToScreen(point, scene) {
  const world = lonLatToWorld(point, scene.zoom);
  return {
    x: world.x - scene.topLeft.x,
    y: world.y - scene.topLeft.y
  };
}

function chooseZoom(points) {
  const marginX = WIDTH * 0.2;
  const marginY = HEIGHT * 0.25;

  for (let zoom = 17; zoom >= 2; zoom -= 1) {
    const worlds = points.map((point) => lonLatToWorld(point, zoom));
    const bounds = worldBounds(worlds);
    const width = bounds.maxX - bounds.minX;
    const height = bounds.maxY - bounds.minY;

    if (width <= WIDTH - marginX * 2 && height <= HEIGHT - marginY * 2) {
      return zoom;
    }
  }

  return 2;
}

function worldBounds(points) {
  return points.reduce(
    (bounds, point) => ({
      minX: Math.min(bounds.minX, point.x),
      maxX: Math.max(bounds.maxX, point.x),
      minY: Math.min(bounds.minY, point.y),
      maxY: Math.max(bounds.maxY, point.y)
    }),
    {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    }
  );
}

function routeCenter(points) {
  const bounds = points.reduce(
    (result, point) => ({
      minLat: Math.min(result.minLat, point.lat),
      maxLat: Math.max(result.maxLat, point.lat),
      minLng: Math.min(result.minLng, point.lng),
      maxLng: Math.max(result.maxLng, point.lng)
    }),
    {
      minLat: Infinity,
      maxLat: -Infinity,
      minLng: Infinity,
      maxLng: -Infinity
    }
  );

  return {
    lat: (bounds.minLat + bounds.maxLat) / 2,
    lng: (bounds.minLng + bounds.maxLng) / 2
  };
}

function tileUrl(provider, z, x, y) {
  const subdomain = provider.subdomains[Math.abs(x + y) % provider.subdomains.length];
  return provider.url
    .replace("{s}", subdomain)
    .replace("{z}", z)
    .replace("{x}", x)
    .replace("{y}", y);
}

function loadTile(url) {
  if (imageCache.has(url)) {
    return imageCache.get(url);
  }

  const promise = new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });

  imageCache.set(url, promise);
  return promise;
}

function drawMissingTile(target, x, y) {
  target.fillStyle = "#d9e1d7";
  target.fillRect(x, y, TILE_SIZE, TILE_SIZE);
  target.strokeStyle = "rgba(120, 138, 116, 0.28)";
  target.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
}

async function renderMapBackground(scene) {
  const provider = tileProviders[scene.mapType];
  const background = document.createElement("canvas");
  background.width = WIDTH;
  background.height = HEIGHT;
  const target = background.getContext("2d");

  target.fillStyle = scene.mapType === "dark" ? "#161a1b" : "#dfe8dc";
  target.fillRect(0, 0, WIDTH, HEIGHT);

  const tileMinX = Math.floor(scene.topLeft.x / TILE_SIZE);
  const tileMaxX = Math.floor((scene.topLeft.x + WIDTH) / TILE_SIZE);
  const tileMinY = Math.floor(scene.topLeft.y / TILE_SIZE);
  const tileMaxY = Math.floor((scene.topLeft.y + HEIGHT) / TILE_SIZE);
  const tileCount = Math.pow(2, scene.zoom);
  const jobs = [];

  for (let tileX = tileMinX; tileX <= tileMaxX; tileX += 1) {
    for (let tileY = tileMinY; tileY <= tileMaxY; tileY += 1) {
      if (tileY < 0 || tileY >= tileCount) {
        continue;
      }

      const wrappedX = ((tileX % tileCount) + tileCount) % tileCount;
      const dx = Math.round(tileX * TILE_SIZE - scene.topLeft.x);
      const dy = Math.round(tileY * TILE_SIZE - scene.topLeft.y);
      const url = tileUrl(provider, scene.zoom, wrappedX, tileY);

      jobs.push(
        loadTile(url).then((img) => {
          if (img) {
            target.drawImage(img, dx, dy, TILE_SIZE, TILE_SIZE);
          } else {
            drawMissingTile(target, dx, dy);
          }
        })
      );
    }
  }

  await Promise.all(jobs);

  target.fillStyle = scene.mapType === "dark"
    ? "rgba(0, 0, 0, 0.12)"
    : "rgba(255, 255, 255, 0.08)";
  target.fillRect(0, 0, WIDTH, HEIGHT);

  drawAttribution(target, provider.attribution, scene.mapType);
  return background;
}

async function fetchRoadRoute(start, end) {
  const coordinates = `${start.lng},${start.lat};${end.lng},${end.lat}`;
  const url = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson&alternatives=false&steps=false`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Road routing is unavailable right now.");
  }

  const data = await response.json();
  const route = data.routes?.[0]?.geometry?.coordinates;

  if (data.code !== "Ok" || !Array.isArray(route) || route.length < 2) {
    throw new Error("No road route was found for these coordinates.");
  }

  const points = route
    .map(([lng, lat]) => ({ lat, lng }))
    .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lng));

  if (points.length < 2) {
    throw new Error("No road route was found for these coordinates.");
  }

  return points;
}

async function buildScene() {
  const start = parsePoint(startInput.value);
  const end = parsePoint(endInput.value);
  const duration = clamp(Number(durationInput.value || 8), 1, 60);
  const mapType = mapTypeInput.value;
  const followRoads = followRoadsInput.checked;
  let routePath = [start, end];

  if (followRoads) {
    setStatus("Finding road route", 0);
    routePath = await fetchRoadRoute(start, end);
  }

  const zoom = zoomInput.value === ""
    ? chooseZoom(routePath)
    : Math.round(clamp(Number(zoomInput.value), 2, 17));
  const center = routeCenter(routePath);
  const routeWorldBounds = worldBounds(routePath.map((point) => lonLatToWorld(point, zoom)));
  const centerWorld = {
    x: (routeWorldBounds.minX + routeWorldBounds.maxX) / 2,
    y: (routeWorldBounds.minY + routeWorldBounds.maxY) / 2
  };

  return {
    start,
    end,
    routePath,
    followRoads,
    duration,
    mapType,
    zoom,
    center,
    topLeft: {
      x: centerWorld.x - WIDTH / 2,
      y: centerWorld.y - HEIGHT / 2
    }
  };
}

function quadraticPoint(a, control, b, t) {
  const oneMinus = 1 - t;
  return {
    x: oneMinus * oneMinus * a.x + 2 * oneMinus * t * control.x + t * t * b.x,
    y: oneMinus * oneMinus * a.y + 2 * oneMinus * t * control.y + t * t * b.y
  };
}

function routeScreenPoints(scene) {
  if (scene.followRoads) {
    const points = scene.routePath.map((point) => worldToScreen(point, scene));
    return resamplePolyline(points, 420);
  }

  const start = worldToScreen(scene.start, scene);
  const end = worldToScreen(scene.end, scene);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.hypot(dx, dy);
  const bend = clamp(distance * 0.16, 40, 190);
  const direction = scene.end.lng >= scene.start.lng ? 1 : -1;
  const control = {
    x: (start.x + end.x) / 2 - (dy / Math.max(distance, 1)) * bend * direction,
    y: (start.y + end.y) / 2 + (dx / Math.max(distance, 1)) * bend * direction
  };

  return Array.from({ length: 220 }, (_, index) => {
    const t = index / 219;
    return quadraticPoint(start, control, end, t);
  });
}

function resamplePolyline(points, targetCount) {
  if (points.length < 2) {
    return points;
  }

  const lengths = [0];
  let total = 0;

  for (let index = 1; index < points.length; index += 1) {
    total += Math.hypot(
      points[index].x - points[index - 1].x,
      points[index].y - points[index - 1].y
    );
    lengths.push(total);
  }

  if (total === 0) {
    return [points[0], points[points.length - 1]];
  }

  const sampled = [];
  let segment = 1;

  for (let index = 0; index < targetCount; index += 1) {
    const distance = (total * index) / (targetCount - 1);

    while (segment < lengths.length - 1 && lengths[segment] < distance) {
      segment += 1;
    }

    const before = points[segment - 1];
    const after = points[segment];
    const segmentLength = lengths[segment] - lengths[segment - 1];
    const amount = segmentLength === 0
      ? 0
      : (distance - lengths[segment - 1]) / segmentLength;

    sampled.push({
      x: lerp(before.x, after.x, amount),
      y: lerp(before.y, after.y, amount)
    });
  }

  return sampled;
}

function drawRoute(points, progress, mapType) {
  const visibleCount = Math.max(2, Math.round(points.length * progress));
  const visible = points.slice(0, visibleCount);
  const fullColor = mapType === "dark" ? "rgba(255,255,255,0.34)" : "rgba(30,42,33,0.22)";

  drawPolyline(points, fullColor, 16, "rgba(0,0,0,0.12)");
  drawPolyline(visible, "rgba(255,255,255,0.95)", 21, "rgba(0,0,0,0.28)");
  drawPolyline(visible, "#ff6427", 12, "rgba(255,107,44,0.36)");
}

function drawPolyline(points, stroke, width, shadow) {
  if (points.length < 2) {
    return;
  }

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = width;
  ctx.strokeStyle = stroke;
  ctx.shadowColor = shadow;
  ctx.shadowBlur = width * 0.8;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (const point of points.slice(1)) {
    ctx.lineTo(point.x, point.y);
  }
  ctx.stroke();
  ctx.restore();
}

function drawPin(point, fill, label) {
  ctx.save();
  ctx.translate(point.x, point.y);
  ctx.shadowColor = "rgba(0,0,0,0.38)";
  ctx.shadowBlur = 18;
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.arc(0, 0, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.lineWidth = 7;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.font = "700 23px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, 1);
  ctx.restore();
}

function drawMovingMarker(point, pulse) {
  ctx.save();
  ctx.translate(point.x, point.y);
  ctx.fillStyle = `rgba(255, 107, 44, ${0.16 + pulse * 0.1})`;
  ctx.beginPath();
  ctx.arc(0, 0, 48 + pulse * 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ff6427";
  ctx.beginPath();
  ctx.arc(0, 0, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.restore();
}

function roundRect(target, x, y, width, height, radius) {
  target.beginPath();
  target.moveTo(x + radius, y);
  target.arcTo(x + width, y, x + width, y + height, radius);
  target.arcTo(x + width, y + height, x, y + height, radius);
  target.arcTo(x, y + height, x, y, radius);
  target.arcTo(x, y, x + width, y, radius);
  target.closePath();
}

function drawAttribution(target, attribution, mapType) {
  target.save();
  target.fillStyle = mapType === "dark" ? "rgba(0,0,0,0.48)" : "rgba(255,255,255,0.74)";
  roundRect(target, 24, HEIGHT - 50, 470, 28, 10);
  target.fill();
  target.fillStyle = mapType === "dark" ? "rgba(255,255,255,0.74)" : "rgba(24,30,25,0.62)";
  target.font = "18px Inter, system-ui, sans-serif";
  target.fillText(attribution, 38, HEIGHT - 30);
  target.restore();
}

function drawFrame(scene, progress) {
  const eased = easeInOut(clamp(progress, 0, 1));
  const points = scene.routePoints;
  const marker = points[Math.min(points.length - 1, Math.floor(eased * (points.length - 1)))];

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(scene.background, 0, 0);
  drawRoute(points, eased, scene.mapType);
  drawPin(points[0], "#2fbf71", "A");
  drawPin(points[points.length - 1], "#252b2f", "B");
  drawMovingMarker(marker, (Math.sin(progress * Math.PI * 8) + 1) / 2);
}

function setStatus(text, progress = null) {
  statusText.textContent = text;
  if (progress !== null) {
    const percent = Math.round(clamp(progress, 0, 1) * 100);
    progressText.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
  }
}

async function prepareScene({ revealZoom = false } = {}) {
  setStatus("Preparing route", 0);
  const scene = await buildScene();
  setStatus("Loading map", scene.followRoads ? 0.18 : 0);
  scene.background = await renderMapBackground(scene);
  scene.routePoints = routeScreenPoints(scene);
  currentScene = scene;
  if (revealZoom) {
    zoomInput.value = String(scene.zoom);
  }
  drawFrame(scene, 0);
  setStatus("Ready", 0);
  return scene;
}

async function preview() {
  cancelAnimationFrame(previewFrame);
  const scene = await prepareScene({ revealZoom: true });
  const startedAt = performance.now();

  function tick(now) {
    const progress = clamp((now - startedAt) / (scene.duration * 1000), 0, 1);
    drawFrame(scene, progress);
    setStatus("Previewing", progress);

    if (progress < 1) {
      previewFrame = requestAnimationFrame(tick);
    } else {
      setStatus("Preview complete", 1);
    }
  }

  previewFrame = requestAnimationFrame(tick);
}

function canRecordVideo() {
  return Boolean(canvas.captureStream && window.MediaRecorder);
}

function canExportFrames() {
  return Boolean(canvas.toBlob && window.Blob && window.URL);
}

function isRecorderMimeSupported(mime) {
  if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) {
    return false;
  }

  try {
    return MediaRecorder.isTypeSupported(mime);
  } catch (error) {
    return false;
  }
}

function supportedRecorderProfiles({ includeFailures = false } = {}) {
  if (!canRecordVideo()) {
    return [];
  }

  return recorderProfiles
    .filter((profile) => isRecorderMimeSupported(profile.mime))
    .filter((profile) => includeFailures || !failedRecorderFamilies.has(profile.family));
}

function familySupportLabel(supportedProfiles, family, label) {
  if (failedRecorderFamilies.has(family)) {
    return `${label} failed last export`;
  }

  return supportedProfiles.some((profile) => profile.family === family)
    ? `${label} reported`
    : `${label} unavailable`;
}

function codecSupportSummary() {
  const supportedProfiles = supportedRecorderProfiles({ includeFailures: true });
  const parts = [
    familySupportLabel(supportedProfiles, "mp4", "MP4"),
    familySupportLabel(supportedProfiles, "webm", "WebM")
  ];

  if (!canRecordVideo()) {
    parts.push("MediaRecorder unavailable");
  }

  if (canExportFrames()) {
    parts.push("PNG frames available");
  } else {
    parts.push("PNG frames unavailable");
  }

  return parts.join(" / ");
}

function buildExportPlan() {
  const mode = exportModeInput.value;
  const supportedProfiles = supportedRecorderProfiles();
  const mp4Profiles = supportedProfiles.filter((profile) => profile.family === "mp4");
  const webmProfiles = supportedProfiles.filter((profile) => profile.family === "webm");

  if (mode === "frames") {
    return canExportFrames()
      ? { kind: "frames", label: "PNG frame ZIP", extension: "zip" }
      : { kind: "unsupported", label: "PNG frame export is unavailable" };
  }

  if (mode === "mp4") {
    return mp4Profiles.length > 0
      ? { kind: "video", label: mp4Profiles[0].label, profiles: mp4Profiles }
      : frameFallbackPlan("MP4 is not supported by this browser");
  }

  if (mode === "webm") {
    return webmProfiles.length > 0
      ? { kind: "video", label: webmProfiles[0].label, profiles: webmProfiles }
      : frameFallbackPlan("WebM is not supported by this browser");
  }

  if (mp4Profiles.length > 0) {
    return { kind: "video", label: mp4Profiles[0].label, profiles: mp4Profiles };
  }

  if (webmProfiles.length > 0) {
    return { kind: "video", label: webmProfiles[0].label, profiles: webmProfiles };
  }

  return frameFallbackPlan("No supported video codec was found");
}

function frameFallbackPlan(reason) {
  return canExportFrames()
    ? { kind: "frames", label: "PNG frame ZIP", extension: "zip", reason }
    : { kind: "unsupported", label: `${reason}; PNG frame export is also unavailable` };
}

function markRecorderFailure(profiles, error) {
  const reason = error.message || error.name || "recorder failed";
  for (const family of new Set(profiles.map((profile) => profile.family))) {
    failedRecorderFamilies.set(family, reason);
  }
}

function updateExportSupportInfo({ preserveOutput = false } = {}) {
  const plan = buildExportPlan();
  const suffix = plan.reason ? ` (${plan.reason})` : "";
  if (!preserveOutput) {
    outputFormatText.textContent = `${plan.label}${suffix}`;
  }
  codecSupportText.textContent = codecSupportSummary();
  exportBtn.textContent = plan.kind === "frames" ? "Export frames" : "Export video";
  exportBtn.disabled = isExporting || plan.kind === "unsupported";
}

function downloadBlob(blob, { extension, suffix, mime }) {
  const anchor = document.createElement("a");
  const url = URL.createObjectURL(blob);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const nameSuffix = suffix ? `-${suffix}` : "";
  anchor.href = url;
  anchor.download = `relive-map${nameSuffix}-${stamp}.${extension}`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 3000);
  return {
    extension,
    mime: mime || blob.type || "application/octet-stream"
  };
}

function chooseRecorder(stream, profiles) {
  const failures = [];

  for (const profile of profiles) {
    try {
      const recorder = new MediaRecorder(stream, {
        mimeType: profile.mime,
        videoBitsPerSecond: VIDEO_BITS_PER_SECOND
      });
      return { recorder, profile, failures };
    } catch (error) {
      failures.push(`${profile.label}: ${error.message || error.name || "not accepted"}`);
    }
  }

  throw new Error(`The browser reported codec support but rejected every recorder profile. ${failures.join("; ")}`);
}

async function recordVideo(scene, profiles) {
  const stream = canvas.captureStream(FPS);
  const chunks = [];
  let recorderError = null;
  let recorder;
  let profile;

  try {
    const chosen = chooseRecorder(stream, profiles);
    recorder = chosen.recorder;
    profile = chosen.profile;
    outputFormatText.textContent = `${profile.label} (${profile.mime})`;

    const stopped = new Promise((resolve) => {
      recorder.onstop = resolve;
      recorder.onerror = (event) => {
        recorderError = event.error || new Error("The browser recorder failed while writing video data.");
      };
    });

    recorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.start(250);
    const startedAt = performance.now();

    await new Promise((resolve, reject) => {
      function tick(now) {
        if (recorderError) {
          reject(recorderError);
          return;
        }

        const progress = clamp((now - startedAt) / (scene.duration * 1000), 0, 1);
        drawFrame(scene, progress);
        setStatus(`Recording ${profile.extension.toUpperCase()} video`, progress);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          drawFrame(scene, 1);
          resolve();
        }
      }

      requestAnimationFrame(tick);
    });

    if (recorder.state !== "inactive") {
      recorder.stop();
    }
    await stopped;

    if (recorderError) {
      throw recorderError;
    }

    if (chunks.length === 0) {
      throw new Error("The browser recorder finished without producing any video data.");
    }

    const actualMime = recorder.mimeType || chunks[0].type || profile.mime;
    const blob = new Blob(chunks, { type: actualMime });
    return {
      blob,
      extension: profile.extension,
      label: profile.label,
      mime: actualMime
    };
  } finally {
    if (recorder && recorder.state !== "inactive") {
      try {
        recorder.stop();
      } catch (error) {
        console.error(error);
      }
    }
    stream.getTracks().forEach((track) => track.stop());
  }
}

function canvasToBlob(type) {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("The browser could not encode the canvas frame."));
        }
      }, type);
    } catch (error) {
      reject(new Error("Frame export failed because the canvas is blocked by cross-origin map tiles."));
    }
  });
}

async function exportFrameZip(scene) {
  const frameCount = Math.max(2, Math.ceil(scene.duration * FPS) + 1);
  const padWidth = String(frameCount).length;
  const files = [];

  for (let index = 0; index < frameCount; index += 1) {
    const progress = index / (frameCount - 1);
    drawFrame(scene, progress);
    const blob = await canvasToBlob("image/png");
    const number = String(index + 1).padStart(padWidth, "0");
    files.push({
      name: `relive-map-frames/frame-${number}.png`,
      blob
    });
    setStatus(`Rendering PNG frame ${index + 1} of ${frameCount}`, ((index + 1) / frameCount) * 0.86);
  }

  const manifest = {
    format: "png-sequence",
    width: WIDTH,
    height: HEIGHT,
    fps: FPS,
    durationSeconds: scene.duration,
    frameCount
  };
  files.push({
    name: "relive-map-frames/manifest.json",
    content: `${JSON.stringify(manifest, null, 2)}\n`
  });

  return {
    blob: await createZip(files, (progress) => {
      setStatus("Packaging PNG frame ZIP", 0.86 + progress * 0.14);
    }),
    extension: "zip",
    label: `PNG frame ZIP (${frameCount} frames)`,
    mime: "application/zip"
  };
}

function createCrcTable() {
  const table = new Uint32Array(256);

  for (let index = 0; index < table.length; index += 1) {
    let value = index;

    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }

    table[index] = value >>> 0;
  }

  return table;
}

const crcTable = createCrcTable();

function crc32(bytes) {
  let crc = 0xffffffff;

  for (const byte of bytes) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, date: dosDate };
}

function writeUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function writeUint32(view, offset, value) {
  view.setUint32(offset, value >>> 0, true);
}

async function zipEntryBytes(file) {
  if (file.blob) {
    return new Uint8Array(await file.blob.arrayBuffer());
  }

  return new TextEncoder().encode(file.content || "");
}

async function createZip(files, onProgress) {
  const encoder = new TextEncoder();
  const now = dosDateTime(new Date());
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    const nameBytes = encoder.encode(file.name);
    const data = await zipEntryBytes(file);
    const crc = crc32(data);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);

    writeUint32(localView, 0, 0x04034b50);
    writeUint16(localView, 4, 20);
    writeUint16(localView, 6, 0);
    writeUint16(localView, 8, 0);
    writeUint16(localView, 10, now.time);
    writeUint16(localView, 12, now.date);
    writeUint32(localView, 14, crc);
    writeUint32(localView, 18, data.length);
    writeUint32(localView, 22, data.length);
    writeUint16(localView, 26, nameBytes.length);
    writeUint16(localView, 28, 0);
    localHeader.set(nameBytes, 30);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    writeUint32(centralView, 0, 0x02014b50);
    writeUint16(centralView, 4, 20);
    writeUint16(centralView, 6, 20);
    writeUint16(centralView, 8, 0);
    writeUint16(centralView, 10, 0);
    writeUint16(centralView, 12, now.time);
    writeUint16(centralView, 14, now.date);
    writeUint32(centralView, 16, crc);
    writeUint32(centralView, 20, data.length);
    writeUint32(centralView, 24, data.length);
    writeUint16(centralView, 28, nameBytes.length);
    writeUint16(centralView, 30, 0);
    writeUint16(centralView, 32, 0);
    writeUint16(centralView, 34, 0);
    writeUint16(centralView, 36, 0);
    writeUint32(centralView, 38, 0);
    writeUint32(centralView, 42, offset);
    centralHeader.set(nameBytes, 46);

    localParts.push(localHeader, data);
    centralParts.push(centralHeader);
    offset += localHeader.length + data.length;
    onProgress((index + 1) / files.length);
  }

  const centralOffset = offset;
  const centralSize = centralParts.reduce((size, part) => size + part.length, 0);
  const endHeader = new Uint8Array(22);
  const endView = new DataView(endHeader.buffer);
  writeUint32(endView, 0, 0x06054b50);
  writeUint16(endView, 4, 0);
  writeUint16(endView, 6, 0);
  writeUint16(endView, 8, files.length);
  writeUint16(endView, 10, files.length);
  writeUint32(endView, 12, centralSize);
  writeUint32(endView, 16, centralOffset);
  writeUint16(endView, 20, 0);

  return new Blob([...localParts, ...centralParts, endHeader], { type: "application/zip" });
}

async function exportVideo() {
  if (isExporting) {
    return;
  }

  const plan = buildExportPlan();
  if (plan.kind === "unsupported") {
    setStatus(plan.label, 0);
    return;
  }

  isExporting = true;
  previewBtn.disabled = true;
  exportBtn.disabled = true;
  cancelAnimationFrame(previewFrame);

  try {
    const scene = await prepareScene({ revealZoom: true });
    let output;

    if (plan.kind === "video") {
      try {
        output = await recordVideo(scene, plan.profiles);
      } catch (error) {
        if (!canExportFrames()) {
          throw error;
        }

        markRecorderFailure(plan.profiles, error);
        console.warn(error);
        setStatus(`${plan.label} failed; exporting PNG frames instead`, 0);
        output = await exportFrameZip(scene);
      }
    } else {
      output = await exportFrameZip(scene);
    }

    downloadBlob(output.blob, {
      extension: output.extension,
      mime: output.mime,
      suffix: output.extension === "zip" ? "frames" : "video"
    });
    outputFormatText.textContent = output.mime
      ? `${output.label} (${output.mime})`
      : output.label;
    setStatus(`Exported ${output.label}`, 1);
  } catch (error) {
    console.error(error);
    setStatus(`Export failed: ${error.message || "Unknown error"}`, 0);
  } finally {
    isExporting = false;
    previewBtn.disabled = false;
    updateExportSupportInfo({ preserveOutput: true });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  preview().catch((error) => {
    console.error(error);
    setStatus(error.message || "Preview failed", 0);
  });
});

exportBtn.addEventListener("click", exportVideo);
exportModeInput.addEventListener("change", () => {
  updateExportSupportInfo();
  setStatus("Export format updated", 0);
});

updateExportSupportInfo();

prepareScene().catch((error) => {
  console.error(error);
  setStatus(error.message || "Map failed to load", 0);
});
