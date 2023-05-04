/******************* STRINGS - MÁS MÉTODOS */

var cad= "Aprendiendo JavaScript "
document.write("<h2 class='cadena'>", cad, "</h2>")

/*.repeat(n) : Devuelve el texto de la variable repetido n veces.*/
document.write("<p class='metodo'>REPEAT</p>")
document.write(cad.repeat(4)) // repite 4 veces
document.write("<br>")
document.write("*".repeat(10)) // repite 10 veces un string
document.write("<br>")
var guion = "- "
document.write(guion.repeat(5)) // repite 5 veces un string
document.write("<br>")

/*.toLowerCase(): Devuelve el texto de la variable en minúsculas.
  .toUpperCase(): Devuelve el texto de la variable en mayúsculas.*/

document.write("<p class='metodo'>TOLOWERCASE</p>")
document.write(cad.toLowerCase()) // pasa a minúsculas
document.write("<br>")
document.write("<p class='metodo'>TOUPPERCASE</p>")
document.write(cad.toUpperCase()) // pasa a mayúsculas
document.write("<br>")

/*.trim(): Devuelve el texto sin espacios a la izquierda y derecha.*/

console.log("********* TRIM *********")
document.write("<p class='metodo'>TRIM (ver consola)</p>")

var cad2= "       Texto de ejemplo     "
console.log(cad2 + "mas texto") //cadena de texto
console.log(cad2.trim() + " mas texto")

/*.replace(str, newstr): Reemplaza la primera aparición del texto str por newstr.*/
document.write("<p class='metodo'>REPLACE</p>")
document.write(cad, "<br>")
document.write(cad.replace("JavaScript", "Python"))
document.write("<br>")

/*.substr(ini, len): Devuelve el subtexto desde la posición ini hasta ini+len. (en desuso)*/
document.write("<p class='metodo'>SUBSTR</p>")
document.write(cad.substr(12, 4)) //Inicia en 12 y desde allí muestra 4 caracteres
document.write("<br>") //Método en desuso, se aconsehja usar substring

/*.substring(ini, end): Devuelve el subtexto desde la posición ini hasta end.*/
document.write("<p class='metodo'>SUBSTRING</p>")
document.write(cad.substring(1, 4)) //Desde 1 hasta 4 (no inclusive)
