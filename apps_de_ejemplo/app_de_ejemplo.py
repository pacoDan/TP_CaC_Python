from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

# Importa la clase Producto del archivo Producto.py
from models.Producto import Producto

app = Flask(__name__)
CORS(app)

# Conectar con la base de datos SQLite
conn = sqlite3.connect('../app/productos.db', check_same_thread=False)

# Crear la tabla productos si no existe
def create_table():
    try:
        conn.execute('CREATE TABLE IF NOT EXISTS productos(codigo TEXT, nombre TEXT, cantidad INT, precio REAL)')
    except Exception as e:
        print(str(e))

create_table()

@app.route('/agregar_producto', methods=['POST'])
def agregar_producto():
    data = request.get_json()

    codigo = data['codigo']
    nombre = data['nombre']
    descripcion = data['descripcion']
    cantidad = data['cantidad']
    precio = data['precio']

    try:
        conn.execute('INSERT INTO productos (codigo, nombre, cantidad, precio) VALUES (?, ?, ?, ?)',
                     (codigo, nombre, cantidad, precio))
        conn.commit()

        # Imprimir producto agregado
        print(f"Producto agregado -> Código: {codigo}, Nombre: {nombre}, Descripción: {descripcion}, Cantidad: {cantidad}, Precio: {precio}")
        return jsonify({'message': 'Producto agregado exitosamente'}), 201
    except Exception as e:
        return jsonify({'message': 'Ocurrió un error al agregar el producto: {}'.format(str(e))}), 500

@app.route('/', methods=['GET'])
def home():
    return "Bienvenido a la API de Productos!"

@app.route('/productos', methods=['GET'])
def get_productos():
    cur = conn.cursor()
    cur.execute("SELECT * FROM productos")
    rows = cur.fetchall()
    return jsonify(rows), 200

if __name__ == '__main__':
    app.run(debug=True)
