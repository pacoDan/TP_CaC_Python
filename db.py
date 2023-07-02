# import sqlite3
#
# def get_db():
#     conn = sqlite3.connect('productos.db')
#     return conn
import sqlite3

# Establecer la ubicación de la base de datos SQLite
DATABASE = 'productos.db'


# Esta función se conecta a la base de datos SQLite y configura la row_factory
# para devolver los resultados de la consulta como objetos de fila, que te permiten
# acceder a los elementos de la fila por nombre en lugar de por índice.
def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


# Esta función crea la tabla 'productos' en la base de datos si aún no existe.
def create_table():
    conn = get_db()  # Obtén la conexión a la base de datos
    cursor = conn.cursor()  # Crea un objeto cursor para realizar consultas SQL
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS productos (
            codigo INTEGER PRIMARY KEY,
            descripcion TEXT NOT NULL,
            cantidad INTEGER NOT NULL,
            precio REAL NOT NULL
        )
    ''')  # Ejecuta la consulta SQL para crear la tabla si no existe
    conn.commit()  # Guarda los cambios en la base de datos
    cursor.close()  # Cierra el cursor
    conn.close()  # Cierra la conexión a la base de datos


# Esta función se conecta a la base de datos (creándola si no existe) y luego
# llama a la función create_table para asegurarse de que la tabla 'productos' exista.
def create_database():
    conn = sqlite3.connect(DATABASE)
    conn.close()
    create_table()


# Llamamos a create_database cuando el script se ejecuta para asegurarnos de que la
# base de datos y la tabla 'productos' estén creadas antes de que se haga cualquier otra cosa.
create_database()
