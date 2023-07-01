from flask import Flask, jsonify
from flask_cors import CORS

class Producto:
    def __init__(self, codigo, nombre, descripcion, cantidad, precio):
        self.codigo = codigo
        self.nombre = nombre
        self.descripcion = descripcion
        self.cantidad = cantidad
        self.precio = precio

app = Flask(__name__)
CORS(app)

productos = [
    Producto('001', 'Producto1', 'Descripción1', 10, 100.0),
    Producto('002', 'Producto2', 'Descripción2', 20, 200.0),
    Producto('003', 'Producto3', 'Descripción3', 30, 300.0),
]

@app.route('/productos', methods=['GET'])
def get_productos():
    return jsonify([producto.__dict__ for producto in productos])

if __name__ == '__main__':
    app.run(debug=True)
