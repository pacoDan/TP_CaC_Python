//Declaramos una función
function mostrarSuma(){
    console.log("La suma es:", 2+3)
    //... más instrucciones
}
//Funciones con uno o más parámetros
function saludar(nombre){
    console.log("Hola", nombre)
}
function saludarDos(nombre, apellido, edad){
    console.log("Hola", nombre, apellido)
    console.log("Tu edad es:", edad)
}
//Parámetros por defecto
function multiplicar(a, b=8){
    console.log(a*b)
}

//Funciones que devuelven valores
function sumar(a,b){
    let suma = a + b //variable local con alcance de función
    return suma //Devuelve el dato "hacia afuera" de la función
    console.log("...") //No se ejecuta
}
//Usar una variable en sustitución del nombre d ela función
var diferencia = function restar(numero1, numero2){
    return numero1 - numero2
}
// Funciones de tipo flecha (arrow =>)
function mitad(x){ //Función tradicional
    return x/2
}
var mitadA = x => x/2 //var variable = parámetro => valor de retorno

//Funciones anónimas
var triple = function(x){
    return x*3
}


//Programa principal
mostrarSuma() //Llamamos / invocamos a la función
console.log("Sigue...")
console.log(mostrarSuma) //Mostramos el contenido de la función
console.clear()

saludar("Juan Pablo")
var nom = "Rodrigo"
saludar(nom) //Reutilizamos la función
console.clear()
// var nombre = prompt("Ingrese su nombre:")
// var apellido = prompt("Ingrese su apellido:")
// var edad = parseInt(prompt("Ingrese su edad:"))
// saludarDos(nombre, apellido, edad)

multiplicar(5,2) //salida: 10
multiplicar(5) //salida: 40, si el parámetro "b" no se coloca asume que es 8

var resultado = sumar(12,5)
console.log("La suma es:", resultado)
var num1 = 3, num2 = 7
console.log("La suma es:", sumar(num1,num2))

console.log("Resultado de la resta:", diferencia(40,15))
//console.log("Resultado de la resta:", restar(40,15)) //Uncaught ReferenceError: restar is not defined
console.clear()

console.log("La mitad es (func. tradicional):", mitad(10)) //5
console.log("La mitad es (func. flecha):", mitadA(8)) //4

console.log(triple(4))
