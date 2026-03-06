const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const botonHexa = document.getElementById('hexa')
const codigoHexa = document.getElementById('codigoColor')

botonHexa.addEventListener('click', function(){
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hexa[Math.floor(Math.random()*hexa.length)]
    }

    document.body.style.backgroundColor = color
     codigoHexa.textContent = color
})
