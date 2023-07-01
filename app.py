from flask import Flask, jsonify
from flask_cors import CORS
from modelo.Producto import Producto  # Importa la clase Producto del archivo Producto.py
from flask import request


app = Flask(__name__)
CORS(app)

# Esto es solo un ejemplo, normalmente estos datos vendrían de una base de datos.
productos = [
    Producto('001', 'Descripción1', 10, 100.0),
    Producto('002', 'Descripción2', 20, 200.0),
    Producto('003', 'Descripción3', 30, 300.0),
]
@app.route('/agregar_producto', methods=['POST'])
def agregar_producto():
    data = request.get_json()

    codigo = data['codigo']
    nombre = data['nombre']
    descripcion = data['descripcion']
    cantidad = data['cantidad']
    precio = data['precio']

    nuevo_producto = Producto(codigo, nombre, cantidad, precio)

    productos.append(nuevo_producto)
    # Convertir el objeto Producto a un diccionario y luego imprimirlo
    print('producto agregado ->', nuevo_producto.__dict__)

    return jsonify({'message': 'Producto agregado exitosamente'}), 201

@app.route('/', methods=['GET'])
def home():
    return "Bienvenido a la API de Productos!"

@app.route('/productos', methods=['GET'])
def get_productos():
    return jsonify([producto.__dict__ for producto in productos])

if __name__ == '__main__':
    app.run(debug=True)
