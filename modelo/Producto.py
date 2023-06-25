class Producto:
    def __init__(self, codigo, descripcion, cantidad, precio):
        self.codigo = codigo
        self.descripcion = descripcion
        self.cantidad = cantidad
        self.precio = precio

    def modificar(self, descripcion, cantidad, precio):
        self.descripcion = descripcion
        self.cantidad = cantidad
        self.precio = precio
