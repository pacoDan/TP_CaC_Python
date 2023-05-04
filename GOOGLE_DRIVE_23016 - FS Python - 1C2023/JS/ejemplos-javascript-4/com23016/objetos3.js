// Objetos a partir de clases
class Animal {
    constructor(nombre, edad, vivo, color) {
        this.nombre = nombre
        this.edad = edad
        this.vivo = vivo
        this.color = color
    }
    caminar(){return this.nombre+ " camina"}
}
// Instanciamos dos objetos clase Animal:
var gato = new Animal("Lila", 4, true, "Blanco")
var elefante = new Animal("Dumbo", 30, false, "Gris")

// Mostramos alguna de sus propiedades y métodos
console.log(gato.nombre)
console.log(elefante.edad)
console.log(gato.caminar())
console.log(elefante.caminar())

//Modificamos propiedades
gato.nombre= "Michi"
elefante.edad = 20
console.log(gato) //Mostramos el objeto
console.log(elefante) //Mostramos el objeto
