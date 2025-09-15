let draggedImage = null;

// Ziehbare Vorlagen vorbereiten
document.querySelectorAll('.draggable').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        draggedImage = e.target;
    });
});

const drawingArea = document.getElementById('drawingArea');

drawingArea.addEventListener('dragover', (e) => {
    e.preventDefault();
});

drawingArea.addEventListener('drop', (e) => {
    e.preventDefault();
    if (!draggedImage) return;

    // Neue Kopie nur bei Vorlage-Objekten
    if (draggedImage.closest('.objects')) {
        const rect = drawingArea.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const newImg = document.createElement('img');
        newImg.src = draggedImage.src;
        newImg.className = 'placed-object';
        newImg.style.left = `${offsetX - 20}px`;
        newImg.style.top = `${offsetY - 20}px`;

        // Enable manuelles Verschieben
        enableDragging(newImg);

        drawingArea.appendChild(newImg);
    }

    draggedImage = null;
});

// Nur manuelles Verschieben für platzierte Objekte
function enableDragging(el) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        el.style.cursor = 'grabbing';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const rect = drawingArea.getBoundingClientRect();
        el.style.left = `${e.clientX - rect.left - offsetX}px`;
        el.style.top = `${e.clientY - rect.top - offsetY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        el.style.cursor = 'grab';
    });
}

// Reset-Button: alle platzierten Objekte entfernen
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.placed-object').forEach(el => el.remove());
});


