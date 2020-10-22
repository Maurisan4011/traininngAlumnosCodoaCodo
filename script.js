// script.js

// Chequeo el correcto ingreso de los datos
//Variable para chequear que todos los campos hayan sido completados correctamente
var flag = [];

var longitud = document.getElementById("long");
var long_status = document.getElementById("long_status");
longitud.onkeyup = function(){
//console.log("key up");
//console.log((Number(longitud.value)));
    if (String(Number(longitud.value)) === "NaN"){
    //console.log("no numero");
    longitud.className="form-control is-invalid";
    long_status.innerHTML = "Ingrese un número"
    long_status.className="invalid-feedback";
    flag[0] = 0;
    }
    else {
    //console.log("numero");
    longitud.className="form-control is-valid";
    long_status.innerHTML = "Correcto"
    long_status.className="valid-feedback";
    flag[0] = 1;
    }
    }

var potencia = document.getElementById("pot");
var pot_status = document.getElementById("pot_status");
potencia.onkeyup = function(){
    if (String(Number(potencia.value)) === "NaN"){
    potencia.className="form-control is-invalid";
    pot_status.innerHTML = "Ingrese un número"
    pot_status.className="invalid-feedback";
    flag[1] = 0;
    }
    else {
    potencia.className="form-control is-valid";
    pot_status.innerHTML = "Correcto"
    pot_status.className="valid-feedback";
    flag[1] = 1;
    }
    }

var tension = document.getElementById("tens");
var tens_status = document.getElementById("tens_status");
tension.onkeyup = function(){
    if (String(Number(tension.value)) === "NaN"){
    tension.className="form-control is-invalid";
    tens_status.innerHTML = "Ingrese un número"
    tens_status.className="invalid-feedback";
    flag[2] = 0;
    }
    else {
    tension.className="form-control is-valid";
    tens_status.innerHTML = "Correcto"
    tens_status.className="valid-feedback";
    flag[2] = 1;
    }
    }

var caida = document.getElementById("caid");
var caid_status = document.getElementById("caid_status");
caida.onkeyup = function(){
    if (String(Number(caida.value)) === "NaN"){
    caida.className="form-control is-invalid";
    caid_status.innerHTML = "Ingrese un número"
    caid_status.className="invalid-feedback";
    flag[3] = 0;
    }
    else {
    caida.className="form-control is-valid";
    caid_status.innerHTML = "Correcto"
    caid_status.className="valid-feedback";
    flag[3] = 1;
    }
    }

// Validación formulario
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener('submit', validarForm);
});

function validarForm(evento){
    evento.preventDefault();

// Cálcular únicamente si los datos fueron ingresados correctamente
if ((flag.reduce((a, b) => a + b, 0)) === 4){
    resultado = Math.round(((2*0.021*longitud.value*potencia.value)/(tension.value*caida.value))*10)/10;
    alert("La sección mínima a utilizar es de: " + resultado + "mm2");
}
else{
    alert("Datos mal ingresados");
}

}