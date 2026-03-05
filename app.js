const EJERCICIOS = [
  // HTML+CSS
  { titulo: "Big Boss Estilos", url: "ejercicios/bigBossEstilos/", cat: "HTML+CSS" },
  { titulo: "Adivinar Número", url: "ejercicios/adivinarNumero/", cat: "HTML+CSS+JS" },
  { titulo: "Grid básico", url: "ejercicios/grid/", cat: "HTML+CSS" },

  // JavaScript
  { titulo: "DOM · Eventos", url: "ejercicios/dom-eventos/", cat: "JavaScript" },
  { titulo: "Arrays · Métodos", url: "ejercicios/arrays/", cat: "JavaScript" },
];

const grid = document.getElementById("grid");
const chips = document.getElementById("chips");

let filtro = "Todas";

function colorAleatorio() {
  const h = Math.floor(Math.random() * 360);
  const s = 65 + Math.random() * 20;
  const l = 38 + Math.random() * 22;
  return `linear-gradient(135deg,
    hsla(${h} ${s}% ${l}% / .92),
    hsla(${(h + 28) % 360} ${s}% ${Math.max(18, l - 10)}% / .92)
  )`;
}

// Busca (rows, cols) con cols*rows>=n y ratio cols/rows parecido a vw/vh
function bestGrid(n, vw, vh) {
  const target = vw / vh;
  let best = null;

  // buscamos en un rango razonable
  for (let rows = 1; rows <= 20; rows++) {
    for (let cols = 1; cols <= 30; cols++) {
      const cells = rows * cols;
      if (cells < n) continue;

      const ratio = cols / rows;
      const ratioErr = Math.abs(ratio - target);
      const extra = cells - n;

      // preferimos: ratio más cercano, y luego menos celdas extra
      const score = ratioErr * 10 + extra * 0.05;

      if (!best || score < best.score) {
        best = { rows, cols, score };
      }
    }
  }

  return best || { rows: 3, cols: 4 };
}

function renderChips() {
  const cats = ["Todas", ...new Set(EJERCICIOS.map(e => e.cat))];

  chips.innerHTML = "";
  cats.forEach(c => {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = c;
    b.setAttribute("aria-pressed", c === filtro ? "true" : "false");

    b.addEventListener("click", () => {
      filtro = c;
      render();
    });

    chips.appendChild(b);
  });
}

function render() {
  const lista = (filtro === "Todas")
    ? EJERCICIOS
    : EJERCICIOS.filter(e => e.cat === filtro);

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const { rows, cols } = bestGrid(lista.length, vw, vh);

  // grid EXACTO al viewport
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  grid.innerHTML = "";

  const total = rows * cols;

  for (let i = 0; i < total; i++) {
    const a = document.createElement("a");
    a.className = "tile";
    a.style.background = colorAleatorio();

    if (i < lista.length) {
      a.href = lista[i].url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `<span>${lista[i].titulo}</span>`;
      a.title = `${lista[i].cat} · ${lista[i].titulo}`;
    } else {
      a.classList.add("filler");
      a.href = "javascript:void(0)";
      a.setAttribute("aria-hidden", "true");
      a.tabIndex = -1;
      a.innerHTML = `<span></span>`;
    }

    grid.appendChild(a);
  }

  // actualizar aria-pressed
  [...chips.querySelectorAll(".chip")].forEach(btn => {
    btn.setAttribute("aria-pressed", btn.textContent === filtro ? "true" : "false");
  });
}

renderChips();
render();

let t = null;
window.addEventListener("resize", () => {
  clearTimeout(t);
  t = setTimeout(render, 120);

});


