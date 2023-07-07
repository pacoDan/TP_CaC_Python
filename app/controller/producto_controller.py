from flask import Blueprint, jsonify, request
from app.services.producto_service import ProductoService

bp = Blueprint('productos', __name__)
service = ProductoService()


@bp.route('/productos', methods=['GET'])
def obtener_todos():
    productos = service.obtener_todos()
    return jsonify([producto.to_dict() for producto in productos])


@bp.route('/productos/<int:id>', methods=['GET'])
def obtener_por_id(id):
    producto = service.obtener_por_id(id)
    return jsonify(producto.to_dict() if producto else {})

@bp.route('/productos/descripcion', methods=['GET'])
def obtener_por_descripcion():
    descripcion = request.args.get('descripcion')
    # productos = service.obtener_por_descripcion(descripcion)
    productos=service.obtener_todos()
    return jsonify([producto.to_dict() for producto in productos])
