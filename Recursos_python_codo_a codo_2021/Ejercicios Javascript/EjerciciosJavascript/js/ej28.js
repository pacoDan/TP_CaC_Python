let nombres = [];
let ingreso;
for (let i = 0; i < 3; i++) {
    ingreso = prompt("Ingrese un nombre:");
    nombres[i] = ingreso;
    document.write(nombres[i] + "<br>");
}