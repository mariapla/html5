const texto = document.querySelector('.carga')
const fondo = document.querySelector('.fondo')

let carga = 0

let frecuencia = setInterval(desenfoque, 30)

function desenfoque(){
    carga++

    if(carga > 99){
        clearInterval(frecuencia)
    }

    texto.innerText = `${carga}%`
    texto.style.opacity = mapeo(carga, 0, 100, 1, 0)
    fondo.style.filter = `blur(${mapeo(carga, 0, 100, 30, 0)}px)`
}

const mapeo = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
