let texto = prompt("Ingrese un texto: ");
let primerCaracter = Number(texto.charAt(0));
alert(primerCaracter);
if (!Number.isNaN(primerCaracter)) {
    alert("El texto comienza con un número.");
}
else {
    alert("El texto comienza con una letra o caracter.");
}
