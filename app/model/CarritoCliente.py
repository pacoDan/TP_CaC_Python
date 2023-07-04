# from app.model.Cliente import Cliente
#
#
# class CarritoCliente:
#     def __init__(self):
#         self.clientes = []  # Lista de clientes
#
#     def agregar_cliente(self, id, nombre):
#         nuevo_cliente = Cliente(id, nombre)
#         self.clientes.append(nuevo_cliente)
#         return nuevo_cliente
#
#     def obtener_cliente(self, id):
#         for cliente in self.clientes:
#             if cliente.id == id:
#                 return cliente
#         return None
#
#     def agregar_producto_a_carrito(self, id_cliente, codigo, cantidad, inventario):
#         cliente = self.obtener_cliente(id_cliente)
#         if cliente is None:
#             print("El cliente no existe.")
#             return False
#         return cliente.carrito.agregar(codigo, cantidad, inventario)
#
#     def quitar_producto_de_carrito(self, id_cliente, codigo, cantidad, inventario):
#         cliente = self.obtener_cliente(id_cliente)
#         if cliente is None:
#             print("El cliente no existe.")
#             return False
#         return cliente.carrito.quitar(codigo, cantidad, inventario)
#
#     def mostrar_carrito(self, id_cliente):
#         cliente = self.obtener_cliente(id_cliente)
#         if cliente is None:
#             print("El cliente no existe.")
#             return False
#         cliente.carrito.mostrar()
#         return True
