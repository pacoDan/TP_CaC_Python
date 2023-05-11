/************** ARRAYS *****************/

document.write("<h1>Arrays</h1>")

/*Acceso a elementos por posición y largo del array*/
document.write("<h2 class='subtitulo'>Acceso a elementos y largo del array</h2>")
var array = ["a", "b", "c", "d"] //0, 1, 2, 3: cantidad de elementos - 1
document.write("<p class='arreglo'>array: ", array, "</p>")
document.write("array[0]: ", array[0], "<br>")
document.write("array[2]: ", array[2], "<br>")
document.write("array[5]: ", array[5], "<br>")
document.write("Largo del array: ",array.length, "<br>") // 3
document.write("Último elemento: ", array[array.length-1], "<br>") //Accedemos al último elemento, ya que vector[array.length] daría indefinido porque arranca desde 0

var arrayVacio = [] 
document.write("Array vacio: ", arrayVacio, "<br>")

/*Acceder y mostrar elementos con for y while*/
document.write("<h2 class='subtitulo'>Acceder y mostrar elementos con for y while</h2>")
document.write("<h3 class='subtitulo2'>For</h3>")

var nombres = ["Juan", "Lucía", "Ana", "Luis"]
var notas = [8, 7, 10, 4]

document.write("<p class='arreglo'>Nombres: ",nombres,"<br>")
document.write("Notas: ",notas,"</p>")
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i], " ", notas[i],"<br>")
}
document.write("<h3 class='subtitulo2'>While</h3>")

cont = 0
while (cont < notas.length){
    document.write(nombres[cont], " ", notas[cont], "<br>")
    cont = cont + 1
}