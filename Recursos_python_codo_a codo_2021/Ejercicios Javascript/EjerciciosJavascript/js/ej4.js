let suma = 0, ingreso = 0;
do {
    ingreso = Number(prompt("Ingrese un número: "));
    if (ingreso == "") {
        break;
    }
    else {
        if (Number.isNaN(ingreso)) {
            alert("No es un número.");
        }
        else {
            suma = suma + ingreso;
        }
    }
} while (ingreso != "");
alert("La suma de los números es: " + suma);