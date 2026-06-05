function validarFormulario(){
    let campoNombre = document.getElementById('input_nombre');
    let campoRut = document.getElementById('input_rut');
    let campoEmail = document.getElementById('input_email');
    let campoFechaNacimiento = document.getElementById('inputFechaNac');
    let radioGenero = document.querySelector('input[name="radioGenero"]:checked');
    let campoContrasena = document.getElementById('input_contrasena');
    let campoRepetirContrasena = document.getElementById('input_confirm_contrasena');

    if(campoNombre.value == '' || campoRut.value == ''){
        alert('Debe Ingresar los datos requeridos!')
    }
}

function funcionPrueba(){
    alert('Click!')
}

function funcionFocus(){
    alert('Focus en el elemento')
}

function funcionBlur(){
    alert('Perdimos el focus del elemento')
}