let contadorVocales = 0;
let texto = prompt("Ingrese un texto: ").toLowerCase();
for (let i = 0; i < texto.length; i++) {
    switch (texto.charAt(i)) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            contadorVocales++;
            break;
    }
}
alert("El texto tiene " + contadorVocales + " vocales.");

