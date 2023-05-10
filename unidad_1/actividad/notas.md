eso elimino la parte de la izquierda, pero no la parte superior

Lamento si mi respuesta anterior no te fue útil. Si aún tienes problemas para aplicar el color de fondo solo en la parte superior de tu HTML, puedo proporcionarte un ejemplo completo que podrías utilizar:

Agrega un nuevo div al comienzo de tu archivo HTML, justo después de la etiqueta <body>. Este div debe ocupar toda la anchura de la pantalla y una altura fija, por ejemplo, 100px. Puedes hacer esto estableciendo la altura y anchura a 100% y el color de fondo a tu elección. Por ejemplo:
php
Copy code
<div class="parte-superior">
  <!-- Contenido de la parte superior aquí -->
</div>
Define la clase "parte-superior" en tu archivo CSS y aplica el color de fondo. También establece el margen y el padding del cuerpo en 0 para asegurarte de que no haya espacio en blanco en la parte superior. Por ejemplo:
css
Copy code
body {
  margin: 0;
  padding: 0;
}

.parte-superior {
  height: 100px;
  width: 100%;
  background-color: #f2f2f2;
}
En este ejemplo, la clase "parte-superior" tiene una altura de 100px, pero puedes ajustarla a tus necesidades. El margen y el padding del cuerpo se establecen en 0 para asegurarse de que no haya espacio en blanco en la parte superior.

Agrega todo el contenido de la parte superior de tu HTML dentro de este nuevo div. Por ejemplo:
php
Copy code
<div class="parte-superior">
  <h1>Título de la página</h1>
  <p>Descripción de la página</p>
  <!-- Otro contenido aquí -->
</div>
Con estos pasos, deberías ser capaz de aplicar un color de fondo solo a la parte superior de tu HTML. Asegúrate de ajustar el color de fondo y la altura del div a tus necesidades específicas.