let currentColor = '#000000';
let isDrawing = false;
let lineWidth = 3;
let isEraser = false;

const canvas = document.getElementById('taktikBoardCanvas');
const container = document.querySelector('.drawing-area');
const ctx = canvas.getContext('2d');

// Farbauswahl wie vorher
const swatches = document.querySelectorAll('.color-swatch');
swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        // alle deaktivieren
        swatches.forEach(s => s.classList.remove('active'));
        // nur den geklickten aktiv machen
        swatch.classList.add('active');
        // Farbe übernehmen
        currentColor = swatch.dataset.color;
        isEraser = false;
        updateToolUI();
    });
});

swatches[0].classList.add('active');

// Werkzeug-Schalter
const penTool = document.getElementById('penTool');
const eraserTool = document.getElementById('eraserTool');

penTool.addEventListener('click', () => {
    isEraser = false;
    updateToolUI();
});

eraserTool.addEventListener('click', () => {
    isEraser = true;
    updateToolUI();
});

function updateToolUI() {
    penTool.classList.toggle('active', !isEraser);
    eraserTool.classList.toggle('active', isEraser);
}

// Linienstärke
const slider = document.getElementById('lineWidthSlider');
slider.addEventListener('input', (e) => {
    lineWidth = parseInt(e.target.value);
});

// Zeichnen
canvas.addEventListener('mousedown', (e) => {
    const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
    if (elementUnderMouse.classList.contains('placed-object')) return;
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(getX(e), getY(e));
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

if (isEraser) {
    ctx.globalCompositeOperation = 'destination-out'; // "löschen"
    ctx.strokeStyle = 'rgba(0,0,0,1)'; // Farbe egal, Hauptsache opaque
} else {
    ctx.globalCompositeOperation = 'source-over'; // "normal malen"
    ctx.strokeStyle = currentColor;
}

ctx.lineTo(getX(e), getY(e));
ctx.stroke();

});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

// Canvas-Größe dynamisch setzen
function resizeCanvas() {
    canvas.width = container.clientWidth;;
    canvas.height = container.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function getX(e) {
    const rect = canvas.getBoundingClientRect();
    return e.clientX - rect.left;
}
function getY(e) {
    const rect = canvas.getBoundingClientRect();
    return e.clientY - rect.top;
}

// Delete-Button
const resetCanvasBtn = document.getElementById('delete');
resetCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

