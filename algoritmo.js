const inputEntrada = document.querySelector ("#info-ingresada");
const pNombreUsuario = document.querySelector("#nombre");


let nombreRecibido = "def nombre";


function info() {

    nombreRecibido = inputEntrada.value;
    pNombreUsuario.innerHTML = nombreRecibido;

if (nombreRecibido)
    pNombreUsuario.innerHTML = " welcome " + nombreRecibido;
}