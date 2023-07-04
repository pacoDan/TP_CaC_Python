from app.model.Carrito import Carrito
class Cliente:
    def __init__(self, id, nombre):
        self.id = id
        self.nombre = nombre
        self.carrito = Carrito()  # Cada cliente tiene su propio carrito
