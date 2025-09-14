// SCROLLING FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function () {

  // ========================
  // Section Scroll Buttons
  // ========================

  const sections = [
    {btn: 'scroll-to-factsheet-cbr1000rr', section: 'factsheet-cbr1000rr'},
    {btn: 'scroll-to-factsheet-cbr500r', section: 'factsheet-cbr500r'},
    {btn: 'scroll-to-zero-to-hundred', section: '0-100'},
    {btn: 'scroll-to-nuerburgring', section: 'nuerburgring'},
    {btn: 'scroll-to-gallery', section: 'gallery'}
  ];

  sections.forEach(item => {
    const btn = document.getElementById(item.btn);
    const sec = document.getElementById(item.section);
    if (btn && sec) {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', function () {
        sec.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });



  // ========================
  // Media Volume Setup
  // ========================

  const audio = document.getElementById("audio-cbr500r");
  if (audio) audio.volume = 1.0;

  const video = document.getElementById("cbr500r-video");
  if (video) video.volume = 0.3;

// ========================
// Section 5 - Chart
// ========================

const xValues = ["CBR 1000 RR (7.15 Min)", "CBR 500 R (10.83 Min)"];
const yValues = [7.15, 10.83];
const barColors = ["#e60000", "#0066cc"];

// NEU: Canvas + Kontext holen
const canvas = document.getElementById("myChart");
if (canvas && window.Chart) {
  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      responsive: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Nürburgring Rundenzeiten in Minuten",
        fontColor: "#ecf0f1",
        fontSize: 30
      },
      scales: {
        yAxes: [{
          ticks: { beginAtZero: true, max: 12, fontColor: "#ecf0f1", fontSize: 16 },
          gridLines: { color: "#ecf0f1" }
        }],
        xAxes: [{
          ticks: { fontColor: "#ecf0f1", fontSize: 20 },
          gridLines: { color: "#ecf0f1", display: false }
        }]
      }
    }
  });
}


});
