const botonRgb = document.getElementById('rgb')

botonRgb.addEventListener('click', function(){
    let red = parseInt(Math.random()*256)
    let green = parseInt(Math.random()*256)
    let blue = parseInt(Math.random()*256)

    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
})
