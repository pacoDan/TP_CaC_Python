# para ejecutar
flask --app app.py run
<!-- # para ejecutar el archivo app5.py -->
<!-- flask --app app/app5.py run   -->


## Instalación

Puedes instalar las dependencias necesarias para este proyecto con pip, el gestor de paquetes de Python. En tu terminal, ejecuta los siguientes comandos:

    pip install Flask
    pip install -U flask-cors




-- EXTRA, INSTRUCTIVO
# Proyecto de API de Productos

Este proyecto contiene una API simple para manejar productos utilizando Flask y CORS.

## Requisitos previos

Para ejecutar este proyecto necesitarás tener instalado:

- Python 3.6 o superior.
- Flask y flask-cors.


## Ejecución del Proyecto

Para ejecutar la aplicación Flask, debes situarte en la carpeta raíz del proyecto y ejecutar el siguiente comando en la terminal:

    flask run


Por defecto, la aplicación se iniciará y podrá ser accedida desde un navegador web en `http://localhost:5000`. Puedes ver la lista de productos visitando `http://localhost:5000/productos`.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos y carpetas:

- `run.py`: Contiene el código principal de la aplicación Flask. En este archivo se definen las rutas de la API y se inicializan los datos de los productos.
- `models/Producto.py`: Este archivo contiene la definición de la clase Producto que se utiliza para crear nuevos productos.

## Autor

Jhon Daniel


--------------------------------------------


EXTRAS:
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
