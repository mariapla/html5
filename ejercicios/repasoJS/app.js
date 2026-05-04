const temas = [
      {
        id: "variables", num: "01", titulo: "Variables y tipos", grupo: "fundamentos", color: "blue", size: "medium",
        tags: "let var const string number boolean null undefined nan tipos",
        explicacion: "Las variables guardan información. En JavaScript pueden almacenar texto, números, booleanos y otros valores especiales como null o undefined.",
        codigo: `let nombre = "Ana";
let edad = 20;
let esEstudiante = true;
let nota = null;
let sinDefinir;

console.log(nombre, edad, esEstudiante, nota, sinDefinir);`,
        codigoExplicacion: "Se crean variables con distintos tipos de datos y se muestran por consola.",
        demo: "variables",
        interpretacion: "En este ejemplo estoy usando variables para almacenar distintos tipos de datos que luego puedo reutilizar. Es importante diferenciar entre valores primitivos como string o number y valores especiales como null o undefined, ya que afectan al comportamiento del programa. Además, al usar console.log puedo comprobar en tiempo real qué contiene cada variable."
      },
      {
        id: "operadores", num: "02", titulo: "Operadores", grupo: "fundamentos", color: "red", size: "small",
        tags: "operadores suma resta multiplicacion division modulo incremento comparacion logicos",
        explicacion: "Los operadores sirven para calcular, comparar y combinar condiciones.",
        codigo: `let x = 10;
let y = 3;

console.log(x + y);
console.log(x % y);
console.log(x > 5 && y < 5);`,
        codigoExplicacion: "Calcula una suma, obtiene el resto de una división y comprueba una condición doble.",
        demo: "operadores",
        interpretacion: "Aquí utilizo operadores para realizar cálculos y también para evaluar condiciones. Me sirve para construir lógica más compleja, por ejemplo en validaciones o filtros. El uso de operadores lógicos como && es clave cuando quiero que se cumplan varias condiciones a la vez."
      },
      {
        id: "condicionales", num: "03", titulo: "Condicionales", grupo: "logica", color: "green2", size: "small",
        tags: "if else else if condiciones orden comparar",
        explicacion: "Los condicionales permiten tomar decisiones. El orden importa cuando varias condiciones pueden cumplirse.",
        codigo: `let nota = 7;
let mensaje = "";

if (nota >= 9) {
  mensaje = "Excelente";
} else if (nota >= 5) {
  mensaje = "Aprobado";
} else {
  mensaje = "Suspenso";
}`,
        codigoExplicacion: "Según el valor de la nota, guarda un mensaje diferente.",
        demo: "condicionales",
        interpretacion: "Este bloque me permite controlar el flujo del programa según datos dinámicos. He estructurado las condiciones de forma ordenada para evitar errores lógicos. Es importante pensar bien el orden porque una condición puede bloquear las siguientes y alterar el resultado esperado."
      },
      {
        id: "bucles", num: "04", titulo: "Bucles", grupo: "logica", color: "blue2", size: "wide",
        tags: "for while do while bucles repetir length",
        explicacion: "Un bucle repite instrucciones. El for es útil cuando recorremos arrays o conocemos el número de repeticiones.",
        codigo: `let frutas = ["manzana", "pera", "kiwi"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}`,
        codigoExplicacion: "Recorre el array desde la posición 0 hasta la última posición válida.",
        demo: "bucles",
        interpretacion: "Estoy usando un bucle for para recorrer un array de forma controlada. Este patrón es muy común cuando necesito procesar listas de datos. El uso de frutas.length asegura que no acceda a posiciones inexistentes, evitando errores típicos de índices."
      },
      {
        id: "arrays", num: "05", titulo: "Arrays", grupo: "logica", color: "magenta", size: "medium",
        tags: "arrays listas indices push pop shift unshift sort",
        explicacion: "Un array guarda varios valores en una sola variable. Sus posiciones empiezan en 0.",
        codigo: `let tareas = ["estudiar", "practicar"];
tareas.push("repasar");
tareas.sort();

console.log(tareas);`,
        codigoExplicacion: "Crea una lista, añade un elemento al final y ordena el array.",
        demo: "arrays",
        interpretacion: "Aquí utilizo un array para gestionar una colección de datos relacionados. Métodos como push permiten añadir elementos dinámicamente y sort me ayuda a organizar los datos. Este tipo de estructuras es clave cuando trabajo con listas que cambian durante la ejecución."
      },
      {
        id: "funciones", num: "06", titulo: "Funciones", grupo: "fundamentos", color: "cyan", size: "medium",
        tags: "function funciones parametros return reutilizar",
        explicacion: "Una función agrupa instrucciones para reutilizarlas. Puede recibir parámetros y devolver un resultado con return.",
        codigo: `function calcularTotal(precio, envio) {
  return precio + envio;
}

let total = calcularTotal(20, 5);`,
        codigoExplicacion: "La función recibe dos valores, los suma y devuelve el resultado.",
        demo: "funciones",
        interpretacion: "Estoy encapsulando lógica reutilizable dentro de una función. Esto mejora la organización del código y evita duplicaciones. Además, el uso de parámetros permite que la función sea flexible y reutilizable en distintos contextos."
      },
      {
        id: "dom", num: "07", titulo: "DOM", grupo: "dom", color: "blue2", size: "wide",
        tags: "dom getelementbyid innerhtml value html",
        explicacion: "El DOM permite que JavaScript lea y modifique elementos de una página web.",
        codigo: `let nombre = document.getElementById("nombre").value;
document.getElementById("salida").innerHTML = "Hola " + nombre;`,
        codigoExplicacion: "Lee el valor de un input y cambia el contenido de otro elemento.",
        demo: "dom",
        interpretacion: "En este caso estoy interactuando con el DOM para leer valores del usuario y modificar el contenido de la página. Es fundamental entender cómo acceder a los elementos y actualizar su contenido para crear interfaces dinámicas."
      },
      {
        id: "eventos", num: "08", titulo: "Eventos", grupo: "dom", color: "blue", size: "big",
        tags: "eventos addeventlistener click keydown teclado boton",
        explicacion: "Los eventos ejecutan código cuando ocurre algo: un clic, una tecla, el envío de un formulario, etc.",
        codigo: `document.getElementById("btn").addEventListener("click", saludar);

function saludar() {
  alert("Hola");
}`,
        codigoExplicacion: "Cuando se hace clic en el botón, se ejecuta la función saludar.",
        demo: "eventos",
        interpretacion: "Estoy usando un evento para ejecutar código en respuesta a una acción del usuario. Este enfoque es esencial en aplicaciones interactivas, ya que permite reaccionar a clics, teclas u otros eventos sin ejecutar código constantemente."
      },
      {
        id: "math", num: "09", titulo: "Math", grupo: "utiles", color: "red", size: "wide",
        tags: "math floor ceil abs pow numeros redondear potencia absoluto",
        explicacion: "Math incluye métodos para redondear, calcular potencias o convertir números negativos en positivos.",
        codigo: `Math.floor(3.9);
Math.ceil(3.1);
Math.abs(-8);
Math.pow(2, 3);`,
        codigoExplicacion: "Muestra varios métodos útiles para trabajar con números.",
        demo: "math",
        interpretacion: "Aquí estoy utilizando el objeto Math para realizar operaciones numéricas comunes como redondeo o cálculo de potencias. Estas funciones son muy útiles para trabajar con datos numéricos sin tener que implementar lógica adicional."
      },
      {
        id: "strings", num: "10", titulo: "Strings", grupo: "fundamentos", color: "purple", size: "medium",
        tags: "strings texto concatenar touppercase localecompare comparar",
        explicacion: "Los strings son cadenas de texto. Se pueden unir, transformar a mayúsculas o comparar alfabéticamente.",
        codigo: `let ciudad = "madrid";
ciudad = ciudad.toUpperCase();

let orden = "ana".localeCompare("bea");`,
        codigoExplicacion: "Convierte texto a mayúsculas y compara dos palabras.",
        demo: "strings",
        interpretacion: "En este bloque manipulo texto usando métodos de strings. Transformar a mayúsculas o comparar cadenas es algo muy habitual, especialmente en validaciones, ordenaciones o normalización de datos de entrada."
      },
      {
        id: "fechas", num: "11", titulo: "Fechas", grupo: "utiles", color: "orange", size: "medium",
        tags: "date fechas new date getmonth tolocaledatestring",
        explicacion: "Date permite trabajar con fechas. Hay que recordar que getMonth empieza contando desde 0.",
        codigo: `let fecha = new Date();
let mes = fecha.getMonth();
let visible = fecha.toLocaleDateString("es-ES");`,
        codigoExplicacion: "Crea una fecha actual, obtiene el mes y la muestra en formato local.",
        demo: "fechas",
        interpretacion: "Estoy trabajando con fechas utilizando el objeto Date. Es importante tener en cuenta detalles como que los meses empiezan en 0, ya que puede provocar errores si no se corrige. También uso formatos locales para mostrar fechas de forma más comprensible para el usuario."
      },
      {
        id: "formularios", num: "12", titulo: "Formularios", grupo: "dom", color: "red", size: "medium",
        tags: "formulario input value onsubmit get post prompt alert validar",
        explicacion: "Los formularios recogen datos. Antes de usarlos conviene validar que no estén vacíos o sean incorrectos.",
        codigo: `function validar() {
  let nombre = document.getElementById("nombre").value;
  return nombre !== "";
}`,
        codigoExplicacion: "Comprueba si el campo nombre tiene contenido.",
        demo: "formularios",
        interpretacion: "Aquí valido datos de un formulario antes de utilizarlos. Esta comprobación es esencial para evitar errores y garantizar que los datos cumplen ciertos requisitos antes de procesarlos o enviarlos."
      },
      {
        id: "errores", num: "13", titulo: "Errores típicos", grupo: "utiles", color: "darktile", size: "medium",
        tags: "errores switch break nan value indices mayusculas undefined",
        explicacion: "Muchos errores aparecen por detalles pequeños: olvidar .value, usar <= en un array, escribir mal una variable o no poner break en switch.",
        codigo: `switch(true) {
  case (nota >= 5):
    resultado = "aprobado";
    break;
  default:
    resultado = "suspenso";
}`,
        codigoExplicacion: "El break evita que el switch continúe ejecutando otros casos.",
        demo: "errores",
        interpretacion: "Este ejemplo muestra un error típico en estructuras como switch. El uso de break es fundamental para evitar ejecuciones no deseadas. Detectar y entender estos pequeños fallos es clave para depurar correctamente el código."
      }
    ];

    const tiles = document.getElementById("tiles");
    const panel = document.getElementById("panel");
    let temaActivo = 0;
    
    let listaDemo = ["estudiar", "practicar"];

    function pintarTiles() {
      tiles.innerHTML = "";
      temas.forEach((tema, index) => {
        const btn = document.createElement("button");
        btn.className = `tile ${tema.color} ${tema.size}`;
        btn.dataset.tags = tema.tags + " " + tema.grupo + " " + tema.titulo.toLowerCase();
        btn.dataset.grupo = tema.grupo;
        btn.innerHTML = `<span class="num">${tema.num}</span><h2>${tema.titulo}</h2><p>${tema.tags.split(" ").slice(0,4).join(" · ")}</p>`;
        btn.addEventListener("click", () => abrirTema(index));
        tiles.appendChild(btn);
      });
    }

    function abrirTema(index) {
      temaActivo = index;
      const tema = temas[index];
      const colores = {
        blue: "var(--blue)", blue2: "var(--blue2)", cyan: "var(--cyan)", green: "var(--green)", green2: "var(--green2)", red: "var(--red)", orange: "var(--orange)", purple: "var(--purple)", magenta: "var(--magenta)", yellow: "var(--yellow)", darktile: "#263343"
      };
      document.querySelector(".panel-inner").style.setProperty("--accent-color", colores[tema.color] || "var(--blue)");
      document.getElementById("lessonNum").textContent = tema.num;
      document.getElementById("lessonGroup").textContent = tema.grupo;
      document.getElementById("lessonTitle").textContent = tema.titulo;
      document.getElementById("lessonExplanation").textContent = tema.explicacion;
      document.getElementById("lessonCode").textContent = tema.codigo;
      document.getElementById("lessonCodeExplanation").textContent = tema.codigoExplicacion;
      document.getElementById("lessonCustom").textContent = tema.interpretacion;
      prepararDemo(tema.demo);
      panel.classList.add("open");
    }

    function cerrarPanel() { panel.classList.remove("open"); }

    document.getElementById("cerrar").addEventListener("click", cerrarPanel);
    panel.addEventListener("click", e => { if (e.target === panel) cerrarPanel(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarPanel(); });

    document.getElementById("anterior").addEventListener("click", () => abrirTema((temaActivo - 1 + temas.length) % temas.length));
    document.getElementById("siguiente").addEventListener("click", () => abrirTema((temaActivo + 1) % temas.length));

    

    

    document.getElementById("modo").addEventListener("click", () => document.body.classList.toggle("light"));

    document.getElementById("buscador").addEventListener("input", filtrar);
    document.getElementById("filtro").addEventListener("change", filtrar);

    function filtrar() {
      const texto = document.getElementById("buscador").value.toLowerCase().trim();
      const grupo = document.getElementById("filtro").value;
      document.querySelectorAll(".tile").forEach(tile => {
        const coincideTexto = tile.dataset.tags.includes(texto);
        const coincideGrupo = grupo === "todos" || tile.dataset.grupo === grupo;
        tile.classList.toggle("hidden", !(coincideTexto && coincideGrupo));
      });
    }

    function prepararDemo(tipo) {
      const controls = document.getElementById("demoControls");
      const result = document.getElementById("demoResult");
      result.innerHTML = "Resultado...";

      const demos = {
        variables: `<input id="demoNombre" placeholder="Nombre" value="Ana"><input id="demoEdad" type="number" value="20">`,
        operadores: `<input id="a" type="number" value="10"><select id="op"><option>+</option><option>-</option><option>*</option><option>/</option><option>%</option></select><input id="b" type="number" value="3">`,
        condicionales: `<input id="notaDemo" type="number" value="7">`,
        bucles: `<input id="palabras" value="html,css,javascript">`,
        arrays: `<input id="itemArray" placeholder="Nueva tarea" value="repasar">`,
        funciones: `<input id="precio" type="number" value="20"><input id="envio" type="number" value="5">`,
        dom: `<input id="nombreDom" value="Alex">`,
        eventos: `<input id="teclaDemo" placeholder="Pulsa una tecla">`,
        math: `<input id="numMath" type="number" step="any" value="3.7">`,
        strings: `<input id="textoString" value="madrid">`,
        fechas: `<input id="fechaInput" type="date">`,
        formularios: `<input id="campoForm" placeholder="Campo obligatorio">`,
        errores: `<input id="notaError" type="number" value="8">`
      };

      controls.innerHTML = demos[tipo] || "";
      document.getElementById("ejecutarDemo").onclick = () => ejecutarDemo(tipo);

      if (tipo === "eventos") {
        setTimeout(() => {
          const input = document.getElementById("teclaDemo");
          input.addEventListener("keydown", e => result.innerHTML = "Has pulsado: " + e.key);
        }, 0);
      }
    }

    function ejecutarDemo(tipo) {
      const r = document.getElementById("demoResult");

      if (tipo === "variables") {
        const nombre = document.getElementById("demoNombre").value;
        const edad = Number(document.getElementById("demoEdad").value);
        r.innerHTML = `Hola ${nombre}. Edad: ${edad}. typeof edad: ${typeof edad}`;
      }

      if (tipo === "operadores") {
        const a = Number(document.getElementById("a").value);
        const b = Number(document.getElementById("b").value);
        const op = document.getElementById("op").value;
        let res = op === "+" ? a+b : op === "-" ? a-b : op === "*" ? a*b : op === "/" ? a/b : a%b;
        r.innerHTML = `${a} ${op} ${b} = ${res}`;
      }

      if (tipo === "condicionales") {
        const nota = Number(document.getElementById("notaDemo").value);
        r.innerHTML = nota >= 9 ? "Excelente" : nota >= 5 ? "Aprobado" : "Suspenso";
      }

      if (tipo === "bucles") {
        const arr = document.getElementById("palabras").value.split(",");
        let html = "";
        for (let i = 0; i < arr.length; i++) html += `${i}: ${arr[i].trim()}<br>`;
        r.innerHTML = html;
      }

      if (tipo === "arrays") {
        const item = document.getElementById("itemArray").value.trim();
        if (item) listaDemo.push(item);
        r.innerHTML = listaDemo.sort().join(" · ");
      }

      if (tipo === "funciones") {
        function calcularTotal(precio, envio) { return precio + envio; }
        r.innerHTML = "Total: " + calcularTotal(Number(precio.value), Number(envio.value));
      }

      if (tipo === "dom") {
        const nombre = document.getElementById("nombreDom").value;
        r.innerHTML = "Este texto se ha escrito con innerHTML. Hola, " + nombre;
      }

      if (tipo === "eventos") {
        r.innerHTML = "Escribe en el input y se detectará la tecla con keydown.";
      }

      if (tipo === "math") {
        const n = Number(document.getElementById("numMath").value);
        r.innerHTML = `floor: ${Math.floor(n)}<br>ceil: ${Math.ceil(n)}<br>abs: ${Math.abs(n)}<br>pow 2: ${Math.pow(n,2)}`;
      }

      if (tipo === "strings") {
        const texto = document.getElementById("textoString").value;
        r.innerHTML = `Original: ${texto}<br>Mayúsculas: ${texto.toUpperCase()}<br>Comparado con "madrid": ${texto.localeCompare("madrid")}`;
      }

      if (tipo === "fechas") {
        const valor = document.getElementById("fechaInput").value;
        const fecha = valor ? new Date(valor) : new Date();
        r.innerHTML = `Fecha: ${fecha.toLocaleDateString("es-ES")}<br>getMonth(): ${fecha.getMonth()}<br>Mes humano: ${fecha.getMonth()+1}`;
      }

      if (tipo === "formularios") {
        const campo = document.getElementById("campoForm").value.trim();
        r.innerHTML = campo === "" ? "No se puede enviar: campo vacío" : "Formulario válido: " + campo;
      }

      if (tipo === "errores") {
        const nota = Number(document.getElementById("notaError").value);
        let resultado;
        switch(true) {
          case nota >= 5:
            resultado = "aprobado";
            break;
          default:
            resultado = "suspenso";
        }
        r.innerHTML = "Con break, el resultado correcto es: " + resultado;
      }
    }

    pintarTiles();
