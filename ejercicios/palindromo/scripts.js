
let boton = document.getElementById('boton')

function palindromo(){
    let frase = document.getElementById('frase').value
    console.log(frase)
    frase.value = frase.toLowerCase()
    
    frase = frase.replace(/\s+/g,'')

    let frase2 = frase.split('').reverse().join('')
    

    if(frase == frase2){
        document.querySelector('.resultado').innerHTML = "Es palíndromo"
    } else {
        document.querySelector('.resultado').innerHTML = "No es palíndromo"
        }

}

boton.addEventListener("click", palindromo)


// const button = document.querySelector("button");
// function action() {
//   alert("Hello!");
// };
// button.addEventListener("click", action);
