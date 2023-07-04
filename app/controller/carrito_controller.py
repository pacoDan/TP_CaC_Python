from flask import Blueprint, jsonify, request
from app.services.carrito_service import \
    CarritoService  # Asegúrate de que el servicio correspondiente esté implementado

bp = Blueprint('carritos', __name__)

service = CarritoService()


@bp.route('/carritos', methods=['GET'])
def obtener_todos():
    carritos = service.obtener_todos()
    return jsonify([carrito.to_dict() for carrito in carritos])


@bp.route('/carritos/<int:id>', methods=['GET'])
def obtener_por_id(id):
    carrito = service.obtener_por_id(id)
    return jsonify(carrito.to_dict() if carrito else {})


@bp.route('/carritos/cliente/<int:id_cliente>', methods=['GET'])
def obtener_carrito_por_cliente_id(id_cliente):
    carrito = service.obtener_por_cliente_id(id_cliente)
    return jsonify(carrito.to_dict() if carrito else {})


@bp.route('/carritos/cliente/<string:nombre_cliente>', methods=['GET'])
def obtener_carrito_por_nombre_cliente(nombre_cliente):
    carrito = service.obtener_por_nombre_cliente(nombre_cliente)
    return jsonify(carrito.to_dict() if carrito else {})
