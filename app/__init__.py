from flask import Flask

from app.controller import producto_controller


# from .controllers import producto_controller

def create_app():
    app = Flask(__name__)
    app.register_blueprint(producto_controller.bp)
    return app
