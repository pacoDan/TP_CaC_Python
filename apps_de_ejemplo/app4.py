import sqlite3 #importamos la biblioteca sqlite3 para trabajar con la base de datos.

DATABASE = 'inventario.db'

def get_db_connection(): #establece la conexión con la BD SQlite utilizando la biblioteca sqlite3
    print("Obteniendo conexión...") # Para probar que se ejecuta la función
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

# Crear la tabla 'productos' si no existe
def create_table():
    print("Creando tabla productos...") # Para probar que se ejecuta la función
    conn = get_db_connection()
    cursor = conn.cursor()
    #.execute es para ejecutar una sentencia SQL que crea la tabla con sus columnas
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS productos (
            codigo INTEGER PRIMARY KEY,
            nombre TEXT NOT NULL,
            descripcion TEXT NOT NULL,
            cantidad INTEGER NOT NULL,
            precio REAL NOT NULL
        ) ''')
    conn.commit() #se realiza una confirmación con commit para guardar los cambios
    cursor.close() #con ésto se cierra el cursor
    conn.close() #con ésto se cierra la conexión

# Verificar si la base de datos existe, si no, crearla y crear la tabla
def create_database():
    print("Creando la BD...") # Para probar que se ejecuta la función
    conn = sqlite3.connect(DATABASE)
    conn.close()
    create_table()


class Producto:
    # Definimos el constructor e inicializamos los atributos de instancia
    def __init__(self, codigo, nombre, descripcion, cantidad, precio):
        self.codigo = codigo           # Código 
        self.nombre = nombre           # nombre de la comida o bebida
        self.descripcion = descripcion # Descripción de la comida o bebida
        self.cantidad = cantidad       # Cantidad disponible (stock)
        self.precio = precio           # Precio 

    # Este método permite modificar un producto.
    def modificar(self,nuevo_nombre, nueva_descripcion, nueva_cantidad, nuevo_precio):
        self.nombre = nuevo_nombre            # Modifica el nombre del producto
        self.descripcion = nueva_descripcion  # Modifica la descripción
        self.cantidad = nueva_cantidad        # Modifica la cantidad
        self.precio = nuevo_precio            # Modifica el precio

class Inventario:
    # Definimos el constructor e inicializamos los atributos de instancia
    # def __init__(self):
    #     self.productos = []  # Lista de productos (objetos productos) en el inventario (variable de clase)
    def __init__(self):
        self.conexion = get_db_connection() #se establece una conexión con la base de datos
        self.cursor = self.conexion.cursor() #se crea un objeto cursor para ejecutar consultas y obtener resultados

    # Este método permite crear objetos de la clase "Producto" y agregarlos al inventario.
    def agregar_producto(self, codigo, nombre, descripcion, cantidad, precio):
        producto_existente = self.consultar_producto(codigo)
        if producto_existente: 
            print("Ya existe un producto con ese código.")
            return False
        nuevo_producto = Producto(codigo, nombre, descripcion, cantidad, precio) #intanciando la clase producto, a mi enteder!
        # abajo el código genera un string que será la sentencia de sql de inserción, los valores se pasan como una tupla
        sql = f'INSERT INTO productos VALUES ({codigo},"{nombre}","{descripcion}",{cantidad}, {precio});'
        self.cursor.execute(sql) # ejecuta una consulta SQL utilizando el cursor para insertar una nueva fila
        self.conexion.commit() #confirmación explícita de la transacción en la base de datos
        return True

    # Este método permite consultar datos de productos que están en el inventario
    # Devuelve el producto correspondiente al código proporcionado o False si no existe.
    def consultar_producto(self, codigo):
        sql = f'SELECT * FROM productos WHERE codigo = {codigo};' #genera un string que será la sentencia de SQL de selección
        self.cursor.execute(sql) #Ejecuta una consulta SQL utilizando el cursor para seleccionar todas las columnas de la tabla "productos" donde el código coincide con el valor proporcionado.
        row = self.cursor.fetchone() #Recupera la primera fila de resultados de la consulta realizada. El método fetchone() devuelve una tupla que contiene los valores de las columnas seleccionadas. 
        if row: #sí se encontró una fila que coincide con el código
            codigo, nombre, descripcion, cantidad, precio = row #se extraen los valores de la tupla row
            return Producto(codigo, nombre, descripcion, cantidad, precio) #la funcion devuelve una instancia de Producto con los valores extraídos
        return False

    # el método modificar_producto busca un producto en la base de datos mediante el código proporcionado. Si se encuentra, se actualiza la instancia del objeto Producto y se ejecuta una consulta SQL para actualizar los datos correspondientes en la base de datos.

    def modificar_producto(self, codigo, nuevo_nombre, nueva_descripcion, nueva_cantidad, nuevo_precio):
        producto = self.consultar_producto(codigo) 
        if producto:
            producto.modificar(nuevo_nombre, nueva_descripcion, nueva_cantidad, nuevo_precio) #llama al método modificar de la clase producto
            sql = f'UPDATE productos SET nombre= "{nuevo_nombre}", descripcion = "{nueva_descripcion}", cantidad = {nueva_cantidad}, precio = {nuevo_precio} WHERE codigo = {codigo};' #genera un string y actualiza. Se pasan los nuevos valores como tupla
            self.cursor.execute(sql) #Se ejecuta una consulta SQL utilizando el cursor para actualizar los datos del producto en la tabla "productos".
            self.conexion.commit() #Se realiza una confirmación explícita de la transacción en la base de datos para guardar los cambios de la actualización.

    # Este método elimina el producto indicado por codigo de la lista mantenida en el inventario.
    def eliminar_producto(self, codigo):
        sql = f'DELETE FROM productos WHERE codigo = {codigo};' #string que es la sentencia de SQL de eliminación
        self.cursor.execute(sql) # ejecuta una consulta SQL utilizando el cursor para eliminar el producto de la tabla "productos"
        if self.cursor.rowcount > 0: #rowcount: nos dice la cantidad de filas afectadas por la operación eliminación
            print(f'Producto {codigo} eliminado.')
            self.conexion.commit() #se guardan los cambios en la base de datos
        else:
            print(f'Producto {codigo} no encontrado.')

    # Este método imprime en la terminal una lista con los datos de los productos que figuran en el inventario.
    def listar_productos(self):
        print("-"*50)
        print("Lista de productos en el inventario:")
        print("Código\tNombre\t\t\t\tDescripción\t\t\t\t\t\t\t\t\t\tCant\t\tPrecio")
        self.cursor.execute('SELECT * FROM productos')
        rows= self.cursor.fetchall() # Recupera todas las filas de resultados de la consulta en una lista llamada rows. Cada fila es una tupla
        for row in rows:
            codigo, nombre, descripcion, cantidad, precio = row #desempaqueta
            print(f'{codigo}\t{nombre}\t\t\t\t{descripcion}\t\t{cantidad}\t\t{precio}')
        print("-"*50)

class Pedido:
    # Definimos el constructor e inicializamos los atributos de instancia
    def __init__(self):
        self.conexion = get_db_connection()
        self.cursor = self.conexion.cursor()
        self.items = [] # Lista de items en el carrito (variable de clase)

    # Este método permite agregar productos del inventario al carrito.
    def agregar(self, codigo, cantidad, inventario):
        # Nos aseguramos que el producto esté en el inventario
        producto = inventario.consultar_producto(codigo)
        if producto is False: 
            print("El producto no existe.")
            return False

        # Verificamos que la cantidad en stock sea suficiente
        if producto.cantidad < cantidad:
            print("Cantidad en stock insuficiente.")
            return False

        # Si existe y hay stock, vemos si ya existe en el carrito.
        for item in self.items:
            if item.codigo == codigo:
                item.cantidad += cantidad
                # Actualizamos la cantidad en la base de datos
                sql = f'UPDATE productos SET cantidad = cantidad - {cantidad} WHERE codigo = {codigo};'
                self.cursor.execute (sql)
                self.conexion.commit()
                return True
        # Si no existe en el carrito, lo agregamos como un nuevo item.
        nuevo_item = Producto(codigo,producto.nombre, producto.descripcion, cantidad, producto.precio)
        self.items.append(nuevo_item)
        sql = f'UPDATE productos SET cantidad = cantidad - {cantidad}  WHERE codigo = {codigo};'
        self.cursor.execute(sql)
        self.conexion.commit()
        return True

    # Este método quita unidades de un elemento del carrito, o lo elimina.
    def quitar(self, codigo, cantidad, inventario):
        for item in self.items:
            if item.codigo == codigo:
                if cantidad > item.cantidad:
                    print("Cantidad a quitar mayor a la cantidad en el carrito.")
                    return False
                item.cantidad -= cantidad
                if item.cantidad == 0:
                    self.items.remove(item)
                # Actualizamos la cantidad en el inventario
                sql = f'UPDATE productos SET cantidad = cantidad + {cantidad} WHERE codigo = {codigo};'
                self.cursor.execute(sql)
                self.conexion.commit()
                return True
        print("El producto no se encuentra en el carrito.")
        return False

    def mostrar(self):
        print("-"*50)
        print("Lista de productos en el carrito:")
        print("Código\tNombre\t\tDescripción\t\t\tCant\tPrecio")
        for item in self.items:
            print(f'{item.codigo}\t{item.nombre}\t\t{item.descripcion}\t\t{item.cantidad}\t{item.precio}')
        print("-"*50)

# Programa principal
# Crear la base de datos y la tabla si no existen
create_database()

# Crear una instancia de la clase Inventario
mi_inventario = Inventario() 
# agregar productos 
mi_inventario.agregar_producto(1, 'Dalai lomo', 'Ciabatta, lomo, lechuga, morrones asados, probolone, crema de perejil', 50, 2800)
mi_inventario.agregar_producto(2, 'Pulled pork', 'Ciabatta, bondiola desmechada, lechuga, cebolla morada, salsa BBQ', 60, 2600)
mi_inventario.agregar_producto(3, 'Claromecó', 'Ciabatta, milanesitas de peceto, queso, panceta, tomate, palta', 70, 2300)
mi_inventario.agregar_producto(4, 'Ensal. Tropical', 'Lechuga, ananá, gambas, palta, choclo, morrón rojo, venagreta de ananá', 25, 3550)
mi_inventario.agregar_producto(5, 'Ensal. de Atún', 'Arroz yamaní, atún, olivas, cubos de queso, zanahoria', 80, 2450)
mi_inventario.agregar_producto(6, 'Arroz/Mariscos', 'Arroz bomba, almejas, mejillones, vieyras, langostinos, calamar', 70, 3600)
mi_inventario.agregar_producto(7, 'Burguers', 'Pan de papa, medallón de ternera, jamón cocido, queso, lechuga, tomate', 90, 2220)
# Listar los productos del inventario 

mi_inventario.listar_productos() 
# moificar productos 
mi_inventario.modificar_producto(1, 'Dalai lomo', 'Ciabatta, lomo, lechuga, morrones asados, probolone, crema de perejil', 50, 2600)
mi_inventario.modificar_producto(2, 'Pulled pork', 'Ciabatta, bondiola desmechada, lechuga, cebolla morada, salsa BBQ', 60, 2300)
mi_inventario.modificar_producto(3, 'Claromecó', 'Ciabatta, milanesitas de peceto, queso, panceta, tomate, palta', 70, 2300)
mi_inventario.modificar_producto(4, 'Ensal. Tropical', 'Lechuga, ananá, gambas, palta, choclo, morrón rojo, venagreta de ananá', 25, 3500)
mi_inventario.modificar_producto(5, 'Ensal. de Atún', 'Arroz yamaní, atún, olivas, cubos de queso, zanahoria', 80, 2350)
mi_inventario.modificar_producto(6, 'Arroz/Mariscos', 'Arroz bomba, almejas, mejillones, vieyras, langostinos, calamar', 70, 3500)
mi_inventario.modificar_producto(7, 'Burguers', 'Pan de papa, medallón de ternera, jamón cocido, queso, lechuga, tomate', 90, 2200)

# Consultar algún producto del inventario 

print(mi_inventario.consultar_producto(3)) #Existe, se muestra la dirección de memoria 

print(mi_inventario.consultar_producto(4)) 
 
print(mi_inventario.consultar_producto(9)) 

# Listar los productos del inventario 

mi_inventario.listar_productos() 

