from flask import Flask, jsonify
from flask_cors import CORS
from modelo.Producto import Producto  # Importa la clase Producto del archivo Producto.py

app = Flask(__name__)
CORS(app)

# Esto es solo un ejemplo, normalmente estos datos vendrían de una base de datos.
productos = [
    Producto('001', 'Descripción1', 10, 100.0),
    Producto('002', 'Descripción2', 20, 200.0),
    Producto('003', 'Descripción3', 30, 300.0),
]


@app.route('/', methods=['GET'])
def home():
    return "Bienvenido a la API de Productos!"

@app.route('/productos', methods=['GET'])
def get_productos():
    return jsonify([producto.__dict__ for producto in productos])

if __name__ == '__main__':
    app.run(debug=True)
