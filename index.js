function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById ("titulo-mensaje");
    let enunciado = document.getElementById("enunciado");
    let joven = document.getElementById("joven");  

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (texto.length != 0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    enunciado.textContent= "";
    joven.src = "./imagenes/Mu+¦eco.png";
}
else{
    joven.src = "./imagenes/diamod.jpg";
    tituloMensaje.textContent = "Ningun mensaje fue encriptado";
    enunciado.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algun texto");
}
}