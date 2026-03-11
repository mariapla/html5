let contador = 0

let entrada = document.querySelector('.entrada')
let salida = document.querySelector('.salida')

entrada.addEventListener("click", incremento)
salida.addEventListener("click", decremento)

function incremento() {
    if (contador < 20) {
        contador++
        document.querySelector('h1').innerHTML = contador
        if(contador >= 15 && contador <= 20){
            document.querySelector('h1').style.color = "red"
        }
    } else if (contador == 20) {
        document.querySelector('h1').innerHTML = "Completo"
    }

}

function decremento() {
    if (contador > 0) {
        contador--
        document.querySelector('h1').innerHTML = contador
        if(contador >= 15 && contador <= 20){
            document.querySelector('h1').style.color = "red"
        } else {
            document.querySelector('h1').style.color = "black"
        }
    }
}

function borrar() {
    contador = 0
    document.querySelector('.contador').innerHTML = contador
}


