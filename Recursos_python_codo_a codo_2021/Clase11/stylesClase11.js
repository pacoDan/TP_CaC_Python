/*console.log("Estoy logueando!");
console.error("logueo un error");
console.warn("advertencia");
console.info("logueo info");

console.clear();

////////////////////////////////////////
let palabraLarga = "hoy es un de dia ";

let cantidadCaracteres = palabraLarga.length;
console.log("la cantidad de ca es: " + cantidadCaracteres);

let empanada12Veces = palabraLarga.repeat(12);
console.log(empanada12Veces);

let saludoNocturno = palabraLarga.replace("dia" , "noche");
console.log(saludoNocturno);
*/

//////////////OPERADORES ARITMETICOS///////
/*
let nume1= 2;
let nume2 = 4;

// pueden sumar , restar , mulit * , dividir /
console.log(nume1+nume2);
*/
let x = 1;
//x = x+1;//2
/*x++;//aca vale 2
x--;//aca vuelve a valer 1
console.log("x vale: " + x);*/
/*
//console.log("x vale : " + x+1);//concatena string
console.log("x vale : ", --x);
console.log("y ahora vale ", x);

//////////OPERADORES DE ASIGNACION*/////////

let n = 2;
//quiero incrementar en 5 la variable n
//n = n+5;
/*
n+=5; // es lo mismo que n = n+5;
console.log(n);

 n-=1;      //n = n-1;
//multiplicarle a n * 9;
n*=9;     //n = n*9;

//dividir n /9
n/=9;//    n=n/9;

//modulo de n sobre 3
n%=3;      n=n%3;

let variable = "kskdsldjsd";

///////////operador typeOf
console.log(typeof variable);



/////////////////////
////OPERADORES LOGICOS//////////
//quiero que la persona haya pagado y sea mayor

//   &&  LAS DOS condiciones deben ser true
if (pagoLaCuota && esMAYOR){//TRUE
    dejarverPeli();
}

//operador or
if (pagoCuota ||  tienePromo){//true
    dejarverPeli();
}

//algoritmo de instgram
let estaBloqueada = true;

//
if (estaBloqueada || esMenor){
    dejarUsarInsta();
}


let b = 9;
b==9;//devuelve true
b==8;//devuelve false
b!=8;//devuelve true
b!9;//devuelve false

*/
/*
if("a"!="a"){
    console.log("se ejecuta lo primero");
    }else{
        console.log("se ejecuta lo segundo");
    }
*/

/* crear un algoritmo que defina si juan es mayor , 
menor , o igual a jose;
*/
/*
let joseEdad=99;
let juanEdad=10;


if(joseEdad>juanEdad){//true
    console.log("jose es mas grande");
}else if(juanEdad>joseEdad){
    console.log("juan es mas grande");
}else{
    console.log("los dos tienen la misma edad");
}

//switch
let numero = 65462;

switch(numero){
    case 1:
        console.log("metio el 1");
        break;
    case 2:
        console.log("metio el 2");
        break;
    case 3:
        console.log("metio el 3");
        break;
    default:
        console.log("no metio ni 1 , ni 2 ni 3");
}
*/

/* Hacer una calculadores que ingrese datos
el usuario
tenga un menu de opciones para ver que 
operacion realizar
y devuelva los datos en Float */

let numb1 = parseFloat(prompt("Mete el primer numero:"));
let numb2 = parseFloat(prompt("Mete el segundo numero:"));

let operacion = parseInt(prompt("Introduzca que operacion quiere realizar: \n 1:Suma \n2:Resta \n3:Mult \n4:Division"));

switch (operacion){
    case 1:
        let suma = numb1+numb2;
        console.log("la suma es : " + suma);
        break;
    case 2:
        let resta = numb1-numb2;
        console.log("la resta es : " + resta);
        break;
    case 3:
        let multi = numb1*numb2;
        console.log("la multi es : " + multi);
        break;
    case 4:
        let divi = numb1/numb2;
        console.log("la division es : " + divi);
        break;

    default:
        console.log("Mandaste cualquier cosa");

}
*/





