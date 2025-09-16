let currentColor = '#000000'; // Standardfarbe für den Stift (Schwarz)
let isDrawing = false;        // Status, ob gerade gezeichnet wird
let lineWidth = 3;            // Standard-Linienstärke
let isEraser = false;         // Status, ob Radierer aktiv ist

const canvas = document.getElementById('taktikBoardCanvas'); // Zeichenfläche
const container = document.querySelector('.drawing-area');   // Container für Größenanpassung
const ctx = canvas.getContext('2d');                         // Zeichenkontext für 2D-Zeichnung

// Farbauswahl vorbereiten
const swatches = document.querySelectorAll('.color-swatch'); // Alle Farbfelder
swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        // Alle Farbfelder deaktivieren
        swatches.forEach(s => s.classList.remove('active'));
        // Geklicktes Farbfeld aktivieren
        swatch.classList.add('active');
        // Farbe aus dem data-color Attribut übernehmen
        currentColor = swatch.dataset.color;
        isEraser = false; // Stift aktivieren
        updateToolUI();   // UI aktualisieren
    });
});

swatches[0].classList.add('active'); // Erste Farbe standardmäßig aktiv

// Werkzeug-Schalter vorbereiten
const penTool = document.getElementById('penTool');       // Stift-Button
const eraserTool = document.getElementById('eraserTool'); // Radierer-Button

penTool.addEventListener('click', () => {
    isEraser = false; // Stift aktivieren
    updateToolUI();   // UI aktualisieren
});

eraserTool.addEventListener('click', () => {
    isEraser = true;  // Radierer aktivieren
    updateToolUI();   // UI aktualisieren
});

// UI-Status für Werkzeug-Schalter aktualisieren
function updateToolUI() {
    penTool.classList.toggle('active', !isEraser);     // Stift aktiv, wenn Radierer aus
    eraserTool.classList.toggle('active', isEraser);   // Radierer aktiv, wenn isEraser true
}

// Linienstärke über Slider anpassen
const slider = document.getElementById('lineWidthSlider');
slider.addEventListener('input', (e) => {
    lineWidth = parseInt(e.target.value); // neuen Wert übernehmen
});

// Zeichenvorgang starten
canvas.addEventListener('mousedown', (e) => {
    const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
    if (elementUnderMouse.classList.contains('placed-object')) return; // nicht auf Icons zeichnen
    isDrawing = true; // Zeichnen aktivieren
    ctx.beginPath();  // neuen Pfad starten
    ctx.moveTo(getX(e), getY(e)); // Startpunkt setzen
});

// Zeichenvorgang fortsetzen bei Mausbewegung
canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return; // nur wenn Zeichnen aktiv ist

    ctx.lineWidth = lineWidth; // Linienstärke setzen
    ctx.lineCap = 'round';     // Linienenden abrunden

    if (isEraser) {
        ctx.globalCompositeOperation = 'destination-out'; // löscht statt zu zeichnen
        ctx.strokeStyle = 'rgba(0,0,0,1)'; // Farbe egal, Hauptsache deckend
    } else {
        ctx.globalCompositeOperation = 'source-over'; // normal zeichnen
        ctx.strokeStyle = currentColor; // aktuelle Farbe verwenden
    }

    ctx.lineTo(getX(e), getY(e)); // Linie zum aktuellen Punkt
    ctx.stroke(); // Linie zeichnen
});

// Zeichenvorgang beenden bei Maus loslassen
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Zeichenvorgang beenden, wenn Maus das Canvas verlässt
canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

// Canvas-Größe dynamisch an Container anpassen
function resizeCanvas() {
    canvas.width = container.clientWidth;  // Breite anpassen
    canvas.height = container.clientHeight; // Höhe anpassen
}
window.addEventListener('resize', resizeCanvas); // bei Fenstergröße ändern
resizeCanvas(); // initiale Anpassung

// Hilfsfunktionen zur Mausposition relativ zum Canvas
function getX(e) {
    const rect = canvas.getBoundingClientRect();
    return e.clientX - rect.left;
}
function getY(e) {
    const rect = canvas.getBoundingClientRect();
    return e.clientY - rect.top;
}

// Button zum Löschen des gesamten Canvas-Inhalts
const resetCanvasBtn = document.getElementById('delete');
resetCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // alles löschen
});