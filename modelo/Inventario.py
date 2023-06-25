
from modelo.Producto import Producto


class Inventario:
    def __init__(self):
        self.productos = []

    def agregar_producto(self, codigo, descripcion, cantidad, precio):
        producto = Producto(codigo, descripcion, cantidad, precio)
        self.productos.append(producto)

    def consultar_producto(self, codigo):
        for producto in self.productos:
            if producto.codigo == codigo:
                return producto
        return None

    def listar_productos(self):
        print("Lista de productos en el inventario:")
        print("Código Descripción Cant Precio")
        for producto in self.productos:
            print(f"{producto.codigo} {producto.descripcion} {producto.cantidad} {producto.precio}")
        print("--------------------------------------------------")
