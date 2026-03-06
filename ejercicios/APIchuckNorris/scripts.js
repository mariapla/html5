
//petición básica
const url = 'https://api.chucknorris.io/jokes/random'
const print = document.querySelector('.cita')

//petición categorías
const urlCategorias = 'https://api.chucknorris.io/jokes/categories'

function actualizarCategoria(categoria){
    const cat = `${url}?category=${categoria}`
    fetch(cat)
    .then(respuesta => respuesta.json())
    .then(json =>{
        print.innerHTML = json.value
    })
    document.getElementById("chuckHero").style.display = "none";
}

const prueba = 'https://api.chucknorris.io/jokes/random?category={category}'


//referencias para el menu
const burger = document.getElementById('burger')
const menu = document.querySelector('nav')
const capaBurger = document.querySelector('.burger')
const cerrar = document.getElementById('cerrar')

//gestión del hamburger menu
burger.addEventListener('click', ()=>{
    menu.classList.add('mostrar')
    capaBurger.classList.add('ocultar')
})

cerrar.addEventListener('click', ()=>{
    menu.classList.remove('mostrar')
    capaBurger.classList.remove('ocultar')
})


// fetch(url)
//     .then(respuesta => respuesta.json())
//     //respuesta transformada a objeto json
//     .then(json => citaChuck(json))


// function citaChuck(json){
//     //document.write(json.value)
//     print.innerHTML = json.value
// }

//petición lista categorías
fetch(urlCategorias)
.then(respuesta => respuesta.json())
.then(lista => {
    //console.log(lista)
    //lista.forEach(item => console.log(item))
    lista.forEach(item => {
        let li = document.createElement('li')
        li.innerHTML = item
        let ul = document.querySelector('.menu')
        ul.appendChild(li)
        //añadir un listener para obtener la categoría
        li.addEventListener('click', ()=>{
            //nueva petición
            actualizarCategoria(item)
        })
    })
})
