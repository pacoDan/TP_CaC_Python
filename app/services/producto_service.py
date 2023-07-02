# from repositories import ProductoRepository
from app.repositories.producto_repository import ProductoRepository


class ProductoService:
    def __init__(self):
        self.repository = ProductoRepository()

    def obtener_todos(self):
        return self.repository.obtener_todos()

    def obtener_por_id(self, id):
        return self.repository.obtener_por_id(id)

    # Agregar más métodos según sea necesario
