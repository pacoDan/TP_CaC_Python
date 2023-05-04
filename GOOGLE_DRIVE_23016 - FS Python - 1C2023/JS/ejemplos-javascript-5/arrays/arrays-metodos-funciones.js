/************** METODOS PARA ARRAYS CON FUNCIONES *****************/

document.write("<h1>Métodos para arrays con funciones</h1>")
document.write("<p class='arreglo'>Estos métodos aplican una función definida para cada elemento del array. El método llama a la función (cb: callback) a aplicarse en cada ítem.</p>")

var frutas = ["Banana", "Naranja", "Manzana", "Mango"]

/*.forEach(cb, arg): Realiza la operación definida en cb por cada elemento del array.*/
document.write("<h2 class='subtitulo'>FOREACH</h2>")
document.write("Realiza la operación definida en cb por cada elemento del array. <br>")
document.write("<p class='arreglo'>", frutas, "</p>")

function mostrar(elemento, indice) {
    document.write(indice + ": " + elemento + "<br>")
}
frutas.forEach(mostrar)

/*.every(cb, arg): Comprueba si todos los elementos del array cumplen la condición de cb.*/
document.write("<h2 class='subtitulo'>EVERY</h2>")
document.write("Comprueba si todos los elementos del array cumplen la condición de cb. <br>")

function compruebaEdad(edad) {
    return edad >= 18
}

var edades = [32, 33, 16, 40]
var edades2 = [32, 33, 20, 40]
document.write("<p class='arreglo'> Edades: ", edades, "<br>")
document.write("Edades2: ", edades2, "</p>")

document.write("Todos mayores en arreglo Edades?: ", edades.every(compruebaEdad), "<br>")//false
document.write("Todos mayores en arreglo Edades2?: ", edades2.every(compruebaEdad), "<br>")//true

/*.some(cb, arg): Comprueba si al menos un elemento del array cumple la condición de cb.*/
document.write("<h2 class='subtitulo'>SOME</h2>")
document.write("Comprueba si al menos un elemento del array cumple la condición de cb. <br>")

function compruebaNombre(nombre) {
    return nombre == "Lucas"
}

var nombres = ["Juan", "Mateo", "Camilo", "Lucas"]
var nombres2 = ["Juan", "Ana", "Luisa", "Mateo", "Camilo"]
document.write("<p class='arreglo'> Nombres: ", nombres, "<br>")
document.write("Nombres2: ", nombres2, "</p>")

document.write("Algún Lucas en arreglo Nombres?: ", nombres.some(compruebaNombre),"<br>")//true
document.write("Algún Lucas en arreglo Nombres2?: ", nombres2.some(compruebaNombre),"<br>")//false

/* .map(cb, arg): Construye un array con lo que devuelve cb por cada elemento del array.*/
document.write("<h2 class='subtitulo'>MAP</h2>")
document.write("<p>Construye un array con lo que devuelve cb por cada elemento del array. <br>")

var numeros = [4, 9, 16, 25]
document.write("<p class='arreglo'> Numeros: ", numeros, "</p>")

function raizCuadrada(numero) {
    return Math.sqrt(numero)
}
function potencia(numero) {
    return numero*numero
}
function dobles(numero) {
    return numero+numero
}

document.write("Raiz cuadrada: ", numeros.map(raizCuadrada), "<br>")
document.write("Potencia: ", numeros.map(potencia), "<br>")
document.write("Dobles: ", numeros.map(dobles), "<br>")

/*.filter(cb, arg): Construye un array con los elementos que cumplen el filtro de cb.*/
document.write("<h2 class='subtitulo'>FILTER</h2>")
document.write("Construye un array con los elementos que cumplen el filtro de cb. <br>")

function personasComiezaEnP(persona) {
    return persona[0] == "P"
}

var personas = ["Ana", "Pablo", "Pedro", "Paola", "Horacio"]
document.write("<p class='arreglo'> Personas: ", personas, "</p>")
document.write("Personas que comienzan con P: ", personas.filter(personasComiezaEnP), "<br>")

/*.findIndex(cb, arg): Devuelve la posición del elemento que cumple la condición de cb.*/
document.write("<h2 class='subtitulo'>FIND INDEX</h2>")
document.write("Devuelve <b>la posición</b> del elemento que cumple la condición de cb. <br>")

function compruebaMenorEdad(edad) {
    if (edad < 18) {
        return edad
    }
}
var edades3 = [30, 19, 10, 28]
document.write("<p class='arreglo'> Edades: ", edades3, "</p>")
document.write("Posición menor de edad: ", edades3.findIndex(compruebaMenorEdad), "<br>")

/*.find(cb, arg): Devuelve el elemento que cumple la condición de cb.*/
document.write("<h2 class='subtitulo'>FIND</h2>")
document.write("Devuelve <b>el elemento</b> que cumple la condición de cb. <br>")

function compruebaMenorEdad(edad) {
    if (edad < 18) {
        return edad
    }
}
var edades4 = [25, 24, 19, 10, 28]
document.write("<p class='arreglo'> Edades: ", edades4, "</p>")
document.write("Edad del menor de edad: ", edades4.find(compruebaMenorEdad), "<br>")

/*.reduce(cb, arg): Ejecuta cb con cada elemento (de izq a der), acumulando el resultado.*/
/*.reduceRight(cb, arg): Idem al anterior, pero en orden de derecha a izquierda.*/
document.write("<h2 class='subtitulo'>REDUCE Y REDUCERIGHT</h2>")
document.write("<p><b>Reduce:</b> Ejecuta cb con cada elemento (de izq a der), acumulando el resultado. <br>")
document.write("<b>Reduce Right:</b> Idem al anterior, pero en orden de derecha a izquierda. </p>")
function restaPrecios(total, p) {
    return total - p
}
var precios = [110, 10, 25, 50, 15]
document.write("<p class='arreglo'> Precios: ", precios, "</p>")
document.write("Reduce: ", precios.reduce(restaPrecios), "<br>")
document.write("Reduce right: ", precios.reduceRight(restaPrecios), "<br>")