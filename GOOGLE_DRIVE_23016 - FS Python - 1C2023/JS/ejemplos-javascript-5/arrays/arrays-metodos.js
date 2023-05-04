/************** METODOS PARA ARRAYS *****************/

document.write("<h1>Métodos para arrays</h1>")

/* .push(obj1, obj2...): Añade uno o varios elementos al final del array. Devuelve tamaño del array.*/
document.write("<h2 class='subtitulo'>PUSH</h2>")
document.write("<p>Añade uno o varios elementos al final del array. Devuelve tamaño del array.</p>")

var frutas = ["Banana", "Naranja", "Manzana", "Mango"]
document.write("<p class='arreglo'>", frutas, "</p>")
frutas.push("Kiwi", "Pera")
document.write(frutas, "<br>")
document.write("Tamaño del array agregando 'Durazno': ", frutas.push("Durazno"))

/* .pop(): Elimina y devuelve el último elemento del array.*/
document.write("<h2 class='subtitulo'>POP</h2>")
document.write("<p>Elimina y devuelve el último elemento del array.</p>")

document.write("<p class='arreglo'>", frutas, "</p>")
var frutaEliminada = frutas.pop() //No tiene argumentos
document.write(frutas, "<br>")
document.write("Fruta eliminada: ", frutaEliminada)

/*.unshift(obj1, obj2...): Añade uno o varios elementos al inicio del array. Devuelve tamaño del array.*/
document.write("<h2 class='subtitulo'>UNSHIFT</h2>")
document.write("<p>Añade uno o varios elementos al inicio del array. Devuelve tamaño del array.</p>")

var colores = ["Rojo", "Amarillo", "Verde", "Celeste"]
document.write("<p class='arreglo'>", colores, "</p>")
colores.unshift("Azul", "Naranja")
document.write(colores, "<br>")
document.write("Tamaño del array luego de agregar 'Azul' y 'Naranja': ", colores.unshift("Violeta"))

/*.shift(): Elimina y devuelve el primer elemento del array.*/
document.write("<h2 class='subtitulo'>SHIFT</h2>")
document.write("<p>Elimina y devuelve el primer elemento del array.</p>")

document.write("<p class='arreglo'>", colores, "</p>")
var colorEliminado = colores.shift() //No tiene argumentos
document.write(colores)
document.write("<br> Color eliminado: ", colorEliminado)

/* .concat(obj1, obj2...): Concatena los elementos (o elementos de los arrays) pasados por parámetro.*/
document.write("<h2 class='subtitulo'>CONCAT</h2>")
document.write("<p>Concatena los elementos (o elementos de los arrays) pasados por parámetro.</p>")

var ciudades = ["Roma", "Madrid"]
var masCiudades = ["Atenas", "Valencia"]
document.write("<p class='arreglo'>", ciudades, "<br>")
document.write(masCiudades, "</p>")
var todos = ciudades.concat(masCiudades, "Brasil") //Agrega al array ciudades loe elementos del array masCiudades
document.write(todos, "<br>")
todos = todos.concat("Buenos Aires", "Montevideo") //Sobreescribo el array todos con nuevos valores
document.write(todos)

/*.indexOf(obj, from): Devuelve la posición de la primera aparición de obj desde from.*/
document.write("<h2 class='subtitulo'>INDEXOF</h2>")
document.write("<p>Devuelve la posición de la primera aparición de obj desde from.</p>")

var letras = ["A", "B", "C", "D", "E", "B", "C"]
document.write("<p class='arreglo'>", letras, "<br>")
document.write("0 1 2 3 4 5 6 </p>")
var pos = letras.indexOf("B")
document.write("<p>B está en la posición: ", pos,"<br>")
pos = letras.indexOf("C", 4)
document.write("C está en la posición: ", pos, " (a partir de 4) </p>")

/*.lastIndexOf(obj, from): Devuelve la posición de la última aparición de obj desde from.*/
document.write("<h2 class='subtitulo'>LASTINDEXOF</h2>")
document.write("<p>Devuelve la posición de la última aparición de obj desde from.</p>")

document.write("<p class='arreglo'>", letras, "<br>")
document.write("0 1 2 3 4 5 6 </p>")
var pos2 = letras.lastIndexOf("B")
document.write("<p> B está en la posición: ", pos2, "<br>")
pos2 = letras.lastIndexOf("B",4)
document.write("B está en la posición: ", pos2, " (a partir de 4 hacia atrás) </p>")