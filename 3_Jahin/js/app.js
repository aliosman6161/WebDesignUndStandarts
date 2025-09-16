const races2025 = [
  {
    round: 1, 
    gp: "Australien", 
    circuit: "Albert Park Circuit", 
    location: "Melbourne, Australien", 
    date: "14–16 Mär 2025", lengthKm: 5.278, 
    corners: 14,
    winners: { p1: "Lando Norris", p2: "Max Verstappen", p3: "George Russell" },
    fastestLap: { driver: "Lando Norris", time: "1:20.534", lap: 54 }
  },  

  {
    round: 2,
    gp: "China",
    circuit: "Shanghai International Circuit",
    location: "Shanghai, China",
    date: "21–23 Mär 2025",
    lengthKm: 5.451,
    corners: 16,
    winners: { p1: "Oscar Piastri", p2: "Lando Norris", p3: "George Russell" },
    fastestLap: { driver: "Lando Norris", time: "1:35.454", lap: 53 }
  },

  {
    round: 3,
    gp: "Japan",
    circuit: "Suzuka Circuit",
    location: "Suzuka, Japan",
    date: "04–06 Apr 2025",
    lengthKm: 5.807,
    corners: 18,
    winners: { p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    fastestLap: { driver: "Kimi Antonelli", time: "1:30.965", lap: 50 }
  },  

  {
    round: 4,
    gp: "Bahrain",
    circuit: "Bahrain International Circuit",
    location: "Sakhir, Bahrain",
    date: "11–13 Apr 2025",
    lengthKm: 5.412,
    corners: 15,
    winners: { p1: "Oscar Piastri", p2: "George Russell", p3: "Lando Norris" },
    fastestLap: { driver: "Oscar Piastri", time: "1:35.140", lap: 36 }
  },  

  {
    round: 5,
    gp: "Saudi-Arabien",
    circuit: "Jeddah Corniche Circuit",
    location: "Jeddah, Saudi-Arabien",
    date: "18–20 Apr 2025",
    lengthKm: 6.174,
    corners: 27,
    winners: { p1: "Oscar Piastri", p2: "Max Verstappen", p3: "Charles Leclerc" },
    fastestLap: { driver: "Lando Norris", time: "1:31.778", lap: 41 }
  },  

  {
    round: 6,
    gp: "USA – Miami",
    circuit: "Miami International Autodrome",
    location: "Miami, USA",
    date: "02–04 Mai 2025",
    lengthKm: 5.412,
    corners: 19,
    winners: { p1: "Oscar Piastri", p2: "Lando Norris", p3: "George Russell" },
    fastestLap: { driver: "Lando Norris", time: "1:29.746", lap: 36 }
  },

  {
    round: 7,
    gp: "Emilia-Romagna",
    circuit: "Autodromo Enzo e Dino Ferrari",
    location: "Imola, Italien",
    date: "16–18 Mai 2025",
    lengthKm: 4.909,
    corners: 19,
    winners: { p1: "Charles Leclerc", p2: "Oscar Piastri", p3: "Lando Norris" },
    fastestLap: { driver: "Charles Leclerc", time: "1:18.892", lap: 54 }
  },

  {
    round: 8,
    gp: "Monaco",
    circuit: "Circuit de Monaco",
    location: "Monte Carlo, Monaco",
    date: "23–25 Mai 2025",
    lengthKm: 3.337,
    corners: 19,
    winners: { p1: "Charles Leclerc", p2: "Oscar Piastri", p3: "Carlos Sainz" },
    fastestLap: { driver: "Lewis Hamilton", time: "1:15.650", lap: 71 }
  },

  {
    round: 9,
    gp: "Spanien",
    circuit: "Circuit de Barcelona-Catalunya",
    location: "Barcelona, Spanien",
    date: "30 Mai–01 Jun 2025",
    lengthKm: 4.657,
    corners: 14,
    winners: { p1: "Max Verstappen", p2: "Lando Norris", p3: "Charles Leclerc" },
    fastestLap: { driver: "George Russell", time: "1:17.600", lap: 58 }
  },

  {
    round: 10,
    gp: "Kanada",
    circuit: "Circuit Gilles-Villeneuve",
    location: "Montréal, Kanada",
    date: "13–15 Jun 2025",
    lengthKm: 4.361,
    corners: 14,
    winners: { p1: "George Russell", p2: "Oscar Piastri", p3: "Lewis Hamilton" },
    fastestLap: { driver: "Max Verstappen", time: "1:14.200", lap: 62 }
  },

  {
    round: 11,
    gp: "Österreich",
    circuit: "Red Bull Ring",
    location: "Spielberg, Österreich",
    date: "27–29 Jun 2025",
    lengthKm: 4.318,
    corners: 10,
    winners: { p1: "Max Verstappen", p2: "Lando Norris", p3: "Charles Leclerc" },
    fastestLap: { driver: "Oscar Piastri", time: "1:07.900", lap: 62 }
  },

  {
    round: 12,
    gp: "Großbritannien",
    circuit: "Silverstone Circuit",
    location: "Silverstone, UK",
    date: "04–06 Jul 2025",
    lengthKm: 5.891,
    corners: 18,
    winners: { p1: "Lewis Hamilton", p2: "George Russell", p3: "Lando Norris" },
    fastestLap: { driver: "Charles Leclerc", time: "1:27.300", lap: 49 }
  },

  {
    round: 13,
    gp: "Belgien",
    circuit: "Spa-Francorchamps",
    location: "Spa, Belgien",
    date: "25–27 Jul 2025",
    lengthKm: 7.004,
    corners: 19,
    winners: { p1: "Lewis Hamilton", p2: "George Russell", p3: "Charles Leclerc" },
    fastestLap: { driver: "Max Verstappen", time: "1:47.900", lap: 42 }
  },

  {
    round: 14,
    gp: "Ungarn",
    circuit: "Hungaroring",
    location: "Budapest, Ungarn",
    date: "01–03 Aug 2025",
    lengthKm: 4.381,
    corners: 14,
    winners: { p1: "Oscar Piastri", p2: "Lando Norris", p3: "Charles Leclerc" },
    fastestLap: { driver: "Lewis Hamilton", time: "1:20.400", lap: 63 }
  },

  {
    round: 15,
    gp: "Niederlande",
    circuit: "CM.com Circuit Zandvoort",
    location: "Zandvoort, Niederlande",
    date: "29–31 Aug 2025",
    lengthKm: 4.259,
    corners: 14,
    winners: { p1: "Max Verstappen", p2: "Lando Norris", p3: "Lewis Hamilton" },
    fastestLap: { driver: "Charles Leclerc", time: "1:12.100", lap: 66 }
  },

  {
    round: 16,
    gp: "Italien",
    circuit: "Monza",
    location: "Monza, Italien",
    date: "05–07 Sep 2025",
    lengthKm: 5.793,
    corners: 11,
    winners: { p1: "Charles Leclerc", p2: "Carlos Sainz", p3: "Lando Norris" },
    fastestLap: { driver: "Max Verstappen", time: "1:22.500", lap: 53 }
  },

  {
    round: 17,
    gp: "Aserbaidschan",
    circuit: "Baku City Circuit",
    location: "Baku, Aserbaidschan",
    date: "19–21 Sep 2025",
    lengthKm: 6.003,
    corners: 20,
    winners: null,
    fastestLap: null
  },

  {
    round: 18,
    gp: "Singapur",
    circuit: "Marina Bay Street Circuit",
    location: "Singapur",
    date: "03–05 Okt 2025",
    lengthKm: 4.940,
    corners: 19,
    winners: null,
    fastestLap: null
  },  

  {
    round: 19,
    gp: "USA – Austin",
    circuit: "Circuit of the Americas",
    location: "Austin, USA",
    date: "17–19 Okt 2025",
    lengthKm: 5.513,
    corners: 20,
    winners: null,
    fastestLap: null
  },

  {
    round: 20,
    gp: "Mexiko",
    circuit: "Autódromo Hermanos Rodríguez",
    location: "Mexiko-Stadt, Mexiko",
    date: "24–26 Okt 2025",
    lengthKm: 4.304,
    corners: 17,
    winners: null,
    fastestLap: null
  },

  {
    round: 21,
    gp: "Brasilien",
    circuit: "Interlagos",
    location: "São Paulo, Brasilien",
    date: "07–09 Nov 2025",
    lengthKm: 4.309,
    corners: 15,
    winners: null,
    fastestLap: null
  },

  {
    round: 22,
    gp: "USA – Las Vegas",
    circuit: "Las Vegas Strip Circuit",
    location: "Las Vegas, USA",
    date: "20–22 Nov 2025",
    lengthKm: 6.201,
    corners: 17,
    winners: null,
    fastestLap: null
  },

  {
    round: 23,
    gp: "Katar",
    circuit: "Lusail International Circuit",
    location: "Lusail, Katar",
    date: "28–30 Nov 2025",
    lengthKm: 5.419,
    corners: 16,
    winners: null,
    fastestLap: null
  },

  {
    round: 24,
    gp: "Abu Dhabi",
    circuit: "Yas Marina Circuit",
    location: "Abu Dhabi, VAE",
    date: "05–07 Dez 2025",
    lengthKm: 5.281,
    corners: 16,
    winners: null,
    fastestLap: null
  }
];
  
  let idx = 0;
  
  function renderCard(i) {
    const r = races2025[i];
    const winners = r.winners 
      ? `<div class="podium"><span>1. ${r.winners.p1}</span><span>2. ${r.winners.p2}</span><span>3. ${r.winners.p3}</span></div>` 
      : `<div class="podium placeholder"><span>1. —</span><span>2. —</span><span>3. —</span></div>`;
  
    const specs = `
      <div class="specs">
        <div><strong>Länge</strong><span>${r.lengthKm ? r.lengthKm.toFixed(3) + " km" : "—"}</span></div>
        <div><strong>Kurven</strong><span>${r.corners ?? "—"}</span></div>
        <div><strong>Schnellste Runde</strong><span>${r.fastestLap ? r.fastestLap.driver + " • " + r.fastestLap.time + " (R" + r.fastestLap.lap + ")" : "—"}</span></div>
      </div>`;
  
    const nextBadge = r.round === 17 ? `<div class="next-badge">NEXT</div>` : "";
  
    const html = `
      ${nextBadge}
      <div class="badge">R${String(r.round).padStart(2,"0")}</div>
      <h3>${r.gp}</h3>
      <p class="loc">${r.location}</p>
      <p class="date">${r.date}</p>
      <p class="circuit">${r.circuit}</p>
      ${winners}
      ${specs}
    `;
  
    document.getElementById("race-card").innerHTML = html;
  }  
  
  function prev() { idx = (idx - 1 + races2025.length) % races2025.length; renderCard(idx); }
  function next() { idx = (idx + 1) % races2025.length; renderCard(idx); }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Kalender-Buttons
    document.querySelector(".nav.prev").addEventListener("click", prev);
    document.querySelector(".nav.next").addEventListener("click", next);
    renderCard(idx);
  
    // Standings (Canvas + Reiter)
    initStandingsTabs();
  });
  
  
  // === Standings-Daten (Beispiel) ===
