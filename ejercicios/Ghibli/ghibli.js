const contenedorPeliculas = document.getElementById("peliculas");

const url = 'https://ghibliapi.vercel.app/films'

function cargarPeliculas() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            //   console.log(datos);
            datos.forEach(pelicula => {
                console.log(pelicula.title);
                contenedorPeliculas.innerHTML += `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow">
        <img src="${pelicula.image}" class="card-img-top" alt="${pelicula.title}">
        <div class="card-body">
          <h5 class="card-title">${pelicula.title}</h5>
          <p class="card-text">
            <strong>Director:</strong> ${pelicula.director}<br>
            <strong>Año:</strong> ${pelicula.release_date}<br>
            <strong>Puntuación:</strong> ${pelicula.rt_score}
          </p>
        </div>
      </div>
    </div>
  `;
            });
        
});
}

cargarPeliculas()