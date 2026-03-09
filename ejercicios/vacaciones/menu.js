
//referencias elementos DOM
let btnburger = document.querySelector('.burger')
let navegacion = document.querySelector('.navegacion')
let btnsalir =document.querySelector('.salir')

//listener al burger
btnburger.addEventListener('click', ()=>{
    navegacion.classList.add('mostrar')
    btnburger.style.display = 'none'
    btnsalir.style.display = 'block'
})

//listener a salir
btnsalir.addEventListener('click', ()=>{
    navegacion.classList.remove('mostrar')
    btnburger.style.display = 'block'
    btnsalir.style.display = 'none'
})
