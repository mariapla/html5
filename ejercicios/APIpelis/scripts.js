
//TMBD API

const clave = 'api_key=7213a06dbdfde5b063f57d8a272bbbd2'
// añadirle delante api_key=

// url general, del ejemplo de petición
const urlBasica = 'https://api.themoviedb.org/3/'
// endpoint, sort por popularidad
const urlPopularidad = 'discover/movie?sort_by=popularity.desc'

const url = `${urlBasica}${urlPopularidad}&${clave}`

const urlPoster = 'https://image.tmdb.org/t/p/w500'
// para la búsqueda, según la API:
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

// const urlBuscar = `${urlBasica}/search/movie?${clave}`
const urlBuscar = urlBasica + 'search/movie?' + clave


const contenedor = document.querySelector('.contenedor')

const formulario = document.querySelector('.form')
const buscar = document.querySelector('.buscar')


// fetch(url)
// .then(respuesta => console.log(respuesta))

verPelis(url)

function verPelis(url) {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos.results)
            //los necesitaré para buscar los posters
            imprimirPelis(datos.results)
        })
        .catch(error => console.log(error))
}

function imprimirPelis(datos) {
    contenedor.innerHTML = ''

    datos.forEach(peli => {
        const { title, poster_path, vote_average, overview } = peli
        // creo un nuevo elemento en html y le planto lo 
        // que ya tengo con los datos del json
        const elemPeli = document.createElement('div')
        elemPeli.classList.add('peli')
        elemPeli.innerHTML = `<img src="${urlPoster + poster_path}" alt="${title}">

        <div class="infoPeli">
            <h2 class="titulo">${title}</h2>
            <span class="${cambiarColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="resena">
            ${overview}
        </div>`

        contenedor.appendChild(elemPeli)
    })
}

function cambiarColor(vote) {
    if (vote >= 8) {
        return 'ratingVerde'
    } else if (vote >= 5) {
        return 'ratingNaranja'
    } else {
        return 'ratingRojo'
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const busqueda = buscar.value 

    if(busqueda){
        // para encontrar el parámetro volver a la documentación
    //    verPelis(`${urlBuscar}&query=${busqueda}`)
    // verPelis(urlBuscar+'&query='+busqueda)
    verPelis(urlBuscar+'&query='+busqueda)
    // verPelis(`${urlBasica}${peliBuscada}${clave}`)
    }
})
