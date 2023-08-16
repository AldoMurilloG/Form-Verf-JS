  
const formulario = document.getElementById('formulario');

var checkboxAcom = document.getElementById('checkboxAcompaniado');
var checkboxSolo = document.getElementById('checkboxSolo');

var formularioAcompaniado = document.getElementById('formularioAcompaniado');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
fechaNac: /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,

nombreAcom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
fechaNacAcom: /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
}

const campos = {
nombre: false,
fechaNac: false,

nombreAcom:false,
fechaNacAcom:false,
}

const validarFormulario = (e) => {
switch (e.target.name) {
//nombre cliente
case "nombre":
validarCampo(expresiones.nombre, e.target, 'nombre');
break;
case "fechaNac":
validarCampo(expresiones.fechaNac, e.target, 'fechaNac');
break;

case "nombreAcom":
validarCampo(expresiones.nombreAcom, e.target,'nombreAcom');
break;

case "fechaNacAcom":
validarCampo(expresiones.fechaNacAcom, e.target, 'fechaNacAcom');
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
if(campos.nombre && campos.fechaNac && terminos.checked && campos.fechaNacAcom){
//mostrar datos
var nombres = document.getElementById('nombre').value;
console.log("Nombre :",nombres);
var fechaNac = document.getElementById('fechaNac').value;
console.log("fecha nacimiento : ",fechaNac);

var nombreAcompaniante = document.getElementById('nombreAcom').value;
console.log("Nombre del Acompañante : ",nombreAcompaniante);
var fechaNacAcom = document.getElementById('fechaNacAcom').value;
console.log("fecha nacimiento del Acompañante : ",fechaNacAcom);

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


// case "fechaNac":
//     if("fechaNac" instanceof Date ) {
//         console.log('es de tipo Date');
//     };
// break;