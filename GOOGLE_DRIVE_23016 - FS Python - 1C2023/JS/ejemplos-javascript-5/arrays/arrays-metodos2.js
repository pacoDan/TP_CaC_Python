/************** OTROS METODOS PARA ARRAYS *****************/
document.write("<h1>Otros métodos para arrays</h1>")

var animales = ['araña', 'buey', 'caballo', 'elefante', 'perro']

/*slice(inicio, final) retorna la copia de un arreglo desde el índice inicio hasta final, excluyendo el final. No modifica el arreglo original.*/
document.write("<h2 class='subtitulo'>SLICE</h2>")
document.write("<p>Retorna la copia de un arreglo desde el índice inicio hasta final, excluyendo el final. No modifica el arreglo original. <br>")
document.write("Sintaxis: <i>array.slice(start, end)</i> <br>")
document.write("Más información: <a href='https://www.w3schools.com/jsref/jsref_slice_array.asp'>w3schools</a> y <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'>developer.mozilla</a></p>")

document.write("<p class='arreglo'>", animales, "</p>")
document.write("<ul>")
document.write("<li><b>animales.slice(2): </b> Desde 2 en adelante: ", animales.slice(2),"</li>")
document.write("<li><b>animales.slice(2, 4): </b> Desde 2 hasta 4 (no inclusive): ", animales.slice(2, 4),"</li>")
document.write("<li><b>animales.slice(1, 5): </b> Desde 1 hasta 5 (no inclusive): ", animales.slice(1, 5),"</li>")
document.write("<li><b>animales.slice(-2): </b> Los últimos 2: ", animales.slice(-2),"</li>")
document.write("<li><b>animales.slice(1,-1): </b> Desde 1 hasta el anteúltimo: ", animales.slice(1,-1),"</li>")
document.write("<li><b>animales.slice(): </b> Todos los elementos: ", animales.slice(),"</li>")
document.write("</ul>")

/*splice realiza operaciones sobre el arreglo, modificándolo. Es muy versátil, y permite tanto quitar elementos como agregarlos*/
document.write("<h2 class='subtitulo'>SPLICE</h2>")
document.write("<p>Realiza operaciones sobre el arreglo, modificándolo. Es muy versátil y permite tanto quitar elementos como agregarlos. <br>")
document.write("Sintaxis: <i>array.splice(index, howmany, item1, ....., itemX)</i> <br>")
document.write("Más información: <a href='https://www.w3schools.com/jsref/jsref_splice.asp'>w3schools</a> y <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'>developer.mozilla</a></p>")

var meses = ['Enero', 'Marzo', 'Abril', 'Otoño', 'Junio']
document.write("<p class='arreglo'>", meses, "</p>")

document.write("<ul>")
meses.splice(1, 0, 'Febrero')
document.write("<li><b>meses.splice(1, 0, 'Febrero'): </b> Agrega 'Febrero' en posición 1: ", meses,"</li>")
meses.splice(4, 1, 'Mayo')
document.write("<li><b>meses.splice(4, 1, 'Mayo'): </b> Reemplaza 1 elemento en el índice 4: ", meses,"</li>")
meses.splice(2, 1, "Octubre", "Noviembre")
document.write("<li><b>meses.splice(2, 1, 'Octubre', 'Noviembre'): </b> En la posición 2 agrega 2 elementos y elimina 1: ", meses,"</li>")
document.write("</ul>")

//NOTA: EN CASO DE QUE EL EJEMPLO NO FUNCIONE CERRAR EL NAVEGADOR Y VOLVER A ABRIR