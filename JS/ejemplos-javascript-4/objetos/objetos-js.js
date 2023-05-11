var objeto = {} //objeto vacío
var persona = {
    nombre: "Juan Pablo",
    apellido: "Nardone",
    edad: 36,
//Creamos un método
//La variable nombreCompleto guarda el resultado de la función anónima 
nombreCompleto: function () {
    return this.apellido + ", " + this.nombre
    //El string devuelve información del propio objeto
},
//Otro método, para determinar si es mayor de edad
esMayor: function (){
    if (this.edad >= 18){
        return true
    }
    else{
        return false
    }
}
}

//Accedemos a las propiedades del objeto
console.log(persona) //imprimimos el objeto
console.log(persona.nombre) //imprimimos una propiedad
console.log(persona.nombreCompleto())
if (persona.edad >= 18){
    console.log(persona.nombre, "es mayor de edad")
}
else{
    console.log(persona.nombre, "NO es mayor de edad")
}
console.log("Es mayor?:",persona.esMayor())

//Cambiamos propiedades del objeto
persona.nombre = "Pedro"
console.log(persona.nombre)

//Otra forma de crear objetos y añadir propiedades
var animal = {}
animal.tipo = "Gato"
animal.nombre = "Coco"
animal.edad = 6

console.log(animal)
console.log(animal.nombre,"es un",animal.tipo,"de",animal.edad,"años")

//Función constructora (cuando tengo que armar más de un objeto de la misma clase)
function Automovil(marca, nombre, modelo){
    this.marca = marca
    this.nombre = nombre
    this.modelo = modelo
}
var auto1 = new Automovil("Fiat", "Uno", 2002)
var auto2 = new Automovil("Chevrolet", "Astra", 2006)
console.log(auto1)
console.log(auto2.marca)

console.log("*********** FOR IN *********")
for (x in animal){
    console.log(x + ": " + animal[x])
}
