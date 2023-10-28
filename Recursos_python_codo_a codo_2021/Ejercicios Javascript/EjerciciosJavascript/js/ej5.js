let edad1, edad2, edad3, edadMayor, nombre1, nombre2, nombre3;

nombre1 = prompt("Ingrese el nombre de la primera persona: ");
edad1 = Number(prompt("Ingrese la edad de la primera persona: "));
nombre2 = prompt("Ingrese el nombre de la segunda persona: ");
edad2 = Number(prompt("Ingrese la edad de la segunda persona: "));
nombre3 = prompt("Ingrese el nombre de la tercera persona: ");
edad3 = Number(prompt("Ingrese la edad de la tercera persona: "));

edadMayor = Math.max(edad1, edad2, edad3);
if (edadMayor == edad1) {
    alert("La persona mayor es " + nombre1);
}
else if (edadMayor == edad2) {
    alert("La persona mayor es " + nombre2);
}
else {
    alert("La persona mayor es " + nombre3);
}