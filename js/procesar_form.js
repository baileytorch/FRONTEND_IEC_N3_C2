window.onload = function(){
    document.getElementById('alertaNombre').style.display = 'none';
    document.getElementById('alertaRut').style.display = 'none';
    document.getElementById('alertaEmail').style.display = 'none';
    document.getElementById('alertaFechaNacimiento').style.display = 'none';
    document.getElementById('alertaGenero').style.display = 'none';
    document.getElementById('alertaContrasena').style.display = 'none';
    document.getElementById('alertaRepetirContrasena').style.display = 'none';
};

function validarFormulario() {
    let campoNombre = document.getElementById('input_nombre');
    let campoRut = document.getElementById('input_rut');
    let campoEmail = document.getElementById('input_email');
    let campoFechaNacimiento = document.getElementById('inputFechaNac');
    let radioGenero = document.querySelector('input[name="radioGenero"]:checked');
    let campoContrasena = document.getElementById('input_contrasena');
    let campoRepetirContrasena = document.getElementById('input_confirm_contrasena');
    let formularioValido = true;

    if (!validarInput(campoNombre)) { 
        document.getElementById('alertaNombre').style.display = 'block';
        formularioValido = false; 
    }
    if (!validarEmail(campoEmail)) { 
        document.getElementById('alertaRut').style.display = 'block';
        formularioValido = false; 
    }
    if (!validarRut(campoRut)) { formularioValido = false }
    if (!validarInput(campoFechaNacimiento)) { formularioValido = false; }
    if (!validarContraseñaSegura(campoContrasena)) { formularioValido = false; }
    if (!validarRepetirContrasena(campoRepetirContrasena, campoContrasena)) { formularioValido = false; }

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

function validarRut(elemento) {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    regexRut = /^[0-9]+[-‐]{1}[0-9kK]{1}$/;
    const rutCompleto = elemento.value.replaceAll('.','');

    if (validarInput(elemento)) {
        if (!regexRut.test(rutCompleto)) {
            elemento.classList.add('inputInvalido', 'is-invalid');
            return false
        } else {
            var tmp = rutCompleto.split('-');
            var digv = tmp[1];
            var rut = tmp[0];
            if (digv == 'K') digv = 'k';
            if (calculoDv(rut) == digv) {
                elemento.classList.remove('inputInvalido', 'is-invalid');
                elemento.classList.add('is-valid');
                return true
            } else {
                elemento.classList.add('inputInvalido', 'is-invalid');
                return false
            };
        }
    }
};

function calculoDv(T) {
    var M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
};