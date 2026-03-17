const contenedorPeliculas = document.getElementById("peliculas");
const contenedorFavoritos = document.getElementById("favoritos");
const textoBusqueda = document.getElementById("textoBusqueda");
const botonBuscar = document.getElementById("botonBuscar");

let peliculas = [];
let favoritas = [];


// Recuperar favoritas guardadas
const favoritasGuardadas = localStorage.getItem("favoritasGhibli");

if (favoritasGuardadas) {
    favoritas = JSON.parse(favoritasGuardadas);
}


// Mostrar películas
function mostrarPeliculas(listaPeliculas) {

    contenedorPeliculas.innerHTML = "";

    if (listaPeliculas.length === 0) {
        contenedorPeliculas.innerHTML =
            "<p class='text-center'>No se encontraron películas.</p>";
        return;
    }

    listaPeliculas.forEach(pelicula => {

        contenedorPeliculas.innerHTML += `
        
        <div class="col-md-6 col-lg-4">

            <div class="card h-100 shadow">

                <img
                    src="${pelicula.image}"
                    class="card-img-top"
                    alt="${pelicula.title}"
                >

                <div class="card-body d-flex flex-column">

                    <h5 class="card-title">
                        ${pelicula.title}
                    </h5>

                    <p class="card-text">

                        <strong>Director:</strong> ${pelicula.director}<br>
                        <strong>Año:</strong> ${pelicula.release_date}<br>
                        <strong>Puntuación:</strong> ${pelicula.rt_score}

                    </p>

                    <button
                        class="btn btn-success mt-auto"
                        onclick="guardarFavorita(
                            '${pelicula.id}',
                            '${pelicula.title}',
                            '${pelicula.image}',
                            '${pelicula.director}',
                            '${pelicula.release_date}',
                            '${pelicula.rt_score}'
                        )"
                    >
                        Favorita
                    </button>

                </div>

            </div>

        </div>
        
        `;
    });

}


// Mostrar favoritas
function mostrarFavoritas() {

    contenedorFavoritos.innerHTML = "";

    if (favoritas.length === 0) {

        contenedorFavoritos.innerHTML =
            "<p class='text-center'>No hay películas favoritas guardadas.</p>";

        return;
    }

    favoritas.forEach(pelicula => {

        contenedorFavoritos.innerHTML += `

        <div class="col-md-6 col-lg-4">

            <div class="card h-100 shadow border-warning">

                <img
                    src="${pelicula.image}"
                    class="card-img-top"
                    alt="${pelicula.title}"
                >

                <div class="card-body d-flex flex-column">

                    <h5 class="card-title">
                        ${pelicula.title}
                    </h5>

                    <p class="card-text">

                        <strong>Director:</strong> ${pelicula.director}<br>
                        <strong>Año:</strong> ${pelicula.release_date}<br>
                        <strong>Puntuación:</strong> ${pelicula.rt_score}

                    </p>

                    <button
                        class="btn btn-secondary mt-auto"
                        onclick="eliminarFavorita('${pelicula.id}')"
                    >
                        Quitar
                    </button>

                </div>

            </div>

        </div>

        `;
    });

}


// Guardar favorita
function guardarFavorita(id, title, image, director, release_date, rt_score) {

    const yaExiste = favoritas.some(pelicula => pelicula.id === id);

    if (!yaExiste) {

        favoritas.push({
            id,
            title,
            image,
            director,
            release_date,
            rt_score
        });

        localStorage.setItem(
            "favoritasGhibli",
            JSON.stringify(favoritas)
        );

        mostrarFavoritas();
    }

}


// Eliminar favorita
function eliminarFavorita(id) {

    favoritas = favoritas.filter(
        pelicula => pelicula.id !== id
    );

    localStorage.setItem(
        "favoritasGhibli",
        JSON.stringify(favoritas)
    );

    mostrarFavoritas();
}


// Cargar películas desde la API
function cargarPeliculas() {

    fetch("https://ghibliapi.vercel.app/films")

        .then(respuesta => respuesta.json())

        .then(datos => {

            peliculas = datos;

            mostrarPeliculas(peliculas);

        });

}


// Filtrar películas
function filtrarPeliculas(termino) {

    const texto = termino.toLowerCase();

    const resultado = peliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(texto)
    );

    mostrarPeliculas(resultado);

}


// Evento del botón buscar
botonBuscar.addEventListener("click", () => {

    const termino = textoBusqueda.value.trim();

    if (termino === "") {

        mostrarPeliculas(peliculas);

        return;

    }

    filtrarPeliculas(termino);

});


// Inicio
mostrarFavoritas();
cargarPeliculas();
