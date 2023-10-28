let agno = Number(prompt("Ingrese un año: "));

if ((agno % 4 == 0) && ((agno % 100 != 0) || (agno % 400 == 0))){
    alert("El año es bisiesto.");
}
else {
    alert("El año no es bisiesto.");
}