let listaInscripciones = [];
let indiceEdicion = null;

const campoNombrePersona = document.getElementById("nombrePersona");
const campoActividadSeleccionada = document.getElementById("actividadSeleccionada");
const botonGuardar = document.getElementById("botonGuardar");
const cuerpoTablaInscripciones = document.getElementById("cuerpoTablaInscripciones");

botonGuardar.addEventListener("click", guardarInscripcion);

function guardarInscripcion() {
    const nombrePersona = campoNombrePersona.value.trim();
    const actividadSeleccionada = campoActividadSeleccionada.value;
    const turnoMarcado = document.querySelector('input[name="turnoActividad"]:checked');

    if (nombrePersona === "" || actividadSeleccionada === "" || !turnoMarcado) {
        alert("Debes completar todos los campos.");
        return;
    }

    const turnoSeleccionado = turnoMarcado.value;

    const nuevaInscripcion = {
        nombre: nombrePersona,
        actividad: actividadSeleccionada,
        turno: turnoSeleccionado
    };

    if (indiceEdicion === null) {
        listaInscripciones.push(nuevaInscripcion);
    } else {
        listaInscripciones[indiceEdicion] = nuevaInscripcion;
        indiceEdicion = null;
        botonGuardar.textContent = "Añadir inscripción";
        botonGuardar.classList.remove("btn-warning");
        botonGuardar.classList.add("btn-primary");
    }

    limpiarFormulario();
    mostrarInscripciones();
}

function mostrarInscripciones() {
    cuerpoTablaInscripciones.innerHTML = "";

    listaInscripciones.forEach((inscripcion, indice) => {
        cuerpoTablaInscripciones.innerHTML += `
            <tr>
                <td>${inscripcion.nombre}</td>
                <td>${inscripcion.actividad}</td>
                <td>${inscripcion.turno}</td>
                <td class="text-center align-middle">
                    <div class="acciones-botones">
                        <button class="btn btn-sm btn-warning" onclick="editarInscripcion(${indice})" title="Editar inscripción">
                            <span class="material-symbols-outlined">edit</span>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="borrarInscripcion(${indice})" title="Borrar inscripción">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
}

function borrarInscripcion(indice) {
    listaInscripciones.splice(indice, 1);
    mostrarInscripciones();
}

function editarInscripcion(indice) {
    const inscripcion = listaInscripciones[indice];

    campoNombrePersona.value = inscripcion.nombre;
    campoActividadSeleccionada.value = inscripcion.actividad;

    const radioTurno = document.querySelector(`input[name="turnoActividad"][value="${inscripcion.turno}"]`);
    if (radioTurno) {
        radioTurno.checked = true;
    }

    indiceEdicion = indice;

    botonGuardar.textContent = "Guardar cambios";
    botonGuardar.classList.remove("btn-primary");
    botonGuardar.classList.add("btn-warning");
}

function limpiarFormulario() {
    campoNombrePersona.value = "";
    campoActividadSeleccionada.value = "";
    document.querySelectorAll('input[name="turnoActividad"]').forEach(radio => {
        radio.checked = false;
    });
}