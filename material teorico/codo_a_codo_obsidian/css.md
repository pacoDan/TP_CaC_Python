### 1. Introducción a CSS

**Introducción a CSS**

CSS es el segundo lenguaje más básico y esencial para crear páginas web.

El primero sería HTML, con el que se define el contenido de la página.

El segundo CSS, con el que se define la parte de la presentación (estilo), es decir, cómo deben mostrarse los elementos de la página, su posición, forma, espaciados, colores y en resumen, toda la parte estética.

CSS (siglas en inglés de _Cascading Style Sheets_) es un lenguaje que consiste en una serie de elementos mediante los cuales se declaran los estilos, básicamente éstos son los más importantes:

Selectores, mediante los cuales podemos especificar a qué elementos de la página nos estamos refiriendo

Atributos de estilo para definir qué cosas queremos estilizar sobre los selectores indicados

Una serie de valores, que indican qué estilo se debe aplicar a cada atributo sobre cada selector.

Los valores se expresan con unidades CSS, que sirven para cuantificar los valores (píxeles, puntos, etc.).

Aprender CSS no es difícil, pero cuando se usa profesionalmente se deben tener en cuenta muchos detalles y buenas prácticas, como la organización del código, la reutilización, la optimización, etc.}

**Separar el código CSS del código HTML**

El enfoque de CSS es servir para definir la capa de presentación, es decir, la parte relacionada con el aspecto. Es algo que cualquier estudiante suele tener claro cuando está aprendiendo CSS, ya que al enseñar HTML probablemente se haya insistido, pero que siempre conviene reforzar.

En el código HTML colocamos el contenido, es decir, qué debe visualizarse, mientras que con CSS definimos la presentación, es decir, cómo debe visualizarse. Esto nos lleva a una serie de usos de CSS que debemos de respetar como buenas prácticas.

Lo adecuado cuando trabajamos con CSS es escribir el código en ficheros independientes, que tendrán extensión .css.

No conviene colocar código CSS por tanto dentro de archivos HTML. Debemos evitar colocar estilos en etiquetas <style> dentro del propio código HTML.

Por supuesto, mucho menos aconsejable es colocar estilos en los atributos "style" de las etiquetas HTML.

La aparición de CSS 3 sólo se materializó en el año 2014 con el movimiento de HTML 5. Vino a aportar soluciones a la mayoría de las necesidades de los diseñadores y a permitir finalmente cubrir el objetivo principal del lenguaje, la separación del contenido de la presentación. No obstante cabe decir que CSS 3 se presentó por medio de un nutrido grupo de especificaciones, que han sido mejoradas con el transcurso del tiempo, por lo que no es tanto un lanzamiento puntual, sino una continua mejora del estándar a diversos niveles.

**Usos de las CSS**

Hemos denominado a este apartado los diferentes usos de las CSS y relata justamente eso, los distintos niveles a los que podemos usar las Hojas de Estilo, que van desde definir los estilos de manera específica, para un pequeño fragmento de una página, hasta los estilos para todo un sitio web completo.

Para definir estilos en secciones reducidas de una página se puede utilizar el atributo style en la etiqueta sobre la que queremos aplicar estilos.

Como valor de ese atributo indicamos en sintaxis CSS las características de estilos.

Lo vemos con un ejemplo, pondremos un párrafo en el que determinadas palabras las vamos a visualizar en color verde.

<p>

Esto es un párrafo en varias palabras <span style="color:green">en color verde</span>. resulta muy fácil.

</p>

Nota: la etiqueta <span> del HTML quizás no sea tan conocida como otras. Es una etiqueta que, por sí sola, no tiene ninguna representación en la página. Es muy habitual usarla justamente para lo que hemos hecho en el anterior ejemplo, separar partes del contenido de texto de una etiqueta, para aplicar estilos determinados a esa parte de dentro de la etiqueta.

**Estilo definido para una etiqueta**

De este modo podemos hacer que toda una etiqueta muestre un estilo determinado. Por ejemplo, podemos definir un párrafo entero en color rojo y otro en color azul. Para ello utilizamos el atributo style, que es admitido por todas las etiquetas del HTML.

Nota: este uso de las CSS podríamos decir que es en realidad el mismo que el anterior. Solo que la etiqueta es de bloque y no una etiqueta inline (en línea) como <span>.

<p style="color:#990000">

Esto es un párrafo de color rojo.

</p>

<p style="color:#000099">

Esto es un párrafo de color azul.

</p>

**Estilo definido en una parte de la página**

Con la etiqueta <div> podemos definir secciones de una página y aplicarle estilos con el atributo style, es decir, podemos definir estilos de una vez a todo un bloque de la página.

El uso de la etiqueta div es englobar partes de un documento HTML para que podamos aplicar estilos a todo el grupo de etiquetas, como el posicionamiento, color, borde, tamaño de letra, etc.

<div style="color:#000099; font-weight:bold">

<h3>Estas etiquetas van en <i>azul y cursiva</i></h3>

<p>

Seguimos dentro del DIV, luego permanecen los estilos

</p>

</div>

Hasta aquí hemos visto los usos de las CSS más específicas, que se consiguen usando el atributo style en la etiqueta. Realmente todos los usos anteriores eran el mismo, pero el enfoque era distinto ya que las etiquetas del HTML que hemos usado tienen distintos alcances. Sin embargo, hay otras formas más avanzadas de usar las CSS, que deberías tener en cuenta porque son todavía más versátiles y recomendadas.

**Estilo definido para toda una página**

