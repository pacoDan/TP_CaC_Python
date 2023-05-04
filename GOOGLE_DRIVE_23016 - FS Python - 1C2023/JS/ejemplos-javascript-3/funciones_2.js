/************ FUNCIONES DE 1 PARAMETRO ***************/

// Ejemplo 1: función para saludar al usuario

// // Declaración
// function saludarUsuario(miNombre){
//     console.log("Hola " + miNombre) //Contenido de la función
// }

// // Ejecución
// saludarUsuario("Juan Pablo") //Argumento fijo
// var nombre = prompt("Ingrese su nombre") //Pedimos valores
// saludarUsuario(nombre) //Argumento variable

// ----------------------------------------------------------
// Ejemplo 2: tabla de multiplicar hasta cierto número

// Declaración
// function tablaMultiplicar(hasta) {
//     for (let i = 1; i <= hasta; i++)
//         console.log("4 x", i, "=", 4 * i)
// }

// //Ejecución
// tablaMultiplicar(10)

// -------------------------------------------------------
// Ejemplo 3: tabla de multiplicar de cierto número

// // Declaración
// function tablaMultiplicarDos(tabla) {
//     console.log("Tabla del:", tabla)
//     for (let i = 1; i <= 10; i++) {
//         console.log(tabla + " x " + i + " = " + tabla * i)
//     }
// }

// //Ejecución
// tablaMultiplicarDos(2) //Tabla del 2
// var t = Number(prompt("Ingrese un valor:")) // Pedimos un valor
// tablaMultiplicarDos(t)