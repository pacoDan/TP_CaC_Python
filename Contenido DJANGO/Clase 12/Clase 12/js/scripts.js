let s = "Hola"; // s, de string
let b = false;  // b, de booleano
let u;          // u, de undefined
let num1 = 3,num2 = 4,num3 = 5;

const CONSTANTE = "Texto";
console.log(CONSTANTE);

console.log(typeof s);    // "string"
console.log(typeof num1); // "number"
console.log(typeof b);    // "boolean"
console.log(typeof u);    // "undefined"
console.log("Valor de u: ",u);

console.log(Math.sqrt(10));              //Raíz cuadrada de 10

let rango = 10;
let randomNumber = Math.random();        //Se genera un número entre 0 y 1
randomNumber = randomNumber * rango;     //Al multiplicar por el rango, se expande
randomNumber = Math.floor(randomNumber); //Se redondea, para conseguir un entero
console.log(randomNumber);

let randomNumber2 = Math.random(); 
console.log(Math.floor(randomNumber2*rango)); //Equivalente al ejemplo anterior
