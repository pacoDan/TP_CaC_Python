from app.model.Carrito import Carrito
from db import get_db


class CarritoRepository:
    def obtener_todos(self):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM carritos')
        filas = cursor.fetchall()
        return [Carrito(*fila) for fila in filas]

    def obtener_por_id(self, id):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM carritos WHERE id = ?', (id,))
        fila = cursor.fetchone()
        return Carrito(*fila) if fila else None

    def obtener_por_cliente_id(self, id_cliente):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM carritos WHERE cliente_id = ?', (id_cliente,))
        fila = cursor.fetchone()
        return Carrito(*fila) if fila else None

    def obtener_por_nombre_cliente(self, nombre_cliente):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('''
            SELECT carritos.* 
            FROM carritos 
            JOIN clientes ON carritos.cliente_id = clientes.id
            WHERE clientes.nombre = ?
        ''', (nombre_cliente,))
        fila = cursor.fetchone()
        return Carrito(*fila) if fila else None
def agregar_producto_a_carrito(self, id_carrito, codigo_producto, cantidad):
    conn = get_db()
    cursor = conn.cursor()

    # Verificar si el carrito y el producto existen
    cursor.execute('SELECT * FROM carritos WHERE id = ?', (id_carrito,))
    carrito = cursor.fetchone()
    if carrito is None:
        print('El carrito no existe.')
        return False

    cursor.execute('SELECT * FROM productos WHERE codigo = ?', (codigo_producto,))
    producto = cursor.fetchone()
    if producto is None:
        print('El producto no existe.')
        return False

    # Verificar si el producto ya está en el carrito
    cursor.execute('''
        SELECT * FROM productos_carrito 
        WHERE carrito_id = ? AND producto_id = ?
    ''', (id_carrito, producto[0]))
    producto_carrito = cursor.fetchone()

    if producto_carrito is None:
        # Si no está, insertarlo
        cursor.execute('''
            INSERT INTO productos_carrito (carrito_id, producto_id, cantidad)
            VALUES (?, ?, ?);
        ''', (id_carrito, producto[0], cantidad))
    else:
        # Si está, actualizar la cantidad
        nueva_cantidad = producto_carrito[2] + cantidad
        cursor.execute('''
            UPDATE productos_carrito 
            SET cantidad = ? 
            WHERE carrito_id = ? AND producto_id = ?
        ''', (nueva_cantidad, id_carrito, producto[0]))

    # Confirmar los cambios
    conn.commit()

    return True
