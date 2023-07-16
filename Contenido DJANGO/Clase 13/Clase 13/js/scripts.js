//CONVERSIÓN A NÚMERO CON Number()

let texto = "123";
let numero = Number(texto);

let variable1 = 5;
let variable2 = 6;

console.log(variable1 == variable2);

/* let variable1 = "5";
console.log(+variable1+5); */

//CONVERSIÓN A NÚMERO CON +

/* let numero = +"20";
numero = numero + 20;
console.log(numero); */

//true=1 false=0

//and (&&)(shift+6) MULTIPLICACIÓN LÓGICA
//false && false = 0
//true  && false = 0 
//false && true  = 0
//true  && true  = 1

//or (||) SUMA LÓGICA
//false || false = 0
//true  || false = 1 
//false || true  = 1
//true  || true  = 1

//not (!) NEGACIÓN LÓGICA
//!false = 1
//!true  = 0

//IF - ELSE

/* let variable = 4;
if (variable == 4){
    console.log("Igual a 4");
}  
else {
    console.log("Diferente a 4");
} */

//IF - ELSE-IF - ELSE

/* let nota = 7;
if (nota >= 7) {
    console.log("Aprobado");
} 
else if ((nota >= 4) && (nota < 7)) {
    console.log("Regular");
} 
else {
    console.log("Desaprobado");
}

console.log("Salimos del bucle"); */


//Rangos:

/* let numero = 23;

if((numero>=10 && numero<20) || (numero==25)){
    console.log("Hola");
}  */

//OPERADOR TERNARIO

/* let nota = 7;
let condicion = (nota>=4) ? "Aprobado" : "Desaprobado";
console.log(condicion); */

//SWITCH

/* let opcion = 1;
switch (opcion) {
    case 1:
        console.log("Opción 1");
        break;
    case 2:
        console.log("Opción 2");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Opción 3 o 4 o 5");
        break;
    default:
        console.log("Cualquier otra opción");
        break;
} */

// WHILE - DO-WHILE
/* 
let contador = 0;
while (contador <= 5) {
    console.log("Valor de contador: " + contador);
    contador++;
} 
*/

/* let contador = 6;
do{
    console.log("Valor de contador: "+contador);
    contador++;
}while(contador<5); */

// FOR
/* for(let contador = 0; contador <= 5; contador++){
    console.log("Valor de contador: "+contador);
} */
