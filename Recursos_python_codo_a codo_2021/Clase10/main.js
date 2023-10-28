//esto es un comentario

/*
*estto es comentairo 
multilinea
*/

/*Todas son variables admitidas */

//Incorrectaas:
/*
let 1erNombre;
let computadora-nueva;
let super;
*/

console.log("----var  , let y const------");

let   nombre = "Miguel";
 
let  edad = 21;

console.log("Tengo: " + edad  + " y me llamo " + nombre);

console.log(typeof edad);

/**Strings */
let str1 = "string con comillas";
let str2 = 'string con comillas simpres';
let str3 = `String con bactik`;

let str4 = str1 + str2;
console.log(str4);
let str5 = `${str1} y ademas dice ${str2}`;
console.log(str5);

//number
let num1=1;
let num2 = 10.2;
let num3 = -3.14;

let numero1=3;
let numero2="5";
let numero3 = "tres";

console.log(numero1 * numero3);


let valor1 = 2;
let valor2 = 3;

//operaciones basicas
let suma = valor1+valor2;
let resta = valor1-valor2;
let multi = valor1 * valor2;
let div = valor1 / valor2; 

console.log(multi);

//valores booleanos
let verdad = true;
let falsedad = false;

let esMayor = valor1<valor2;
console.log(esMayor);


//valor null

let cuotaAnioQueViene = null;
console.log(cuotaAnioQueViene);



/*
let numeroUsuario = prompt("chabona , mete un numero: ");
let numeroUsuario2  = prompt("chabona , mete otro numero: ");

sumaChabona = numeroUsuario + numeroUsuario2;
alert("la suma es " +sumaChabona);*/

//escriben en el html
document.write("<h2> Subtitlo con Js </h2>");


//funciones de los strings

let muchosNumeros = "654321565123";
console.log("el tamanio es: " + muchosNumeros.length);

let repetirAlgo= "bla ";
console.log(repetirAlgo.repeat(20));

let saludo = "Hola , buendi";
console.log(saludo.replace("Hola", "nosvimos!!"));



