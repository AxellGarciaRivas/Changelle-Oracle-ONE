const expresion = /^[a-z/ñ]+[a-z\s]*$/; // Letras
let ingresoTexto = document.querySelector("#ingreso-texto");
let botonEncriptar = document.querySelector(".encriptar");
let botonDesencriptar = document.querySelector(".desencriptar");
let borde = document.querySelector("#ingreso-texto");
let sugerenciaCambio = document.querySelector("#mensaje-sugerencia")
let validoEncriptar = false;

//verifica que las teclas seleccionadas son validas a la sugerencia
ingresoTexto.addEventListener("keyup", validarTexto);

function validarTexto() {

    if (expresion.test(ingresoTexto.value)) {
        agregarClase(borde, "valido");
        eliminarClase(borde, "invalido");
        eliminarClase(sugerenciaCambio, "invalido-letra");
        modificarMensaje(sugerenciaCambio, "Solo letras minusculas y sin acentos.");
        validoEncriptar = true;
    } else {
        agregarClase(borde, "invalido")
        agregarClase(sugerenciaCambio, "invalido-letra");
        modificarMensaje(sugerenciaCambio, "Lo sentimos, no puedes ingresar letras mayusculas, con acento, caracteres especiales o sin texto");
        validoEncriptar = false;
    }
}

let mensajeEncriptar;
let resultadoEncriptado;
let salidaTexto = document.querySelector("#salida-texto");

let tituloSalida = document.querySelector(".titulo-salida");
let parrafoSalida = document.querySelector(".parrafo-salida");
let muneco = document.querySelector(".muneco");
let botonCopiar = document.querySelector(".boton-copiar");

//accion del boton de encriptacion
botonEncriptar.addEventListener("click", function (e) {
    e.preventDefault();

    if (validoEncriptar) {
        mensajeEncriptar = ingresoTexto.value;
        encriptar(mensajeEncriptar);

        if (resultadoEncriptado !== "") {
            modificarMensaje(salidaTexto, resultadoEncriptado);
            agregarClase(tituloSalida, "ocultar");
            agregarClase(parrafoSalida, "ocultar");
            agregarClase(muneco, "ocultar");
            agregarClase(botonCopiar, "mostrar");
        }
    } else {
        modificarMensaje(sugerenciaCambio, "Lo sentimos, no puedes ingresar letras mayusculas, con acento, caracteres especiales o sin texto")
        agregarClase(sugerenciaCambio, "invalido-letra")
    }
})

let mensajeDesencriptar;
let resultadoDesencriptado;

//accion del boton desencriptacion
botonDesencriptar.addEventListener("click", function (e) {
    e.preventDefault();

    if (validoEncriptar) {
        mensajeDesencriptar = ingresoTexto.value;
        desencriptar(mensajeDesencriptar);

        if (resultadoDesencriptado !== "") {
            modificarMensaje(salidaTexto, resultadoDesencriptado);
            agregarClase(tituloSalida, "ocultar");
            agregarClase(parrafoSalida, "ocultar");
            agregarClase(muneco, "ocultar");
            agregarClase(botonCopiar, "mostrar");
        }
    } else {
        modificarMensaje(sugerenciaCambio, "Lo sentimos, no puedes ingresar letras mayusculas, con acento, caracteres especiales o sin texto")
        agregarClase(sugerenciaCambio, "invalido-letra")
    }
})

let textoMostrar = document.querySelector("#copiado");

//accion del boton de copiar
botonCopiar.addEventListener("click", function (e) {
    e.preventDefault()
    salidaTexto.focus()
    document.execCommand('SelectAll');
    document.execCommand('copy');
    agregarClase(salidaTexto, "seleccion-desactivada");
    modificarMensaje(textoMostrar, "Mensaje copiado");
    setTimeout(() => modificarMensaje(textoMostrar, ""), 2000);

})

salidaTexto.addEventListener("click", function (e) {
    e.preventDefault();
    eliminarClase(salidaTexto, "seleccion-desactivada")
})
