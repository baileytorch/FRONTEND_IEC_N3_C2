function validarFormulario() {
    let campoNombre = document.getElementById('input_nombre');
    let campoRut = document.getElementById('input_rut');
    let campoEmail = document.getElementById('input_email');
    let campoFechaNacimiento = document.getElementById('inputFechaNac');
    let radioGenero = document.querySelector('input[name="radioGenero"]:checked');
    let campoContrasena = document.getElementById('input_contrasena');
    let campoRepetirContrasena = document.getElementById('input_confirm_contrasena');
    let formularioValido = true;

    if (!validarInput(campoNombre)) { formularioValido = false; }
    if (!validarInput(campoRut)) { formularioValido = false; }
    if (!validarEmail(campoEmail)) { formularioValido = false; }
    if (!validarInput(campoFechaNacimiento)) { formularioValido = false; }
    if (!validarContraseñaSegura(campoContrasena)) { formularioValido = false; }
    if (!validarRepetirContrasena(campoRepetirContrasena,campoContrasena)) { formularioValido = false; }

    if (formularioValido) {
        alert('Formulario Válido, enviando datos al servidor.')
    } else {
        alert('Solucione los problemas de su formulario antes de ser enviado...')
    }
}

function validarInput(elemento) {
    if (elemento.value == '') {
        elemento.classList.add('inputInvalido', 'is-invalid');
        return false
    } else {
        elemento.classList.remove('inputInvalido', 'is-invalid');
        elemento.classList.add('is-valid');
        return true
    }
}

function validarEmail(elemento) {
    if (validarInput(elemento)) {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexEmail.test(elemento.value)) {
            elemento.classList.remove('inputInvalido', 'is-invalid');
            elemento.classList.add('is-valid');
            return true
        } else {
            elemento.classList.add('inputInvalido', 'is-invalid');
            return false
        }
    }
}

function validarContraseñaSegura(elemento) {
    if (validarInput(elemento)) {
        const regexContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (regexContrasena.test(elemento.value)) {
            elemento.classList.remove('inputInvalido', 'is-invalid');
            elemento.classList.add('is-valid');
            return true
        } else {
            elemento.classList.add('inputInvalido', 'is-invalid');
            return false
        }
    }
}

function validarRepetirContrasena(elemento, elemento2) {
    if (validarInput(elemento)) {
        if (elemento.value === elemento2.value) {
            elemento.classList.remove('inputInvalido', 'is-invalid');
            elemento.classList.add('is-valid');
            return true
        } else {
            elemento.classList.add('inputInvalido', 'is-invalid');
            return false
        }
    }
}