Podemos definir, en la cabecera del documento, estilos para que sean aplicados a toda la página. Es una manera muy cómoda de darle forma al documento y muy potente, ya que estos estilos serán seguidos en toda la página y nos ahorraremos así, generar mayor cantidad de etiquetas HTML colocando el atributo style.

Es común que los estilos declarados se quieran aplicar a distintas etiquetas dentro del mismo documento.

La aplicación de estilos para toda la página, se utiliza para escribir los estilos una vez y usarlos en un número indefinido de etiquetas. Por ejemplo podremos definir el estilo a todos los párrafos una vez y que se aplique igualmente, sea cual sea el número de párrafos del documento. Por último, también tendremos la ventaja que, si más adelante deseamos cambiar los estilos de todas las etiquetas, lo haremos de una sola vez, ya que el estilo fue definido una única vez de manera global.

**Estilo definido para todo un sitio web**

Una de las características más potentes del desarrollo con hojas de estilos es la posibilidad de definir los estilos de todo un sitio web en una única declaración.

Esto se consigue creando un archivo donde tan sólo colocamos las declaraciones de estilos de la página y enlazando todas las páginas del sitio con ese archivo. De este modo, todas las páginas comparten una misma declaración de estilos, reutilizando el código CSS de una manera mucho más potente.

Este es el modelo más ventajoso de aplicar estilos al documento HTML y por lo tanto el más recomendable. De hecho, cualquier otro modo de definir estilos no es considerado una buena práctica y lo tenemos que evitar siempre que se pueda.

Las ventajas de este modelo de definición de estilos son las siguientes:

Se ahorra en líneas de código HTML, ya que no tenemos que escribir el CSS en la propia página (lo que reduce el peso del documento y mejora la velocidad de descarga).

Se mantiene separado correctamente lo que es el contenido (HTML) de la presentación (CSS), que es uno de los objetivos de las hojas de estilo.

Se evita la molestia de definir una y otra vez los estilos con el HTML y lo que es más importante, si cambiamos la declaración de estilos, cambiarán automáticamente todas las páginas del sitio web.

Esto es una característica muy deseable, porque aumenta considerablemente la facilidad de mantenimiento del sitio web. Si en cualquier momento se desea cambiar el contenido, no tenemos que preocuparnos por los estilos y viceversa, si queremos cambiar el aspecto del sitio web, no necesitamos preocuparnos ni andar editando el contenido.

**Incluir estilos con un fichero externo**

1- Creamos el fichero con la declaración de estilos

Es un fichero de texto normal, que puede tener cualquier extensión, aunque solemos asignarle la extensión .css para aclararnos qué tipo de archivo es. El texto que debemos incluir debe ser escrito exclusivamente en sintaxis CSS, es decir, sería erróneo incluir código HTML en él. Podemos ver un ejemplo a continuación.

P {

font-size : 12pt;

font-family : arial,helvetica;

font-weight : normal;

}

H1 {

font-size : 36pt;

font-family : verdana,arial;

text-decoration : underline;

text-align : center;

background-color : Teal;

}

TD {

font-size : 10pt;

font-family : verdana,arial;

text-align : center;

background-color : 666666;

}

BODY {

background-color : #006600;

font-family : arial;

color : White;

}

2- Enlazamos la página web con la hoja de estilos

Para ello, vamos a colocar la etiqueta <link> con los atributos siguientes:

rel="STYLESHEET" indicando que el enlace es con una hoja de estilos

href="estilos.css" indica el nombre del fichero fuente de los estilos

Veamos una página web entera que enlaza con la declaración de estilos anterior:

<!DOCTYPE html>

<html>

<head>

<link rel="STYLESHEET" href="estilos.css">

<title>Página con estilos.css incorporado</title>

</head>

<body>

<h1>página con estilos.css</h1>

Esta página tiene un enlace a estilos.css

<br>

<br>

</body>

</html>

**Reglas de importancia en los estilos**

Los estilos se heredan de una etiqueta a otra, como se indicó anteriormente. Por ejemplo, si tenemos declarado en el <BODY> unos estilos, en muchos casos, estas declaraciones también afectarán a etiquetas que estén dentro de esta etiqueta.

La herencia de estilos desde padres a hijos no ocurre siempre. Depende del estilo utilizado.

Por ejemplo, el color del texto se hereda en todos los componentes, aunque no ocurre con el borde de un elemento.

Pero las declaraciones de estilos se pueden realizar de múltiples modos y con varias etiquetas, también entre estos modos hay una jerarquía de importancia para resolver conflictos entre varias declaraciones de estilos distintas para una misma porción de página. Se puede ver a continuación esta jerarquía, primero ponemos las formas de declaración más generales, y por tanto menos respetadas en caso de conflicto:

Declaración de estilos con fichero externo (para todo un sitio web)

Declaración de estilos para toda la página. (con la etiqueta <STYLE> en la cabecera de la página)

Definidos en una etiqueta en concreto (utilizando el atributo style en la etiqueta en cuestión)

Para definir un estilo se utilizan atributos como font-size, text-decoration, etc. seguidos de dos puntos y el valor que le deseemos asignar. Podemos definir un estilo a base de definir muchos atributos separados por punto y coma.

Ejemplo:

font-size: 10pt; text-decoration: underline; color: black;

(el último punto y coma de la lista de atributos es opcional)

Para definir el estilo de una etiqueta se escribe la etiqueta seguida de la lista de atributos encerrados entre llaves.

Ejemplo:

H1{text-align: center; color:black}