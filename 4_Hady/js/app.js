function drawVerbrauch() {
  const canvas = document.getElementById("verbrauchCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const value = Number(canvas.dataset.value) || 8;   // L/100 km
  const max   = Number(canvas.dataset.max)   || 15;  // Anzahl Blöcke

  // Layout
  const blockW = 30;
  const blockH = 50;
  const gap    = 8;
  const padX   = 20;
  const padY   = 15;

  // notwendige Zeichenfläche (Bitmap-Größe)
  const neededWidth  = padX * 2 + max * blockW + (max - 1) * gap;
  const neededHeight = padY * 2 + blockH;

  // HiDPI
  const dpr = window.devicePixelRatio || 1;
  canvas.width  = Math.round(neededWidth  * dpr);
  canvas.height = Math.round(neededHeight * dpr);

  // visuelle (CSS) Größe
  canvas.style.width  = neededWidth + "px";
  canvas.style.height = neededHeight + "px";

  // DPI-Skalierung
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Hintergrund (optional)
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, neededWidth, neededHeight);

  // Blöcke
  for (let i = 0; i < max; i++) {
    const x = padX + i * (blockW + gap);
    const y = padY;

    ctx.fillStyle = i < value ? "#2e7d32" : "#e0e0e0";
    ctx.fillRect(x, y, blockW, blockH);

    ctx.strokeStyle = "#555";
    ctx.strokeRect(x, y, blockW, blockH);
  }
}

// Sicher starten – egal wann das Script ausgeführt wird
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", drawVerbrauch);
} else {
  drawVerbrauch();
}
