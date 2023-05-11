/************** METODOS DE ORDENACION PARA ARRAYS *****************/

document.write("<h1>Métodos de ordenación para arrays</h1>")

var frutas = ["Banana", "Naranja", "Manzana", "Mango", "Kiwi", "Pera"]
document.write("Array original: <span class='arreglo'>", frutas, "</span>")

/*.reverse(): Invierte el orden de elementos del array.*/
document.write("<h2 class='subtitulo'>REVERSE</h2>")
document.write("<p>Invierte el orden de elementos del array.<br>")
document.write("Array invertido: <span class='arreglo'>", frutas.reverse(), "</span></p>")

/*.sort(): Ordena los elementos del array bajo un criterio de ordenación alfabética.*/
document.write("<h2 class='subtitulo'>SORT</h2>")
document.write("<p>Ordena los elementos del array bajo un criterio de ordenación alfabética.<br>")
document.write("Array ordenado: <span class='arreglo'>", frutas.sort(), "</span> </p>")
document.write("<p>Podemos combinar .sort() y reverse():<br>")
document.write("Array ordenado (z-a): <span class='arreglo'>", frutas.reverse(frutas.sort()), "</span></p>")

document.write("<h4 class='subtitulo'>USO DE SORT Y REVERSE CON ARRAYS DE NÚMEROS</h4>")

var edades = [23,45,19,40,78,52,30,90]
document.write("<p>Array original: <span class='arreglo'>", edades, "</p>")
document.write("<p>Array invertido (reverse): <span class='arreglo'>", edades.reverse(), "</p>")
document.write("<p>Array ordenado (sort): <span class='arreglo'>", edades.sort(), "</p>")
document.write("<p>Array ordenado (desc con reverse y sort): <span class='arreglo'>", edades.reverse(edades.sort()), "</p>")