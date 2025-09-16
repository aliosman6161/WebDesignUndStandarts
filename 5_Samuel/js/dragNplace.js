let draggedImage = null; // Variable zum Speichern des aktuell gezogenen Bildes

// Ziehbare Vorlagen vorbereiten
document.querySelectorAll('.draggable').forEach(img => {
    // Wenn ein Bild gezogen wird, speichern wir es in draggedImage
    img.addEventListener('dragstart', (e) => {
        draggedImage = e.target;
    });
});

const drawingArea = document.getElementById('drawingArea'); // Zielbereich für das Platzieren

// Erlaubt das Ablegen im drawingArea (standardmäßig verboten)
drawingArea.addEventListener('dragover', (e) => {
    e.preventDefault(); // verhindert das Standardverhalten (z. B. Öffnen als Datei)
});

// Beim Ablegen eines Bildes im drawingArea
drawingArea.addEventListener('drop', (e) => {
    e.preventDefault(); // verhindert Standardverhalten

    if (!draggedImage) return; // falls kein Bild gezogen wurde, abbrechen

    // Nur wenn das gezogene Bild aus dem .objects-Bereich stammt
    if (draggedImage.closest('.objects')) {
        // Position des Mauszeigers relativ zum drawingArea
        const rect = drawingArea.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        // Neues Bild-Element erstellen
        const newImg = document.createElement('img');
        newImg.src = draggedImage.src; // gleiche Quelle wie das gezogene Bild
        newImg.className = 'placed-object'; // CSS-Klasse für Styling und Positionierung
        newImg.style.left = `${offsetX - 20}px`; // horizontale Position (leicht versetzt)
        newImg.style.top = `${offsetY - 20}px`; // vertikale Position (leicht versetzt)

        // Manuelles Verschieben aktivieren
        enableDragging(newImg);

        // Bild in den drawingArea einfügen
        drawingArea.appendChild(newImg);
    }

    draggedImage = null; // zurücksetzen für den nächsten Drag-Vorgang
});

// Funktion zum Aktivieren von manuellem Verschieben per Maus
function enableDragging(el) {
    let isDragging = false; // Status, ob gerade gezogen wird
    let offsetX = 0; // Mausposition relativ zum Element (X)
    let offsetY = 0; // Mausposition relativ zum Element (Y)

    // Wenn Maus gedrückt wird → Drag starten
    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.offsetX; // Abstand von Maus zur linken Kante des Elements
        offsetY = e.offsetY; // Abstand von Maus zur oberen Kante des Elements
        el.style.cursor = 'grabbing'; // visuelles Feedback
        e.preventDefault(); // verhindert z. B. Textauswahl
    });

    // Mausbewegung → Element verschieben
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // nur wenn Drag aktiv ist

        const rect = drawingArea.getBoundingClientRect(); // Position des Containers
        el.style.left = `${e.clientX - rect.left - offsetX}px`; // neue X-Position
        el.style.top = `${e.clientY - rect.top - offsetY}px`; // neue Y-Position
    });

    // Maus loslassen → Drag beenden
    document.addEventListener('mouseup', () => {
        isDragging = false;
        el.style.cursor = 'grab'; // Cursor zurücksetzen
    });
}

// Reset-Button: alle platzierten Objekte entfernen
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    // Alle Elemente mit der Klasse .placed-object entfernen
    document.querySelectorAll('.placed-object').forEach(el => el.remove());
});