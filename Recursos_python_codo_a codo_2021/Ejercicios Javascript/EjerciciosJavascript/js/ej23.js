let numeroElegido = Math.floor(Math.random() * 10) + 1;
let numeroIngresado;
alert(numeroElegido);
do {
    numeroIngresado = Number(prompt("A ver si podés averiguar el número entre 1 y 10 que pensé..."));
    if (numeroIngresado == numeroElegido) {
        alert("¡Buen trabajo!");
        break;
    }
    alert("No corresponde.");
} while (numeroIngresado != numeroElegido);