const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const boton = document.getElementById('sorpresa')

boton.addEventListener('click', function(){
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hexa[Math.floor(Math.random()*hexa.length+1)]
    }

    document.body.style.backgroundColor = color
})
