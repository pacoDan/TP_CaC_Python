//Función constructora
function Persona(nombre, apellido, domicilio) {
    this.nombre = nombre
    this.apellido = apellido
    this.domicilio = domicilio
}

//Creamos objetos
var persona1 = new Persona('Ana','Fernández', 'Av. Rivadavia 1234')
//Creamos el objeto persona
var persona2 = new Persona('Juan','Pérez', 'Uriarte 36')
console.log(persona1.nombre,"vive en:",persona1.domicilio)
console.log(persona2.nombre,"vive en:",persona2.domicilio)