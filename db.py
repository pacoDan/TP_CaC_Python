import sqlite3

# Establecer la ubicación de la base de datos SQLite
DATABASE = 'productos.db'


def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def create_products_table():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
            CREATE TABLE IF NOT EXISTS productos (
                codigo INTEGER PRIMARY KEY,
                descripcion TEXT NOT NULL,
                cantidad INTEGER NOT NULL,
                precio REAL NOT NULL
            )
        ''')
    conn.commit()
    cursor.close()
    conn.close()


def create_clients_table():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
            CREATE TABLE IF NOT EXISTS clientes (
                id INTEGER PRIMARY KEY,
                nombre TEXT NOT NULL
            )
        ''')
    conn.commit()
    cursor.close()
    conn.close()


def create_carts_table():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
            CREATE TABLE IF NOT EXISTS carritos (
                id INTEGER PRIMARY KEY,
                cliente_id INTEGER NOT NULL,
                FOREIGN KEY(cliente_id) REFERENCES clientes(id)
            )
        ''')
    conn.commit()
    cursor.close()
    conn.close()


def create_cart_products_table():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
            CREATE TABLE IF NOT EXISTS productos_carrito (
                id INTEGER PRIMARY KEY,
                carrito_id INTEGER NOT NULL,
                codigo INTEGER NOT NULL,
                cantidad INTEGER NOT NULL,
                FOREIGN KEY(carrito_id) REFERENCES carritos(id),
                FOREIGN KEY(codigo) REFERENCES productos(codigo)
            )
        ''')
    conn.commit()
    cursor.close()
    conn.close()


def create_database():
    conn = sqlite3.connect(DATABASE)
    conn.close()
    create_products_table()
    create_clients_table()
    create_carts_table()
    create_cart_products_table()


create_database()
