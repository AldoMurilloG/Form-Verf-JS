  
const formulario = document.getElementById('formulario');

var checkboxAcom = document.getElementById('checkboxAcompaniado');
var checkboxSolo = document.getElementById('checkboxSolo');

var formularioAcompaniado = document.getElementById('formularioAcompaniado');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
apelldo:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar 
dni: /^\d{8}$/ ,// 8 numeros.
telefono: /^\d{7,14}$/ ,// 7 a 14 numeros.
domicilio: /^[a-zA-Z0-9]/, // Letras, numeros
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//Datos de Acompañante
nombreAcom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
apellidoAcom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
dniAcom:/^\d{8}$/ ,// 8 numeros.
telefonoAcom: /^\d{7,14}$/ ,// 7 a 14 numeros.
domicilioAcom:/^[a-zA-Z0-9]/, // Letras, numeros

}

const campos = {
nombre: false,
apellido:false,
dni:false,
telefono: false,
domicilio:false,
correo: false,

nombreAcom:false,
apellidoAcom:false,
dniAcom:false,
telefonoAcom:false,
domicilioAcom:false
}

const validarFormulario = (e) => {
switch (e.target.name) {
//nombre cliente
case "nombre":
validarCampo(expresiones.nombre, e.target, 'nombre');
break;
//apellido cliente
case "apellido":
validarCampo(expresiones.nombre, e.target, 'apellido');

break;
//Dni
case "dni":
validarCampo(expresiones.telefono, e.target, 'dni');

break;
//Telefono 
case "telefono":
validarCampo(expresiones.telefono, e.target, 'telefono');

break;
//Domicilio
validarCampo(expresiones.nombre, e.target, 'domicilio');
var domicilios = document.getElementById('domicilio').value;
console.log("Domicilio :",domicilios);
break;
//correo
case "correo":
validarCampo(expresiones.correo, e.target, 'correo');

break;
//domicilio
case "domicilio":
validarCampo(expresiones.domicilio, e.target, 'domicilio');

break;

case "nombreAcom":
validarCampo(expresiones.nombreAcom, e.target,'nombreAcom');

break;
case "apellidoAcom":
validarCampo(expresiones.apellidoAcom, e.target,'apellidoAcom');

break;
case "dniAcom":
    validarCampo(expresiones.dniAcom, e.target,'dniAcom');

    break;    
case "telefonoAcom":
    validarCampo(expresiones.telefonoAcom, e.target,'telefonoAcom');

    break;   
case "domicilioAcom":
    validarCampo(expresiones.domicilioAcom, e.target,'domicilioAcom');
    break;  
}}


const validarCampo = (expresion, input, campo) => {

if(expresion.test(input.value)){
document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
campos[campo] = true;

} else {
document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
campos[campo] = false;
 
}
}

   
checkboxAcom.addEventListener('change', function () {
    if (checkboxAcom.checked) {
        formularioAcompaniado.classList.remove('hidden');
        checkboxSolo.disabled = true;
    } else {
        formularioAcompaniado.classList.add('hidden');
        checkboxSolo.disabled = false;
    }
 });

inputs.forEach((input) => {
input.addEventListener('keyup', validarFormulario);
input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', (e) => {
e.preventDefault();
const terminos = document.getElementById('terminos');
if(campos.nombre && campos.apellido && campos.dni && campos.telefono && campos.correo && campos.domicilio &&
terminos.checked){

//mostrar datos
var nombres = document.getElementById('nombre').value;
console.log("Nombre :",nombres);
var apellido = document.getElementById('apellido').value;
console.log("Apellido :",apellido);
var fechaNac = document.getElementById('fechaNac').value;
console.log("fecha nacimiento : ",fechaNac);
var dni = document.getElementById('dni').value;
console.log("DNI : ",dni);
var telefono = document.getElementById('telefono').value;
console.log("Telefono : ",telefono);
var email = document.getElementById('correo').value;
console.log("Correo Electronico : ",email);
var domicilios = document.getElementById('domicilio').value;
console.log("Domicilio :",domicilios);
var nombreAcompaniante = document.getElementById('nombreAcom').value;
console.log("Nombre del Acompañante : ",nombreAcompaniante);
var apellidoAcompaniante = document.getElementById('apellidoAcom').value;
console.log("Apellido del Acompañante : ",apellidoAcompaniante);
var dniAcompaniante = document.getElementById('dniAcom').value;
console.log("DNI del Acompañante : ",apellidoAcompaniante);
var telefonoAcompaniante = document.getElementById('dniAcom').value;
console.log("Telefono del Acompañante : ",telefonoAcompaniante);
var domicilioAcompaniante = document.getElementById('domicilioAcom').value;
    console.log("Domicilio del Acompañante : ",domicilioAcompaniante);
//Fin de mostrar datos
formulario.reset();
document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
setTimeout(() => {
document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
}, 5000);
document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
icono.classList.remove('formulario__grupo-correcto');
});
} else {
document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
}

});
