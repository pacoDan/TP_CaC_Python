from flask import Blueprint, jsonify, request
from models.Producto import Producto
from models.database import conn

main = Blueprint('main', __name__)

# @main.route('/agregar_producto', methods=['POST'])
# def agregar_producto():
#     data = request.get_json()
#     codigo = data['codigo']
#     nombre = data['nombre']
#     descripcion = data['descripcion']
#     cantidad = data['cantidad']
#     precio = data['precio']
#
#     try:
#         conn.execute('INSERT INTO productos (codigo, nombre, cantidad, precio) VALUES (?, ?, ?, ?)',
#                      (codigo, nombre, cantidad, precio))
#         conn.commit()
#
#         # Imprimir producto agregado
#         print(f"Producto agregado -> Código: {codigo}, Nombre: {nombre}, Descripción: {descripcion}, Cantidad: {cantidad}, Precio: {precio}")
#         return jsonify({'message': 'Producto agregado exitosamente'}), 201
#     except Exception as e:
#         return jsonify({'message': 'Ocurrió un error al agregar el producto: {}'.format(str(e))}), 500
@main.route('/agregar_producto', methods=['POST'])
def agregar_producto():
    data = request.get_json()

    # Validar los datos de entrada
    required_fields = ['codigo', 'nombre', 'descripcion', 'cantidad', 'precio']
    if not all(field in data for field in required_fields):
        return jsonify({'message': 'Faltan campos requeridos en los datos de entrada'}), 400

    codigo = data['codigo']
    nombre = data['nombre']
    descripcion = data['descripcion']
    cantidad = data['cantidad']
    precio = data['precio']

    # Asegurarse de que cantidad y precio sean números
    if not isinstance(cantidad, int) or not isinstance(precio, (int, float)):
        return jsonify({'message': 'Cantidad y precio deben ser números'}), 400

    try:
        conn.execute('INSERT INTO productos (codigo, nombre, cantidad, precio) VALUES (?, ?, ?, ?)',
                     (codigo, nombre, cantidad, precio))
        conn.commit()

        # Imprimir producto agregado
        print(
            f"Producto agregado -> Código: {codigo}, Nombre: {nombre}, Descripción: {descripcion}, Cantidad: {cantidad}, Precio: {precio}")
        return jsonify({'message': 'Producto agregado exitosamente'}), 201
    except Exception as e:
        return jsonify({'message': 'Ocurrió un error al agregar el producto: {}'.format(str(e))}), 500


@main.route('/', methods=['GET'])
def home():
    return "Bienvenido a la API de Productos!"

# @main.route('/productos', methods=['GET'])
# def get_productos():
#     cur = conn.cursor()
#     cur.execute("SELECT * FROM productos")
#     rows = cur.fetchall()
#     return jsonify(rows), 200
@main.route('/productos', methods=['GET'])
def get_productos():
    cur = conn.cursor()
    cur.execute("SELECT * FROM productos")
    rows = cur.fetchall()

    # Convertir cada fila a un diccionario
    productos = []
    for row in rows:
        producto = {
            'codigo': row[0],
            'nombre': row[1],
            'cantidad': row[2],
            'precio': row[3]
        }
        productos.append(producto)

    return jsonify(productos), 200

