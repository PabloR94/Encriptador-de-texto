//Texto entrada
var texto = document.getElementById("input-text");

//Texto salida
var mensaje = document.getElementById("output");

//Boton encriptar
function btnEncriptar(){
    const txtEncriptado = encriptar(texto.value);
    mensaje.value = txtEncriptado;
    document.getElementById("output").style.height = "28rem"
    document.getElementById("txt").style.display = "none";
    document.getElementById("imgDer").style.display = "none";
}

//Encriptado
function encriptar(stringEnc) {
    let llaves =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for (let i = 0; i < llaves.length; i++) {
        if (stringEnc.includes(llaves[i][0])){
            stringEnc = stringEnc.replaceAll(llaves[i][0], llaves[i][1])
        }
    }
    return stringEnc;
}


//Boton desencriptar
function btnDesencriptar(){
    const txtDesencriptado = desencriptar(texto.value);
    mensaje.value = txtDesencriptado;
    document.getElementById("output").style.height = "28rem"
    document.getElementById("txt").style.display = "none";
    document.getElementById("imgDer").style.display = "none";
}

//Desencriptado
function desencriptar(stringDes) {
    let llaves =[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    for (let i = 0; i < llaves.length; i++) {
        if (stringDes.includes(llaves[i][0])){
            stringDes = stringDes.replaceAll(llaves[i][0], llaves[i][1])
        }
    }
    return stringDes;
}

//Boton copiar
function btnCopiar(){
    const mensajeCopiado = document.getElementById("output").value
    navigator.clipboard.writeText(mensajeCopiado);
    swal("Mensaje Copiado","Recuerde que con las tecla Ctrl+V en Windows puede pegarlo","success");
}