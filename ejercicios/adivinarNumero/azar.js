
    let num, cont, terminado = false;

    const form = document.querySelector('form');
    const entrada = document.getElementById('num');
    const mensaje = document.getElementById('mensaje');

    function mostrarMensaje(html) {
      mensaje.innerHTML = html; // permite HTML para botones
    }

    function nuevoJuego() {
      num = Math.floor(Math.random() * 100) + 1;
      cont = 0;
      terminado = false;
      entrada.disabled = false;
      entrada.value = '';
      entrada.focus();
      mostrarMensaje('He pensado un número entre 1 y 100. ¡Intenta adivinarlo!');
    }

    function jugarTurno() {
      if (terminado) return;

      const n = parseInt(entrada.value, 10);

      if (isNaN(n) || n < 1 || n > 100) {
        mostrarMensaje('Número no válido. Debe ser del 1 al 100.');
        entrada.select();
        return;
      }

      cont++;

      if (n < num) {
        mostrarMensaje('El número que buscas es mayor.');
      } else if (n > num) {
        mostrarMensaje('El número que buscas es menor.');
      } else {
        terminado = true;
        entrada.disabled = true;
        mostrarMensaje(`¡Acertaste! Intentos: ${cont}<br><br>
          ¿Quieres jugar de nuevo?
          <div class="opciones">
            <button id="btn-yes">Sí</button>
            <button id="btn-no">No</button>
          </div>
        `);

        // Delegamos la acción de los botones
        document.getElementById('btn-yes').addEventListener('click', nuevoJuego);
        document.getElementById('btn-no').addEventListener('click', () => {
          mostrarMensaje('Gracias por jugar 😊');
        });
      }

      entrada.value = '';
      entrada.focus();
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      jugarTurno();
    });

    // Arranca
    nuevoJuego();
