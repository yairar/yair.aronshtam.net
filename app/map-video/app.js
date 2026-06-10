const canvas = document.querySelector("#mapCanvas");
const ctx = canvas.getContext("2d");

const startInput = document.querySelector("#startPoint");
const endInput = document.querySelector("#endPoint");
const durationInput = document.querySelector("#duration");
const zoomInput = document.querySelector("#zoomLevel");
const mapTypeInput = document.querySelector("#mapType");
const followRoadsInput = document.querySelector("#followRoads");
const form = document.querySelector("#settings");
const exportBtn = document.querySelector("#exportBtn");
const previewBtn = document.querySelector("#previewBtn");
const statusText = document.querySelector("#statusText");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const TILE_SIZE = 256;
const FPS = 30;

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

function supportedMime() {
  const options = [
    "video/mp4;codecs=avc1.42E01E",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm"
  ];

  return options.find((mime) => MediaRecorder.isTypeSupported(mime)) || "";
}

function downloadBlob(blob, mime) {
  const extension = mime.includes("mp4") ? "mp4" : "webm";
  const anchor = document.createElement("a");
  const url = URL.createObjectURL(blob);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  anchor.href = url;
  anchor.download = `relive-map-${stamp}.${extension}`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 3000);
}

async function exportVideo() {
  if (isExporting) {
    return;
  }

  if (!canvas.captureStream || !window.MediaRecorder) {
    setStatus("Video export is not supported in this browser", 0);
    return;
  }

  isExporting = true;
  previewBtn.disabled = true;
  exportBtn.disabled = true;
  cancelAnimationFrame(previewFrame);

  try {
    const scene = await prepareScene({ revealZoom: true });
    const mime = supportedMime();
    const stream = canvas.captureStream(FPS);
    const recorder = new MediaRecorder(stream, mime ? { mimeType: mime, videoBitsPerSecond: 8_000_000 } : undefined);
    const chunks = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    const stopped = new Promise((resolve) => {
      recorder.onstop = resolve;
    });

    recorder.start(250);
    const startedAt = performance.now();

    await new Promise((resolve) => {
      function tick(now) {
        const progress = clamp((now - startedAt) / (scene.duration * 1000), 0, 1);
        drawFrame(scene, progress);
        setStatus("Exporting", progress);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          drawFrame(scene, 1);
          resolve();
        }
      }

      requestAnimationFrame(tick);
    });

    recorder.stop();
    await stopped;
    stream.getTracks().forEach((track) => track.stop());

    const blob = new Blob(chunks, { type: mime || "video/webm" });
    downloadBlob(blob, mime || "video/webm");
    setStatus("Video exported", 1);
  } catch (error) {
    console.error(error);
    setStatus(error.message || "Export failed", 0);
  } finally {
    isExporting = false;
    previewBtn.disabled = false;
    exportBtn.disabled = false;
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

prepareScene().catch((error) => {
  console.error(error);
  setStatus(error.message || "Map failed to load", 0);
});
