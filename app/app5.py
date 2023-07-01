import sqlite3 #importamos la biblioteca sqlite3 para trabajar con la base de datos.
from flask import Flask, jsonify, request #importamos módulos de clases y funciones para trabajar con flask
from flask_cors import CORS
# Configurar la conexión a la base de datos SQLite
DATABASE = 'inventario.db'

def get_db_connection(): #establece la conexión con la BD SQlite utilizando la biblioteca sqlite3
    #print("Obteniendo conexión...")  Para probar que se ejecuta la función
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
    conn = sqlite3.connect(DATABASE)
    conn.close()
    create_table()

#crear la base de datos si no existe y la tabla
create_database()


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
            return jsonify({'message': 'Ya existe un producto con ese código.'}), 400
        nuevo_producto = Producto(codigo, nombre, descripcion, cantidad, precio) #intanciando la clase producto, a mi enteder!
        # abajo el código genera un string que será la sentencia de sql de inserción, los valores se pasan como una tupla
        sql = f'INSERT INTO productos VALUES ({codigo},"{nombre}","{descripcion}",{cantidad}, {precio});'
        self.cursor.execute(sql) # ejecuta una consulta SQL utilizando el cursor para insertar una nueva fila
        self.conexion.commit() #confirmación explícita de la transacción en la base de datos
        return jsonify({'message': 'Producto agregado correctamente.'}), 200

    # Este método permite consultar datos de productos que están en el inventario
    # Devuelve el producto correspondiente al código proporcionado o False si no existe.
    def consultar_producto(self, codigo):
        sql = f'SELECT * FROM productos WHERE codigo = {codigo};' #genera un string que será la sentencia de SQL de selección
        self.cursor.execute(sql) #Ejecuta una consulta SQL utilizando el cursor para seleccionar todas las columnas de la tabla "productos" donde el código coincide con el valor proporcionado.
        row = self.cursor.fetchone() #Recupera la primera fila de resultados de la consulta realizada. El método fetchone() devuelve una tupla que contiene los valores de las columnas seleccionadas. 
        if row: #sí se encontró una fila que coincide con el código
            codigo, nombre, descripcion, cantidad, precio = row #se extraen los valores de la tupla row
            return Producto(codigo, nombre, descripcion, cantidad, precio) #la funcion devuelve una instancia de Producto con los valores extraídos
        return None #despues sirve a modificar producto para saber si estaba

    # el método modificar_producto busca un producto en la base de datos mediante el código proporcionado. Si se encuentra, se actualiza la instancia del objeto Producto y se ejecuta una consulta SQL para actualizar los datos correspondientes en la base de datos.

    def modificar_producto(self, codigo, nuevo_nombre, nueva_descripcion, nueva_cantidad, nuevo_precio):
        producto = self.consultar_producto(codigo) 
        if producto:
            producto.modificar(nuevo_nombre, nueva_descripcion, nueva_cantidad, nuevo_precio) #llama al método modificar de la clase producto
            sql = f'UPDATE productos SET nombre= "{nuevo_nombre}", descripcion = "{nueva_descripcion}", cantidad = {nueva_cantidad}, precio = {nuevo_precio} WHERE codigo = {codigo};' #genera un string y actualiza. Se pasan los nuevos valores como tupla
            self.cursor.execute(sql) #Se ejecuta una consulta SQL utilizando el cursor para actualizar los datos del producto en la tabla "productos".
            self.conexion.commit() #Se realiza una confirmación explícita de la transacción en la base de datos para guardar los cambios de la actualización.
            return jsonify({'message': 'Producto modificado correctamente.'}), 200
        return jsonify({'message': 'Producto no encontrado.'}), 404
 
 # Este método imprime en la terminal una lista con los datos de los productos que figuran en el inventario.
    def listar_productos(self):
        self.cursor.execute('SELECT * FROM productos')
        rows= self.cursor.fetchall() # Recupera todas las filas de resultados de la consulta en una lista llamada rows. Cada fila es una tupla
        productos = []
        for row in rows:
            codigo, nombre, descripcion, cantidad, precio = row #desempaqueta
            producto = {'codigo': codigo,'nombre': nombre, 'descripcion': descripcion, 'cantidad': cantidad, 'precio': precio}
            productos.append(producto)
        return jsonify(productos), 200
   
    # Este método elimina el producto indicado por codigo de la lista mantenida en el inventario.
    def eliminar_producto(self, codigo):
        sql = f'DELETE FROM productos WHERE codigo = {codigo};' #string que es la sentencia de SQL de eliminación
        self.cursor.execute(sql) # ejecuta una consulta SQL utilizando el cursor para eliminar el producto de la tabla "productos"
        if self.cursor.rowcount > 0: #rowcount: nos dice la cantidad de filas afectadas por la operación eliminación
            self.conexion.commit() #se guardan los cambios en la base de datos
            return jsonify({'message': 'Producto eliminado correctamente.'}), 200
        else:
            return jsonify({'message': 'Producto no encontrado.'}), 404

   


