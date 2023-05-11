/************ FUNCIONES DE TIPO FLECHA ***************/

// // Función tradicional 
// function cuadrado(x){ 
//     return x**x
// }
// //Ejecución
// console.log(cuadrado(5))

// // Función Arrow: un parámetro
// var aCuadrado = x => x*x //Declaración
// console.log(aCuadrado(5)) //Ejecución

/*---------------------------------------------------------*/
// // Función tradicional 
// function sumar (num1,num2) {
//     return num1+num2
// } 
// console.log(sumar(4,6))

// // Función Arrow: dos parámetros
// var aSumar = (num1,num2) => num1+num2 //Declaración
// console.log(aSumar(5,7)) //Ejecución

/*---------------------------------------------------------*/
// // Función tradicional 
// function multiplicar (num1,num2) {
//     producto= num1*num2
//     return producto
// } 
// console.log(multiplicar(2,3))

// // Función Arrow: más de una línea
// var aMultiplicar = (num1,num2) => 
// {   
//     producto= num1*num2
//     return producto
// }
// console.log(aMultiplicar(6,7))

/* ¿CÓMO CONVERTIMOS UNA FUNCIÓN TRADICIONAL EN UNA FUNCIÓN FLECHA */
// function cubo(a){
//     return a*a*a
// }
// //Paso 1: Elimina la palabra "function" y coloca un = a la izquierda del nombre. Coloca la flecha entre el argumento y las llaves de apertura.
// cubo = (a) => {
//     return a*a*a
// }

// //Paso 2: Quita los llaves{} del cuerpo y la palabra "return" (el return está imimplícito).
// cubo = (a) => a*a*a

// //Paso 3: Suprime los paréntesis de los argumentos
// cubo = a => a*a*a

// console.log(cubo(3)) //27