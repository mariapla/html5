

let vacaciones = new Date('06/21/2026 0:00 AM');

function cuentaAtras()
{
    let fechaFinal = new Date(vacaciones)
    let fechaActual = new Date()

    let segundos = Math.floor((fechaFinal - fechaActual) / 1000)

    let minutos = Math.floor(segundos / 60)

    let horas = Math.floor(minutos / 60)

    let dias = Math.floor(horas / 24)

    document.getElementById('dias').innerHTML = dias
    document.getElementById('horas').innerHTML = horas - dias*24
    document.getElementById('minutos').innerHTML = minutos - horas*60
    document.getElementById('segundos').innerHTML = segundos - minutos*60
}

//cuentaAtras()
// repetir la llamada cada 1000 milisegundos

setInterval(cuentaAtras, 1000)
