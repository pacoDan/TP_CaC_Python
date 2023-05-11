/***********************SCOPE*********************/

//console.log(carName) // aca no puedo usar la variable carName
// function myFunction() {
//     var carName = "Volvo"
//     // aca si puedo usar la variable carName
//     console.log(carName)
// }
// myFunction()
//console.log(carName) // aca no puedo usar la variable carName

//Segundo ejemplo, pero con una variable a nivel global

// var carName2 = "Fiat"
// console.log(carName2) // aqui si puedo usar carName2

// function myFunction2() {
//     //aqui tambien puedo usar la variable carName2
//     console.log(carName2, "desde la función")
//     //También puedo cambiar su contenido
//     carName2 = "Renault"
//     console.log(carName2, "con un nuevo nombre!")
// }
// myFunction2()
// console.log(carName2,"fuera de la función") // uso la variable fuera de la función

//Tercer ejemplo: variable automáticamente global

// myFunction3() // aquí se puede usar carName3
// console.log(carName3)
// function myFunction3() {
//    carName3 = "Chevrolet"  // variable automáticamente global
//    console.log(carName3, "desde adentro de la función")
// }

// let vs var

var a = 5
var b = 10

if (a === 5) {
    let a = 4 // El alcance es dentro del bloque if
    var b = 15 // El alcance es global, sobreescribe a 10 ¿qué pasa si es let?

    console.log("a:", a)  // 4, por alcance a nivel de bloque
    console.log("b:", b)  // 15, por alcance global
}

console.log("a:", a) // 5, por alcance global
console.log("b:", b) // 15, por alcance global
