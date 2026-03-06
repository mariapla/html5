const botonRgb = document.getElementById('rgb')
const codigoRgb = document.getElementById('codigoColor')


botonRgb.addEventListener('click', function(){
    let red = parseInt(Math.random()*256)
    let green = parseInt(Math.random()*256)
    let blue = parseInt(Math.random()*256)

    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
    document.body.style.backgroundColor = color
    codigoRgb.textContent = color
})
