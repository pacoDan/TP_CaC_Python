from app.repositories.carrito_repository import CarritoRepository


class CarritoService:
    def __init__(self):
        self.repository = CarritoRepository()

    def obtener_todos(self):
        return self.repository.obtener_todos()

    def obtener_por_id(self, id):
        return self.repository.obtener_por_id(id)

    def obtener_por_cliente_id(self, id_cliente):
        return self.repository.obtener_por_cliente_id(id_cliente)

    def obtener_por_nombre_cliente(self, nombre_cliente):
        return self.repository.obtener_por_nombre_cliente(nombre_cliente)
