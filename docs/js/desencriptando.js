//devuelve palabra desencriptada
function desencriptar(palabra) {
    const matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    resultadoDesencriptado = ""

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (palabra.includes(matrizCodigo[i][0])) {
            palabra = palabra.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            console.log(palabra)
        }
    }
    resultadoDesencriptado = palabra;
}