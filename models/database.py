import sqlite3

# Conectar con la base de datos SQLite
conn = sqlite3.connect('productos.db', check_same_thread=False)

# Crear la tabla productos si no existe
def create_table():
    try:
        conn.execute('CREATE TABLE IF NOT EXISTS productos(codigo TEXT, nombre TEXT, cantidad INT, precio REAL)')
    except Exception as e:
        print(str(e))

create_table()
