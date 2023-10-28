let texto = prompt("Ingrese un texto: ");
let textoInvertido = "";
for (let i = (texto.length - 1); i >= 0; i--) {
    textoInvertido = textoInvertido + texto.charAt(i);
}
alert("El texto invertido es: " + textoInvertido);