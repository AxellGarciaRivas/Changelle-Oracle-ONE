//encripta el texto ingresado
function encriptar(palabra) {
    resultadoEncriptado = "";

    for (let i = 0; i < palabra.length; i++) {

        resultadoEncriptado += reemplazoletras(palabra[i]);
    }
}

function reemplazoletras(letra) {

    switch (letra) {
        case "a":
            return "ai";

        case "e":
            return "enter";

        case "i":
            return "imes";

        case "o":
            return "ober";

        case "u":
            return "ufat";

        default:
            return letra
    }
}