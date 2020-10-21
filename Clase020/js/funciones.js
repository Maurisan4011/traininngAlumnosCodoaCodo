
//declarar variable global , vamos a hacer que creo una funcion que hace que cambie de color cuando carga, armando un loop infinito

var numIntgerval;

function cambioDeColor() {
    numIntgerval = setInterval(flashTexto, 1200);

}
function flashTexto() {
    var miElemento = document.getElementById('mi_mensaje')
    console.log(miElemento);
    //signo de interrogacion finciona como if (operador ternario)
    miElemento.style.color = miElemento.style.color == 'blue' ? 'yellow' : 'blue';
}
//el onclick viene directo aca saltaando el resto, para parar el loop y que no sea infinito
function detenerCambioDeColor() {
    console.log(numIntgerval);
    clearInterval(numIntgerval);

}
let cont = 0;
//validaciones del form

document.addEventListener("DOMContentLoaded", function () {
    let formu = document.getElementById("formulario")

    document.getElementById("formulario").addEventListener('submit', validarForm);
    // console.log("ingrese en la funcion");
    // console.log(formu);
});
//funciones para validar
function validarForm(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    // console.log("te traje usuario " + usuario);
    if (usuario.length == 0) {
        alert('El campo usuario no puede estar vacío, deberá ingresar su Email');
        return;
    } else {
        for (const user of usuario) {
            // console.log("Valor de usuario ingresado: " + user);
            if (user == "@") {
                cont++
                break;
            }
        }
        if (cont == 0) {
            alert("El campo usuario debe contener un @");
            return;
        }
    }
    var password = document.getElementById('password').value;
    // console.log("pass ingresado: " + password);

    if (password.length < 6) {
        alert("Su contraseña debe contener al menos 6 caracteres");
        return;
    }
    this.submit(alert("Bienvenido Wiii!!"));

}