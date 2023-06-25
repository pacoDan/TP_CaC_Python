from modelo.Inventario import Inventario
from modelo.Carrito import Carrito

# # Programa principal
# producto = Producto(1, 'Teclado USB 101 teclas', 10, 4500)

# # Accedemos a los atributos del objeto
# print(f'{producto.codigo} | {producto.descripcion} | {producto.cantidad} | {producto.precio}')

# # Modificar los datos del producto
# producto.modificar('Teclado Mecánico USB', 20, 4800)
# print(f'{producto.codigo} | {producto.descripcion} | {producto.cantidad} | {producto.precio}')





# # Programa principal
# # Crear una instancia de la clase Inventario
# mi_inventario = Inventario()
# # Agregar productos
# mi_inventario.agregar_producto(1, 'Teclado USB 101 teclas', 10, 4500)
# mi_inventario.agregar_producto(2, 'Mouse USB 3 botones', 5, 2500)
# mi_inventario.agregar_producto(3, 'Monitor LCD 22 pulgadas', 15, 52500)
# mi_inventario.agregar_producto(4, 'Monitor LCD 27 pulgadas', 25, 78500)
# mi_inventario.agregar_producto(5, 'Mouse Pad color azul', 5, 500)
# # Consultar un producto
# producto = mi_inventario.consultar_producto(3)
# if producto != False:
#     print(f'Producto encontrado:\nCódigo: {producto.codigo}\nDescripción: {producto.descripcion}\nCantidad: {producto.cantidad}\nPrecio:{producto.precio}')
# else:
#     print("Producto no encontrado.")
# # Modificar un producto
# mi_inventario.modificar_producto(3, 'Monitor LCD 24 pulgadas', 5, 62000)
# # Listar todos los productos
# mi_inventario.listar_productos()
# # Eliminar un producto
# mi_inventario.eliminar_producto(2)
# # Confirmamos que haya sido eliminado
# mi_inventario.listar_productos()


# Programa principal
# ---------------------------------------------------------------------
# Ejemplo de uso de las clases y objetos definidos antes:
# ---------------------------------------------------------------------
# Crear una instancia de la clase Inventario
mi_inventario = Inventario()
# Crear una instancia de la clase Carrito
mi_carrito = Carrito()
# Crear 3 productos y agregarlos al inventario
mi_inventario.agregar_producto(1, 'Teclado USB 101 teclas', 10, 4500)
mi_inventario.agregar_producto(2, 'Mouse USB 3 botones', 5, 2500)
mi_inventario.agregar_producto(3, 'Monitor LCD 22 pulgadas', 15, 52500)
# Listar todos los productos del inventario
mi_inventario.listar_productos()
# Agregar 2 productos al carrito
mi_carrito.agregar(1, 2, mi_inventario) # Agregar 2 unidades del producto con código 1 al carrito
mi_carrito.agregar(3, 4, mi_inventario) # Agregar 1 unidad del producto con código 3 al carrito
mi_carrito.quitar (1, 1, mi_inventario) # Quitar 1 unidad del producto con código 1 al carrito
# Listar todos los productos del carrito
mi_carrito.mostrar()
# Quitar 1 producto al carrito
mi_carrito.quitar (1, 1, mi_inventario) # Quitar 1 unidad del producto con código 1 al carrito
# Listar todos los productos del carrito
mi_carrito.mostrar()
# Mostramos el inventario
mi_inventario.listar_productos()
