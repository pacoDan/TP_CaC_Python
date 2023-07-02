import sqlite3
from flask import Flask, g

# Crear el objeto de la aplicación Flask
app = Flask(__name__)

# Conectar con la base de datos SQLite
db = sqlite3.connect('productos.db', check_same_thread=False)

# Crear la tabla productos si no existe
def create_table():
    try:
        db.execute('CREATE TABLE IF NOT EXISTS productos(codigo TEXT, nombre TEXT, cantidad INT, precio REAL)')
    except Exception as e:
        print(str(e))

create_table()


# Importar modelos y controladores
from app.model import Producto,Inventario,Carrito
from app.controller import routes
