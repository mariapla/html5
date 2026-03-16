const contenedorReceta = document.getElementById("receta");
const botonNuevaReceta = document.getElementById("nuevaReceta");

const textoBusqueda = document.getElementById("textoBusqueda");
const botonBuscar = document.getElementById("botonBuscar");

const urlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php'




function cargarRecetaRandom() {

    fetch(urlRandom)

        .then(respuesta => respuesta.json())

        .then(datos => {

            // console.log(datos);
            contenedorReceta.innerHTML = "";
           


            datos.meals.forEach(receta => {

                contenedorReceta.innerHTML += `

                <div class="card mx-auto mt-3" style="width: 18rem;">

                <img src="${receta.strMealThumb}" class="card-img-top" alt="${receta.strMeal}">

                <div class="card-body">

                <h5 class="card-title">${receta.strMeal}</h5>

                <p class="card-text">
                <strong>Categoría:</strong> ${receta.strCategory}<br>
                <strong>País:</strong> ${receta.strArea}
                </p>

                <a href="${receta.strYoutube}" target="_blank" class="btn btn-primary">
                Ver receta
                </a>

            </div>

            </div>`;


            });

        });

}




botonNuevaReceta.addEventListener("click", () => {
    cargarRecetaRandom();
});

botonBuscar.addEventListener("click", () => {

    const termino = textoBusqueda.value;

    buscarRecetas(termino);

});


function buscarRecetas(termino) {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${termino}`)

        .then(respuesta => respuesta.json())

        .then(datos => {

            contenedorReceta.innerHTML = "";

            if (datos.meals === null) {

                contenedorReceta.innerHTML =
                    "<p class='text-center mt-4'>No se encontraron recetas.</p>";

                return;
            }

            datos.meals.forEach(receta => {

                contenedorReceta.innerHTML += `
                <div class="card mx-auto mt-4 shadow" style="width: 18rem;">

                    <img src="${receta.strMealThumb}" class="card-img-top" alt="${receta.strMeal}">

                    <div class="card-body">

                        <h5 class="card-title">${receta.strMeal}</h5>

                        <p class="card-text">
                        Categoría: ${receta.strCategory}<br>
                        País: ${receta.strArea}
                        </p>

                        <a href="${receta.strYoutube}" target="_blank" class="btn btn-danger">
                        Ver receta
                        </a>

                    </div>

                </div>
                `;
            });

        });

}



cargarRecetaRandom()
