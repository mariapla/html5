const contenedorReceta = document.getElementById("receta");
const botonNuevaReceta = document.getElementById("nuevaReceta");
const textoBusqueda = document.getElementById("textoBusqueda");
const botonBuscar = document.getElementById("botonBuscar");
const contenedorFavoritos = document.getElementById("favoritos");

const urlRandom = "https://www.themealdb.com/api/json/v1/1/random.php";

let favoritos = [];

// Recuperar favoritas guardadas
const favoritosGuardados = localStorage.getItem("favoritos");
if (favoritosGuardados) {
  favoritos = JSON.parse(favoritosGuardados);
}

// Mostrar favoritas
function mostrarFavoritos() {
  contenedorFavoritos.innerHTML = "";

  if (favoritos.length === 0) {
    contenedorFavoritos.innerHTML = "<p>No hay recetas favoritas guardadas.</p>";
    return;
  }

  favoritos.forEach((receta) => {
    contenedorFavoritos.innerHTML += `
      <div class="card shadow h-100" style="width: 18rem;">
        <img src="${receta.imagen}" class="card-img-top" alt="${receta.nombre}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${receta.nombre}</h5>

          <p class="card-text">
            <strong>Categoría:</strong> ${receta.categoria}<br>
            <strong>País:</strong> ${receta.pais}
          </p>

          <div class="mt-auto d-flex gap-2">
            <a href="${receta.youtube}" target="_blank" class="btn btn-danger flex-fill">
              Ver receta
            </a>

            <button class="btn btn-secondary flex-fill" onclick="eliminarFavorita('${receta.nombre}')">
              Quitar
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Guardar favorita
function guardarFavorita(nombre, imagen, categoria, pais, youtube) {
  const yaExiste = favoritos.some((receta) => receta.nombre === nombre);

  if (!yaExiste) {
    favoritos.push({
      nombre: nombre,
      imagen: imagen,
      categoria: categoria,
      pais: pais,
      youtube: youtube
    });

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    mostrarFavoritos();
  }
}

// Eliminar favorita
function eliminarFavorita(nombre) {
  favoritos = favoritos.filter((receta) => receta.nombre !== nombre);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  mostrarFavoritos();
}

// Crear card de receta
function crearCardReceta(receta) {
  return `
    <div class="card shadow h-100" style="width: 18rem;">
      <img src="${receta.strMealThumb}" class="card-img-top" alt="${receta.strMeal}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${receta.strMeal}</h5>

        <p class="card-text">
          <strong>Categoría:</strong> ${receta.strCategory}<br>
          <strong>País:</strong> ${receta.strArea}
        </p>

        <div class="mt-auto d-flex gap-2">
          <a href="${receta.strYoutube}" target="_blank" class="btn btn-danger flex-fill">
            Ver receta
          </a>

          <button
            class="btn btn-success flex-fill"
            onclick="guardarFavorita(
              '${receta.strMeal}',
              '${receta.strMealThumb}',
              '${receta.strCategory}',
              '${receta.strArea}',
              '${receta.strYoutube}'
            )"
          >
            Favorita
          </button>
        </div>
      </div>
    </div>
  `;
}

// Receta aleatoria
function cargarRecetaRandom() {
  fetch(urlRandom)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      contenedorReceta.innerHTML = "";
      const receta = datos.meals[0];
      contenedorReceta.innerHTML = crearCardReceta(receta);
    });
}

// Buscar recetas
function buscarRecetas(termino) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${termino}`)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      contenedorReceta.innerHTML = "";

      if (datos.meals === null) {
        contenedorReceta.innerHTML = "<p class='text-center mt-4'>No se encontraron recetas.</p>";
        return;
      }

      datos.meals.forEach((receta) => {
        contenedorReceta.innerHTML += crearCardReceta(receta);
      });
    });
}

// Eventos
botonNuevaReceta.addEventListener("click", () => {
  cargarRecetaRandom();
});

botonBuscar.addEventListener("click", () => {
  const termino = textoBusqueda.value.trim();

  if (termino === "") {
    contenedorReceta.innerHTML = "<p class='text-center mt-4'>Escribe algo para buscar.</p>";
    return;
  }

  buscarRecetas(termino);
});

// Inicio
mostrarFavoritos();
cargarRecetaRandom();
