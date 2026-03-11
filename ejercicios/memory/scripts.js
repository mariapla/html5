//DECLARACIÓN DE VARIABLES Y CONSTANTES
const coleccionCartas = [
    { nombre: "burger", img: "img/burger.png", },
    { nombre: "burger", img: "img/burger.png", },
    { nombre: "calamar", img: "img/calamar.png", },
    { nombre: "calamar", img: "img/calamar.png", },
    { nombre: "cangrejo", img: "img/cangrejo.png", },
    { nombre: "cangrejo", img: "img/cangrejo.png", },
    { nombre: "cerdo", img: "img/cerdo.png", },
    { nombre: "cerdo", img: "img/cerdo.png", },
    { nombre: "cerveza", img: "img/cerveza.png", },
    { nombre: "cerveza", img: "img/cerveza.png", },
    { nombre: "te", img: "img/te.png", },
    { nombre: "te", img: "img/te.png",  },
]

coleccionCartas.sort(() => 0.5 - Math.random())

const tablero = document.querySelector('.tablero')
const puntuacion = document.querySelector('#resultado')
let cartasEscogidas = [] //crear un array vacío
let cartasEscogidasId = [] //crear un array vacío
let cartasEmparejadas = [] //crear un array vacío

//Crear Tablero

function crearTablero() {
    for(let i = 0; i < coleccionCartas.length; i++) {
        const carta = document.createElement('img') //crear un elemento imagen
        carta.setAttribute('src', 'img/reverso.png') //darle como atributo el src de la carta blanca
        carta.setAttribute('id', i) //darle un id numérico que coincida con el índice del array
        carta.addEventListener('click', girarCarta) //listener que llame a una nueva función
        tablero.appendChild(carta) //introducir las cartas en la clase .tablero
    }
}



//Girar cartas

function girarCarta() {
    let idCarta = this.getAttribute('id') //declarar una variable del id de la carta
    //el id se obtiene con getAttribute
    cartasEscogidas.push(coleccionCartas[idCarta].nombre) //introducir en el array vacío basándonos en el 
                                                        //id del array original
    cartasEscogidasId.push(idCarta) //lo mismo con el nuevo array de Ids, pero solo queremos el id
    this.setAttribute('src', coleccionCartas[idCarta].img)  //colocar la imagen correspondiente
    if(cartasEscogidas.length == 2) {
        setTimeout(comprobarParejas, 500)
    }
}

//Comprobar Parejas

function comprobarParejas() {
    const cartas = document.querySelectorAll('img')
    const opcionUnoId = cartasEscogidasId[0]
    const opcionDosId = cartasEscogidasId[1]

    if(cartasEscogidas[0] === cartasEscogidas[1]){
        alert('Encontraste una pareja')
        cartas[opcionUnoId].setAttribute('src', 'img/blanco.png')
        cartas[opcionDosId].setAttribute('src', 'img/blanco.png')
        cartasEmparejadas.push(cartasEscogidas)
    } else {
        cartas[opcionUnoId].setAttribute('src', 'img/reverso.png')
        cartas[opcionDosId].setAttribute('src', 'img/reverso.png')
        alert('Vuelve a intentarlo')
    }
    //pase lo que pase, quiero vaciar los siguientes array
    //para que estén listos para la siguiente vez que se giren cartas
    cartasEscogidas = []
    cartasEscogidasId = []
    puntuacion.textContent = cartasEmparejadas.length //cuántas cartas hemos almacenado en cartasEmparejadas?
    //un punto por cada pareja
    if(cartasEmparejadas.length == coleccionCartas.length/2){
        //si se cumple, hemos cogido todas las parejas
        puntuacion.textContent = 'Felicidades!'
    }
}

crearTablero()