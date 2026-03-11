//declarar variables
const burger = document.querySelector('.burger')
const salir = document.querySelector('.salir')
const navegacion = document.querySelector('nav')

//listener al burger
burger.addEventListener('click', ()=>{
    navegacion.classList.add('mostrar')
    burger.style.display = 'none'
    salir.style.display = 'block'
})

//listener al aspa
salir.addEventListener('click', ()=>{
    navegacion.classList.remove('mostrar')
    burger.style.display = 'block'
    salir.style.display = 'none'
})