const driverStandings = [
  { name: "Oscar Piastri", points: 204 },
  { name: "Lando Norris", points: 198 },
  { name: "Max Verstappen", points: 185 },
  { name: "Charles Leclerc", points: 172 },
  { name: "George Russell", points: 160 },
  { name: "Carlos Sainz", points: 148 },
  { name: "Lewis Hamilton", points: 142 },
  { name: "Fernando Alonso", points: 110 },
  { name: "Sergio Pérez", points: 104 },
  { name: "Yuki Tsunoda", points: 88 }
];

const constructorStandings = [
  { name: "McLaren", points: 402 },
  { name: "Red Bull", points: 370 },
  { name: "Ferrari", points: 355 },
  { name: "Mercedes", points: 302 },
  { name: "Aston Martin", points: 188 }
];

// === Canvas-Zeichner (horizontaler Balken-Chart) ===
function drawStandingsCanvas(data, mode = "drivers"){
  const canvas = document.getElementById("standingsCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Größe setzen (breit = Containerbreite, feste Höhe gut für Beamer)
  const wrap = canvas.parentElement;
  const w = Math.max(600, wrap.clientWidth);
  const h = 520;

  // HiDPI-Schärfe
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  canvas.width  = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.style.width  = "100%";
  canvas.style.height = h + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Chart-Layout
  const padL = 56, padR = 24, padT = 40, padB = 90; // unten Platz für Labels
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  ctx.clearRect(0, 0, w, h);

  // Achsen
  ctx.strokeStyle = "rgba(255,255,255,.25)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, padT);
  ctx.lineTo(padL, padT + chartH);
  ctx.lineTo(padL + chartW, padT + chartH);
  ctx.stroke();

  // Gitter + Skala
  const maxPoints = Math.max(...data.map(d => d.points)) || 1;
  const steps = 4;
  ctx.font = "12px 'Open Sans', sans-serif";
  ctx.fillStyle = "#9CA3AF";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let i = 1; i <= steps; i++) {
    const y = padT + chartH - (i / steps) * chartH;
    ctx.strokeStyle = "rgba(255,255,255,.10)";
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(padL + chartW, y);
    ctx.stroke();
    const val = Math.round((i / steps) * maxPoints);
    ctx.fillText(String(val), padL - 8, y);
  }

  // Säulen
  const n = data.length;
  const gap = 12;
  const colW = Math.max(18, (chartW - gap * (n - 1)) / n);

  ctx.textAlign = "center";

  data.forEach((d, i) => {
    const x = padL + i * (colW + gap);
    const hVal = (d.points / maxPoints) * chartH;
    const y = padT + chartH - hVal;

    // Säule
    ctx.fillStyle = "#d90429";
    ctx.fillRect(x, y, colW, hVal);

    // Wert über der Säule
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "12px 'Open Sans', sans-serif";
    ctx.textBaseline = "bottom";
    ctx.fillText(String(d.points), x + colW / 2, y - 6);

    // Label unter der Säule
    ctx.save();
    ctx.translate(x + colW / 2, padT + chartH + 8);
    ctx.rotate(-Math.PI / 6); // ~ -30°
    ctx.fillStyle = "#CBD5E1";
    ctx.textBaseline = "top";
    ctx.font = "12px 'Open Sans', sans-serif";

    const labelText = (mode === "constructors")
      ? d.name                                  // Teams: voller Name (z. B. "Aston Martin")
      : d.name.split(" ").slice(-1)[0];         // Fahrer: Nachname (z. B. "Leclerc")

    ctx.fillText(labelText, 0, 0);
    ctx.restore();
  });
}

// === Tabs initialisieren (Fahrer / Teams) ===
function initStandingsTabs(){
  let view = "drivers";
  let data = driverStandings;
  const buttons = document.querySelectorAll(".standings-toolbar .std-btn");

  const redraw = () => drawStandingsCanvas(data, view);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.toggle("is-active", b === btn));
      view = btn.dataset.view;  // "drivers" oder "constructors"
      data = (view === "drivers") ? driverStandings : constructorStandings;
      redraw();
    });
  });

  redraw();
  window.addEventListener("resize", redraw);
}