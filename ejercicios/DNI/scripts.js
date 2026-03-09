
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

const reset = document.getElementById('reset')

const dato = document.getElementById('dni')

dato.addEventListener('change', () => {
    if (dato.value > 0 && dato.value < 100000000) {
        console.log(dato.value)
        let tuLetra = letras[dato.value % 23]
        document.getElementById('salida').innerHTML = `Tu número de DNI completo es <span>${dato.value}${tuLetra}</span>`
    }
    else {
        document.getElementById('salida').innerHTML = 'El número introducido no es correcto'
    }
})


reset.addEventListener('click', ()=>{
    location.reload()
})
