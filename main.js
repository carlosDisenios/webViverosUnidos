console.log('hola mundo');

//funcion para validar formulario

function validarFormulario() {
    //obtener referencias a los campos del formulario
    let nombreEmpresa = document.getElementById("formEmpresa");
    let nombreApellido = document.getElementById("formApellido");
    let telefono = document.getElementById("formTelefono");
    let email = document.getElementById("formEmail");
    let consulta = document.getElementById("validationTextarea");
    console.log("enviando formulario");

    //validar que los campos envio no esten vacios

    if(nombreEmpresa.value.trim() === "" || nombreApellido.value.trim() === "" || telefono.value.trim() === "" || email.value.trim() === "" || consulta.value.trim() === "" ) {
        alert("por favor complete los campos obligatorios");
        
        return false; //detiene el envio del formulario si los campos estan vacio
    }

  // Validar el formato del correo electrónico utilizando una expresión regular
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email.value)) {
  alert("Por favor ingrese un correo electrónico válido.");
  return false; // Detener el envío del formulario si el formato del correo electrónico es incorrecto
}

// Si todas las validaciones pasan, el formulario se envía correctamente
alert("¡El mensaje fue enviado con éxito!");
window.location.reload();
return true;
}


