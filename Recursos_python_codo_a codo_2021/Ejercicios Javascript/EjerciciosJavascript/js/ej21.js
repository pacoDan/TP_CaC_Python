let texto = prompt("Ingrese un texto: ");
let primerCaracter = texto.charAt(0);
if (primerCaracter == primerCaracter.toUpperCase()) {
    alert("El texto comienza con un caracter en mayúscula.");
}
else {
    alert("El texto comienza con un caracter en minúscula.");
}