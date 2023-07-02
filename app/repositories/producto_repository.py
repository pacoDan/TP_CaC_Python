from app.model.Producto import Producto
from db import get_db

class ProductoRepository:
    def obtener_todos(self):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM productos')
        filas = cursor.fetchall()
        return [Producto(*fila) for fila in filas]

    def obtener_por_id(self, id):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM productos WHERE id = ?', (id,))
        fila = cursor.fetchone()
        return Producto(*fila) if fila else None

    # Agregar más métodos según sea necesario
