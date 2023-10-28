let nota = Number(prompt("Ingrese nota:"));
if ((nota >= 0) && (nota < 3)) {
    alert("Muy deficiente");
} else if ((nota >= 3) && (nota < 5)) {
    alert("Insuficiente");
} else if ((nota >= 5) && (nota < 6)) {
    alert("Suficiente");
} else if ((nota >= 6) && (nota < 7)) {
    alert("Bien");
} else if ((nota >= 7) && (nota < 9)) {
    alert("Notable");
} else if ((nota >= 9) && (nota <= 10)) {
    alert("Sobresaliente");
} else {
    alert("Valor erróneo");
}