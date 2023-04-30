const inputNombre = document.querySelector ("#info-ingresada");
const inputEdad = document.querySelector("#edad-ingresada");
const inputEmail = document.querySelector("#email-ingresado");
const inputDni = document.querySelector("#dni-ingresado");
const pNombreUsuario = document.querySelector("#nombre");
const pEdadUsuario =document.querySelector("#edad");
const pEmailUsuario= document.querySelector("#email");
const pDniUsuario = document.querySelector("#dni");


let nombreRecibido = "def nombre";
let edadRecibida = "def edad";
let emailRecibido = "def email";
let dniRecibido = "def dni";



function info() {


    pNombreUsuario.innerHTML = nombreRecibido;
    pEdadUsuario.innerHTML= edadRecibida;
    pEmailUsuario.innerHTML= emailRecibido;
    pDniUsuario.innerHTML= dniRecibido;

    nombreRecibido = inputNombre.value;
    edadRecibida = inputEdad.value;
    emailRecibido = inputEmail.value;
    dniRecibido = inputDni.value;

if (nombreRecibido)
    pNombreUsuario.innerHTML = " Bienvenida " + nombreRecibido;
    pEdadUsuario.innerHTML = "tu edad es " + edadRecibida;
    pEmailUsuario.innerHTML= "tu email es " + emailRecibido;
    pDniUsuario.innerHTML= " tu DNI es " + dniRecibido;

}