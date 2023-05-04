// Creamos el objeto a través del literales {}
var coche = {
    marca: 'Ford',
    tipo: 'Ranger',
    modelo: 2019,
    portaequipajes: true,
    caracteristicas: function(){
        return this.marca + " " + this.tipo + " (" + this.modelo + ")"
    }, //Función anónima
    caracteristicasDos(){
        return "Año: "+this.modelo+"\nMarca: "+this.marca+"\nNombre: "+this.tipo}
}

console.log(coche) //Imprimimos el objeto
console.log("Modelo:", coche.modelo)
console.log("Marca:", coche.marca)
console.log(coche.caracteristicas()) //Llamamos a un método
if (coche.portaequipajes == true){
    console.log("La",coche.marca,coche.tipo,"tiene portaequipajes")
}

// También podemos cambiar propiedades a través de corchetes [ ]
coche['marca'] = 'Renault'
coche['modelo'] = 2022

console.log(coche.caracteristicasDos())