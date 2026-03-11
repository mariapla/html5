const excusasEjemplo = [

    "Se me borró el archivo cuando iba a guardarlo",

    "Se fue la luz justo cuando estaba exportando",

    "Lo subí pero la plataforma no lo guardó",

    "Mi perro se comió el portátil",

    "Mi wifi dejó de funcionar",

    "El archivo se corrompió"

];


function elegirAleatoria(lista) {

    return lista[Math.floor(Math.random() * lista.length)];

}


function limitar(numero, min, max) {

    return Math.max(min, Math.min(max, numero));

}


function calcularCredibilidad(texto) {

    const t = texto.toLowerCase();

    let base = 40 + Math.floor(Math.random() * 30);

    if (t.includes("borr")) base -= 20;

    if (t.includes("luz")) base -= 15;

    if (t.includes("wifi")) base -= 15;

    if (t.includes("perro")) base -= 40;

    if (t.includes("captura")) base += 20;

    if (t.length < 20) base -= 10;

    const ruido = Math.floor(Math.random() * 20) - 10;

    const puntuacion = limitar(base + ruido, 0, 100);

    let etiqueta = "Excusa dudosa";

    if (puntuacion >= 70)
        etiqueta = "Bastante creíble";

    if (puntuacion <= 30)
        etiqueta = "Excusa clásica";

    let sugerencia = "Pide alguna prueba.";

    if (puntuacion >= 70)
        sugerencia = "Acepta la excusa.";

    if (puntuacion <= 30)
        sugerencia = "Solicita evidencia.";

    return { puntuacion, etiqueta, sugerencia };

}


function mostrarResultado(texto) {

    const analisis = calcularCredibilidad(texto);

    const resultado = document.getElementById("resultadoAnalisis");

    resultado.innerHTML =

        "<p><strong>Credibilidad:</strong> " +
        analisis.puntuacion +
        "%</p>" +

        "<p><strong>Etiqueta:</strong> " +
        analisis.etiqueta +
        "</p>" +

        "<p><strong>Sugerencia:</strong> " +
        analisis.sugerencia +
        "</p>";

    document.getElementById("porcentajeMock").textContent =
        analisis.puntuacion + "%";

    document.getElementById("etiquetaMock").textContent =
        analisis.etiqueta;

    document.getElementById("mensajeMock").textContent =
        analisis.sugerencia;

}


document.getElementById("botonAnalizar").addEventListener(

    "click",

    function () {

        const texto = document.getElementById("entradaExcusa").value;

        mostrarResultado(texto);

    }

);


document.getElementById("botonAleatoria").addEventListener(

    "click",

    function () {

        const campo = document.getElementById("entradaExcusa");

        campo.value = elegirAleatoria(excusasEjemplo);

        mostrarResultado(campo.value);

    }

);


window.addEventListener(

    "load",

    function () {

        mostrarResultado(elegirAleatoria(excusasEjemplo));

    }

);