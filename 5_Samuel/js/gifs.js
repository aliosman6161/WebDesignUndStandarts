function openOverlay(src1, src2) {
  document.getElementById("gif1").src = src1;
  document.getElementById("gif2").src = src2;
  document.getElementById("overlay").classList.add("active");
  document.body.classList.add("no-scroll"); // Scroll deaktivieren
}

function closeOverlay() {
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("gif1").src = "";
  document.getElementById("gif2").src = "";
  document.body.classList.remove("no-scroll"); // Scroll wieder aktivieren
}