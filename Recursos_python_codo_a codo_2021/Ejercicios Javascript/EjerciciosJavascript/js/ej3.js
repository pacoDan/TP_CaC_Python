let texto="", ingreso="", contadorIngresos = 0;

do {
    ingreso = prompt("Ingrese una cadena de texto: ");
    if (ingreso == null) {
        break;
    }
    else {
        if (contadorIngresos != 0) {
            texto = texto + "-" + ingreso;
        }
        else {
            texto = texto + ingreso;
        }
        contadorIngresos++;
    }
} while (ingreso != null);
alert(texto);