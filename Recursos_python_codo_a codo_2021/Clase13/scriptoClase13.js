//definir arrays
//1ra forma
/*let primeraForma = ["emi", "jose", 123, true, [12,23]];
console.log(primeraForma[4]);

//segunda manera definir vectores/arreglos/arrays
let segundaForma = new Array("emi","jose",1,2,3);

//tercera forma
let terceraManeraSaleMal = new Array();
terceraManeraSaleMal[0]="emi";
terceraManeraSaleMal[1]="jose";
terceraManeraSaleMal[2]="juan ";
terceraManeraSaleMal[3]="ana";
console.log(terceraManeraSaleMal);

console.log(terceraManeraSaleMal.sort());
console.log("el primer nombre  es :" , terceraManeraSaleMal[0]);

console.log("el ultimo nombre es: " , terceraManeraSaleMal[terceraManeraSaleMal.length-1]);


///////////////ejemplo con numeros///////
let miArray = [3,5,10,45,11,90,9];
//console.log(miArray.sort());

miArray.sort(function(a,b){
    return a-b;
})
console.log(miArray);
*/
/*
let tercerVector = new Array();
tercerVector[0]="emi";
tercerVector[1]="jose";
tercerVector[2]="juan ";
tercerVector[3]="ana";
console.log(tercerVector);

//PUSH  agregamos al final
tercerVector.push("rocio");
console.log(tercerVector);

//unshift   agregan al principio
tercerVector.unshift("pipo");
console.log(tercerVector);

//join convierte en string
console.log("imprimiendo como string" , tercerVector.join("\n"))

//borrar al principio y al final
//borrar al primer elemento
//tercerVector.shift();
console.log(tercerVector);

//borrar ultimo elemento
//tercerVector.pop();
console.log(tercerVector);

////////////////////////////////////////
////SPLICE
//tercerVector.splice(1,2);
console.log(tercerVector);
tercerVector.splice(1,0,"josefa","virginia");
console.log(tercerVector);

//splice
//1er elemento ubicacion
//2do parametro cuantos borras
//3ro   los que agregas
/*
let unArray = [1,2,3];
let otroArray = [4,5,6];
console.log(unArray.concat(otroArray));
console.log(unArray);

//crear otro vector con los dos arrays /
//[1,2,3,4,5,6]
//unArray.push(otroArray);
//console.log(unArray);

/////////CONCAT//////////////
//tienen que crear otro array
/*let concatenado = unArray.concat(otroArray);
console.log(concatenado);*/

///////////////////////////////////////////////////
//////METODOS DE LOS STRINGS

//includes
//algoritmo basico BASICO para ver si el mail esta bien
let email = "mailFalso@gmail.com";
if(email.includes("@")){
    console.log("es un mail valido");
}else{
    console.log("no es valido");
}


/////TRIM
let nombreUsuario = "        jose    ";
console.log(nombreUsuario.trim());

///Substring
let cortarTexto="Vamos a cortar este texto";
console.log(cortarTexto.substring(4,5));


//split
let texto = "juan carlos batman";
console.log(texto.split(" "));


////////////////////////////////////////
////////////////////////////////////
/*
//tipos de funciones
//1declarativa
function sumar (a,b){
    return a+b;
}

//2 tipo   funcion expresiva
let suma1= function(a,b){
    return a+b;
}


//funcion flecha o ARROW FUNCTIONS
let suma2 = (a,b) =>{
    return a+b;
}*/


//FOREACH
let arr = [1,2,3,4,5,6];

arr.forEach(function(element, index, arreglo){
    console.log(element);

})

//arrow
arr.forEach(elemento => {
    console.log(elemento);
})


//////every  & some
const numeros = [8,13,50,45,56,98,100]
//todos son menores a 100?
console.log(numeros.every( (n)=> n<10));

console.clear();

/////MAP
//A partir de un array de pares , crear uno de impares
const pares = [2,4,6,8,10];

let impares = pares.map((numero)=>numero+1);
console.log(impares);


//un numero y al lado el multiplicado *2
const multiplicadoPor2 = pares.map(item => [item, item*2]);
console.log(multiplicadoPor2);



////find

let peliculas = ["el padrino", "pulp fiction","soul"];

let puplFiction = peliculas.find(peliculas=>{
    return peliculas.includes("pulp");
})
console.log(puplFiction);

////filter

let number =[123,234,345,456];
let big =  number.filter(x => x>200);
console.log(big);



//REDUCE
//HACE UNA operacion y devuelve UN SOLO NUMERO

const sumaCarrito = [1,2,3];

let reducido = sumaCarrito.reduce((acumulador, elemento)=> acumulador+elemento ,100 )
console.log(reducido);