class Pedido:
    # Definimos el constructor e inicializamos los atributos de instancia
    def __init__(self):
        self.conexion = get_db_connection()
        self.cursor = self.conexion.cursor()
        self.items = [] # Lista de items en el pedido (variable de clase)

    # Este método permite agregar productos del inventario al pedido.
    def agregar(self, codigo, cantidad, inventario):
        # Nos aseguramos que el producto esté en el inventario
        producto = inventario.consultar_producto(codigo)
        if producto is None: 
            return jsonify({'message': 'El producto no existe.'}), 404
       # Verificamos que la cantidad en stock sea suficiente
        if producto.cantidad < cantidad:
            return jsonify({'message': 'Cantidad en stock insuficiente.'}), 400
        # Si existe y hay stock, vemos si ya existe en el pedido.
        for item in self.items:
            if item.codigo == codigo:
                item.cantidad += cantidad
                sql = f'UPDATE productos SET cantidad = cantidad - {cantidad}  WHERE codigo = {codigo};'
                self.cursor.execute(sql)
                self.conexion.commit()
                return jsonify({'message': 'Producto agregado al carrito correctamente.'}), 200
        # Si no existe en el pedido, lo agregamos como un nuevo item.
        nuevo_item = Producto(codigo, producto.nombre, producto.descripcion, cantidad, producto.precio)
        self.items.append(nuevo_item)
        sql = f'UPDATE productos SET cantidad = cantidad - {cantidad}  WHERE codigo = {codigo};'
        self.cursor.execute(sql)
        self.conexion.commit()
        return jsonify({'message': 'Producto agregado al carrito correctamente.'}), 200

          
    # Este método quita unidades de un elemento del pedido, o lo elimina.
    def quitar(self, codigo, cantidad, inventario):
        for item in self.items:
            if item.codigo == codigo:
                if cantidad > item.cantidad:
                     return jsonify({'message': 'Cantidad a quitar mayor a la cantidad en el carrito.'}), 400
                item.cantidad -= cantidad
                if item.cantidad == 0:
                    self.items.remove(item)
                # Actualizamos la cantidad en el inventario
                sql = f'UPDATE productos SET cantidad = cantidad + {cantidad} WHERE codigo = {codigo};'
                self.cursor.execute(sql)
                self.conexion.commit()
                return jsonify({'message': 'Producto quitado del carrito correctamente.'}), 200
            return jsonify({'message': 'El producto no se encuentra en el carrito.'}), 404
    
    def mostrar(self):
        productos_pedido = []
        for item in self.items:
            producto = {'codigo': item.codigo, 'nombre': item.nombre, 'descripcion': item.descripcion, 'cantidad': item.cantidad, 'precio': item.precio}
            productos_pedido.append(producto)
        return jsonify(productos_pedido), 200



app = Flask(__name__)
CORS(app)

pedido = Pedido()         # Instanciamos un pedido
inventario = Inventario()   # Instanciamos un inventario


#CONFIGURAMOS RUTAS
# Ruta para obtener los datos de un producto según su código, en FLASK y poderlo ver del HTML via JSON
# @app.   DECORADOR PARA LA VISTA DE FLASK (lo vimos en fetch)   https://www.nadiapoulsen.pythonanywhere.com/

@app.route('/productos/<int:codigo>', methods=['GET'])
def obtener_producto(codigo):
    producto = inventario.consultar_producto(codigo)
    if producto:
        return jsonify({
            'codigo': producto.codigo,
            'nombre': producto.nombre,
            'descripcion': producto.descripcion,
            'cantidad': producto.cantidad,
            'precio': producto.precio
        }), 200
    return jsonify({'message': 'Producto no encontrado.'}), 404

# Ruta para obtener el index
@app.route('/')
def index():
    return 'API de Inventario'

# Ruta para obtener la lista de productos del inventario
@app.route('/productos', methods=['GET'])
def obtener_productos():
    return inventario.listar_productos()

# Ruta para agregar un producto al inventario
@app.route('/productos', methods=['POST'])
def agregar_producto():
    codigo = request.json.get('codigo')
    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
    cantidad = request.json.get('cantidad')
    precio = request.json.get('precio')
    return inventario.agregar_producto(codigo, nombre, descripcion, cantidad, precio)

# Ruta para modificar un producto del inventario
@app.route('/productos/<int:codigo>', methods=['PUT'])
def modificar_producto(codigo):
    nuevo_nombre = request.json.get('nombre')
    nueva_descripcion = request.json.get('descripcion')
    nueva_cantidad = request.json.get('cantidad')
    nuevo_precio = request.json.get('precio')
    return inventario.modificar_producto(codigo, nuevo_nombre, nueva_descripcion, nueva_cantidad, nuevo_precio)

# Ruta para eliminar un producto del inventario
@app.route('/productos/<int:codigo>', methods=['DELETE'])
def eliminar_producto(codigo):
    return inventario.eliminar_producto(codigo)

# Ruta para agregar un producto al PEDIDO
@app.route('/pedido', methods=['POST'])
def agregar_pedido():
    codigo = request.json.get('codigo')
    cantidad = request.json.get('cantidad')
    inventario = Inventario()
    return pedido.agregar(codigo, cantidad, inventario)

# Ruta para quitar un producto del pedido
@app.route('/pedido', methods=['DELETE'])
def quitar_pedido():
    codigo = request.json.get('codigo')
    cantidad = request.json.get('cantidad')
    inventario = Inventario()
    return pedido.quitar(codigo, cantidad, inventario)

# Ruta para obtener el contenido del pedido
@app.route('/pedido', methods=['GET'])
def obtener_pedido():
    return pedido.mostrar()

# Finalmente, si estamos ejecutando este archivo, lanzamos app.
if __name__ == '__main__':
    app.run()