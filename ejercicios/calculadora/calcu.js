function saludar() {
  let nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    document.getElementById("saludo").style.display = "block";
    document.getElementById("saludo").innerHTML = "Hola, persona misteriosa!";
    document.getElementById("comentario").innerHTML = "Puedes escribir tu nombre si quieres.";
  } else {
    document.getElementById("saludo").style.display = "block";
    document.getElementById("saludo").innerHTML = "Hola, " + nombre + "!";
    document.getElementById("comentario").innerHTML = "Ya puedes usar la calculadora.";
  }
}

function escribir(valor) {
  let pantalla = document.getElementById("pantalla").value;

  pantalla = pantalla + valor;

  document.getElementById("pantalla").value = pantalla;
}

function borrarPantalla() {
  document.getElementById("pantalla").value = "";
  document.getElementById("comentario").innerHTML = "Pantalla borrada.";
}

function calcular() {
  let operacion = document.getElementById("pantalla").value;
  let nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    nombre = "crack";
  }

  if (operacion === "") {
    document.getElementById("comentario").innerHTML = "Primero escribe una operación.";
  } else {
    let resultado = eval(operacion);

    document.getElementById("pantalla").value = resultado;
    document.getElementById("comentario").innerHTML =
      nombre + ", el resultado es " + resultado + ".";
  }
}

function modoFiesta() {
    document.body.classList.add("fiesta");
//   document.body.classList.toggle("fiesta");

  document.getElementById("comentario").innerHTML =
    "Has cambiado el modo de la página.";
}

function limpiarTodo() {
  document.getElementById("nombre").value = "";

  document.getElementById("saludo").innerHTML = "";
  document.getElementById("saludo").style.display = "none";

  document.getElementById("pantalla").value = "";
  document.getElementById("comentario").innerHTML = "";

  document.body.classList.remove("fiesta");
}