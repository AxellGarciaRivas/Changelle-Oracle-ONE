botonCopiar.addEventListener("click", function (e) {
    e.preventDefault()
    salidaTexto.focus()
    document.execCommand('SelectAll')
    document.execCommand('copy')
})