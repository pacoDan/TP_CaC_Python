// Creamos el objeto a través de new object
var vivienda = new Object()
// Creamos las propiedades
vivienda.calle = 'Av. Rivadavia'
vivienda.numero = 1234
vivienda.ambientes = 4
vivienda.mostrarDomicilio = function(){
    console.log("La vivienda está ubicada en:", vivienda.calle, vivienda.numero)
}

//Programa principal
vivienda.mostrarDomicilio() //Llamamos a un método
console.log("La vivienda tiene:", vivienda.ambientes,"ambientes") //Mostramos propiedades