var variable //declaro una variable
var variable2 = 3 //declaro otra variable
var variable3 = null
console.log(variable) // undefined: indefinida, no tiene un valor asociado
console.log(variable2) //3 (number)
console.log(variable3) //null

//Debilmente tipado: puedo cambiar el tipo de dato de la variable
var linea = "--------------------" 
console.log(linea)
var dato = 36
console.log(dato)
dato = "Juan"
console.log(dato)
dato = true
console.log(dato)
dato = (36 + 4) * 2
console.log(dato)

//Constantes
console.log(linea)
var IVA = 21 //¿QUÉ PASA SI CAMBIAMOS POR CONST?
console.log(IVA)
IVA = 10.5
console.log(IVA)

//Tipos de datos
console.log(linea)
var dato2 //undefined
console.log(typeof dato2)
dato2 = 5 //number
console.log(typeof dato2)
dato2 = "Pablo" //string
console.log(typeof dato2)
dato2 = false //boolean
console.log(typeof dato2)
dato2 = "Resultado: " + (36 + 4) * 2 //ojo, string!
console.log(typeof dato2)


