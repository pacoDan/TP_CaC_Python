# gitignore sacado de aca 
https://www.toptal.com/developers/gitignore/api/flask



Para estructurar tu proyecto utilizando TDD (Desarrollo Dirigido por Pruebas) y MVC (Modelo-Vista-Controlador), puedes seguir una estructura de carpetas comúnmente utilizada en proyectos de Python. Aquí tienes una sugerencia para organizar tus archivos y carpetas:

proyecto/
    |- controlador/
        |- __init__.py
        |- controlador.py
    |- modelo/
        |- __init__.py
        |- producto.py
    |- vista/
        |- __init__.py
        |- vista.py
    |- pruebas/
        |- __init__.py
        |- test_producto.py
    |- main.py
Explicación de cada carpeta y archivo:

La carpeta controlador contendría los archivos relacionados con la lógica de control y la interacción entre el modelo y la vista. El archivo controlador.py sería responsable de manejar las acciones del usuario y actualizar el modelo y la vista en consecuencia.

La carpeta modelo contendría los archivos relacionados con la definición del modelo de datos y su lógica. El archivo producto.py sería donde se encuentra la implementación de la clase Producto que has mencionado.

La carpeta vista contendría los archivos relacionados con la interfaz de usuario y la presentación de los datos. El archivo vista.py se encargaría de mostrar la información al usuario y recibir la entrada.

La carpeta pruebas contendría los archivos de prueba unitaria para cada componente del proyecto. El archivo test_producto.py sería donde escribirías las pruebas para la clase Producto.

El archivo main.py sería el punto de entrada principal de tu programa. Aquí puedes instanciar el controlador y comenzar a interactuar con el sistema.
