/******************* STRINGS - MÉTODOS *******************/
var cad = "hola como estas"

document.write("<h2 class='cadena'>", cad, "</h2>")
document.write("Largo de la cadena: ", cad.length)
document.write("<br>")

/* .charAt(pos): Devuelve el carácter en la posición pos de la variable.*/

document.write("<p class='metodo'>CHARAT</p>")
document.write(cad.charAt(0)) // devuelve "h"
document.write("<br>")
var pos1= cad[1]
var pos2= cad[20]
document.write(pos1) //devuelve o
document.write("<br>")
document.write(pos2) //indefinido
document.write("<br>")

// /*.concat(str1, str2...): Devuelve el texto de la variable unido a str1, a str2...*/
document.write("<p class='metodo'>CONCAT</p>")
var nombre = "Luis"
var apellido = "Pérez"
document.write(cad.concat(" ",nombre," ", apellido,". ¿todo bien?")) 
document.write("<br>")

/*.indexOf(str): Devuelve la primera posición del texto str.
  .indexOf(str, from): Idem al anterior, partiendo desde la posición from.
  .lastIndexOf(str, from): Idem al anterior, pero devuelve la última posición.*/

document.write("<p class='metodo'>INDEXOF</p>")
document.write(cad, "<br>")
document.write("Posición de a: ", cad.indexOf("a")) // 3
document.write("<br>")
document.write("Posición de a (desde pos 4): ", cad.indexOf("a",4)) //13
document.write("<br>")
document.write("<p class='metodo'>LASTINDEXOF</p>")
document.write("Posición de o: ", cad.lastIndexOf("o")) //8
document.write("<br>")
document.write("Posición de o (desde pos 7): ", cad.lastIndexOf("o", 7)) //6 (de 7 para atrás)