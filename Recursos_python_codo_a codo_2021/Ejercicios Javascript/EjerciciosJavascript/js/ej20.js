let angulo1 = Number(prompt("Ingrese el primer ángulo del triángulo: "));
let angulo2 = Number(prompt("Ingrese el segundo ángulo del triángulo: "));
let angulo3 = Number(prompt("Ingrese el tercer ángulo del triángulo:"));
if ((angulo1 + angulo2 + angulo3) == 180) {
    alert("Es un triángulo válido.");
}
else {
    alert("No es un triángulo válido.");
}
