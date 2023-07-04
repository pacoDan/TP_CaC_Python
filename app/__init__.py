from flask import Flask

from db import create_database
from .controller import producto_controller, carrito_controller  # Importa carrito_controller

def create_app():
    app = Flask(__name__)
    app.register_blueprint(producto_controller.bp)
    app.register_blueprint(carrito_controller.bp)  # Registra el Blueprint de carrito_controller

    # Luego de registrar las rutas, creas la base de datos
    create_database()

    return app
