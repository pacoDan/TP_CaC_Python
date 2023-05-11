/************** FOR IN Y FOR OF *****************/
document.write("<h1>FOR IN Y FOR OF</h1>")
document.write("<h2 class='subtitulo2'>FOR IN</h2>")
document.write("<p>Recorre las propiedades de un objeto, por ejemplo, un string o un array. En el for-in no tenemos que decirle como en el for “desde donde” ni “hasta donde” ni “el paso” porque directamente lo recorre de principio a fin y en la variable (i, por ejemlo) va guardando temporalmente cada una de las posiciones. <br>")
document.write("Más información: <a href='https://www.w3schools.com/jsref/jsref_forin.asp'>w3schools</a></p>")

document.write("<h4 class='subtitulo2'>Ejemplo con arrays:</h4>")

var array = ["a", "b", "c", "d"]
document.write("<p class='arreglo'>", array, "</p>")
for (let i in array) {
    document.write("pos ", i, ": ", array[i], "<br>") //Muestra posiciones y contenido
}

document.write("<h4 class='subtitulo2'>Ejemplo con objetos:</h4>")

var persona = {
    nombre: "Ana",
    apellido: "Paz",
    edad: 25
}
for (let x in persona) {
    document.write(x, ": ", persona[x], "<br>") //Muestra propiedades y contenido
}

document.write("<h2 class='subtitulo2'>FOR OF</h2>")
document.write("<p>Recorre los valores de un iterable. Por ejemplo una cadena (string) o arreglo (array), proporcionando acceso a cada uno de sus elementos. La sentencia for...of es específica para las colecciones. <br>")
document.write("Más información: <a href='https://www.w3schools.com/jsref/jsref_forof.asp'>w3schools</a></p>")

document.write("<h4 class='subtitulo2'>Ejemplo con cadeans:</h4>")

var cad = "Ejemplo de For of"
for (let letra of cad) {
    document.write(letra,"_")
}

document.write("<h4 class='subtitulo2'>Ejemplo con arrays:</h4>")

var nombres = ["Juan", "Ana", "Luis"]
for (let item of nombres) {
    document.write(item,"-")
}
document.write("<br>")

var numeros = [2, -4, 99]
for (let elem of numeros) {
    document.write(elem," ")
}