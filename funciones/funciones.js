====================================================================
ARCHIVO: funciones/funciones.js
====================================================================

/**
 * Archivo: funciones/funciones.js
 * Tarea evaluable LMSGI02.2 - BirtLH
 */

// Función 1: Saludo dinámico según la hora actual
function mostrarSaludoTiempo() {
  const contenedor = document.getElementById('saludo-dinamico');
  if (!contenedor) return;

  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo = "";

  if (hora >= 6 && hora < 12) {
    saludo = "¡Buenos días! Prepárate para la jornada del Gran Premio.";
  } else if (hora >= 12 && hora < 20) {
    saludo = "¡Buenas tardes! Sigue la cobertura en directo del Gran Premio.";
  } else {
    saludo = "¡Buenas noches! Revisa los horarios para la carrera de mañana.";
  }

  contenedor.innerHTML = `<p style="background-color: #ffe6e6; padding: 10px; border-left: 5px solid #e10600; font-weight: bold;">${saludo}</p>`;
}

// Función 2: Resalta la sesión que se realiza el día de hoy
function resaltarSesionHoy() {
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const hoy = diasSemana[new Date().getDay()];
  const filas = document.querySelectorAll("table tbody tr");
  let encontrado = false;

  filas.forEach(fila => {
    const diaCelda = fila.cells[1].innerText.trim();
    // Limpiar resaltados previos
    fila.style.backgroundColor = "";
    fila.style.fontWeight = "normal";

    if (diaCelda.toLowerCase() === hoy.toLowerCase()) {
      fila.style.backgroundColor = "#fff176"; // Color amarillo resaltado
      fila.style.fontWeight = "bold";
      encontrado = true;
    }
  });

  const mensaje = document.getElementById('mensaje-sesion');
  if (mensaje) {
    if (encontrado) {
      mensaje.innerText = `¡Hoy es ${hoy}! Tienes sesiones programadas destacadas en amarillo.`;
      mensaje.style.color = "green";
    } else {
      mensaje.innerText = `Hoy es ${hoy}. No hay sesiones programadas en la pista para el día de hoy.`;
      mensaje.style.color = "#333";
    }
  }
}

// Función 3: Validación básica del formulario de contacto
function validarFormularioContacto(event) {
  const nombre = document.getElementById('nombre').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre.length < 3) {
    alert("Por favor, introduce un nombre válido de al menos 3 caracteres.");
    event.preventDefault(); // Detiene el envío del formulario
    return false;
  }

  if (mensaje.length < 10) {
    alert("El mensaje es demasiado corto. Por favor, escribe al menos 10 caracteres.");
    event.preventDefault(); // Detiene el envío del formulario
    return false;
  }

  alert("Formulario validado correctamente. Se procederá a enviar tu mensaje.");
  return true;
}

// Inicialización de eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Ejecuta la función 1 en Inicio si existe el contenedor
  mostrarSaludoTiempo();

  // Asigna evento al botón de verificar sesión en Circuito
  const botonVerificar = document.getElementById('btn-verificar-hoy');
  if (botonVerificar) {
    botonVerificar.addEventListener('click', resaltarSesionHoy);
  }

  // Asigna evento de validación al Formulario de Contacto
  const formulario = document.querySelector('form');
  if (formulario) {
    formulario.addEventListener('submit', validarFormularioContacto);
  }
});