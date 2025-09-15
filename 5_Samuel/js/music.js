const musicSwitch = document.getElementById('musicSwitch');
const bgMusic = document.getElementById('bgMusic');

// Initial: Audio stumm
bgMusic.muted = true;

musicSwitch.addEventListener('change', () => {
    if (musicSwitch.checked) {
        bgMusic.play();
        bgMusic.muted = false;  // Ton an
    } else {
        bgMusic.muted = true;   // Ton aus
    }
});
