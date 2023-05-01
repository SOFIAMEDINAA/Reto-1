const inputNombre = document.querySelector("#info-ingresada");
const inputEdad = document.querySelector("#edad-ingresada");
const inputEmail = document.querySelector("#email-ingresado");
const inputDni = document.querySelector("#dni-ingresado");
const pNombreUsuario = document.querySelector("#nombre");
const pEdadUsuario = document.querySelector("#edad");
const pEmailUsuario = document.querySelector("#email");
const pDniUsuario = document.querySelector("#dni");
const cuerpoPagina = document.querySelector("body");
const imagen = document.querySelector("#imagen");

const MAYOR_EDAD = 18;
const COLOR_FONDO = "#0d1117";
const COLOR_TXTO = "#e6edf3";
const IMG_1 = "https://static.wixstatic.com/media/7c71be_1ca3a125882f481db7361be2b28f0962~mv2.png/v1/crop/x_0,y_0,w_217,h_225/fill/w_203,h_210,al_c,usm_0.66_1.00_0.01/7c71be_1ca3a125882f481db7361be2b28f0962~mv2.png";
const IMG_2 = "https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/kitchenaid/en-ca/digital-assets/nav-v2/owners-v2/IconsV2-Product-reg-rev.jpg";
const FUENTE_TEXTO = "monospace"; 
/* const COLOR_TXTO_INGRESADO= "violet"; */

let nombreRecibido = "def nombre";
let edadRecibida = "def edad";
let emailRecibido = "def email";
let dniRecibido = "def dni";

imagen.src = IMG_1;

function info() {

    cuerpoPagina.style.color = COLOR_TXTO;
    cuerpoPagina.style.backgroundColor = COLOR_FONDO;
    cuerpoPagina.style.fontFamily= FUENTE_TEXTO;
    imagen.src = IMG_2;


    nombreRecibido = inputNombre.value;
    edadRecibida = inputEdad.value;
    emailRecibido = inputEmail.value;
    dniRecibido = inputDni.value;

    pNombreUsuario.innerHTML = " Bienvenido/a " + nombreRecibido;
    pEdadUsuario.innerHTML = "tu edad es " + edadRecibida;
    pEmailUsuario.innerHTML = "tu email es " + emailRecibido;
    pDniUsuario.innerHTML = " tu DNI es " + dniRecibido;


    if (edadRecibida >= MAYOR_EDAD) {
        pEdadUsuario.innerHTML = " tu edad es " + edadRecibida + " años ( eres mayor de edad )";
    } else {
        pEdadUsuario.innerHTML = " tu edad es " + edadRecibida + " años ( eres menor de edad )";
    }

}

