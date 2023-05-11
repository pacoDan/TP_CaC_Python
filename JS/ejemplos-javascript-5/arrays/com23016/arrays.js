//Arrays: cómo se crean
var array = new Array("Juan", "Lucas", "Vanesa")
console.log(array)
var colores = ["rojo","verde","azul"]
console.log(colores)
var vacio = []
console.log(vacio)
var mixto = ["Juan", 36, true, undefined,"Calle 1234"]
console.log(mixto)

//Acceder a elementos
console.log(mixto[1]) //36
console.log(mixto[5]) //undefined

//Propiedad length
console.clear()
console.log(colores.length) //largo del array
console.log(colores[3]) //undefined
console.log(colores[colores.length-1]) //Accedemos a la última posición del array.