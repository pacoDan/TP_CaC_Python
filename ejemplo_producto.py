from modelo.Producto import Producto

# Resto del código del ejemplo de producto

def main():
    # Programa principal
    producto = Producto(1, 'Teclado USB 101 teclas', 10, 4500)
    # Accedemos a los atributos del objeto
    print(f'{producto.codigo} | {producto.descripcion} | {producto.cantidad} | {producto.precio}')
    # Modificar los datos del producto
    producto.modificar('Teclado Mecánico USB', 20, 4800) 
    print(f'{producto.codigo} | {producto.descripcion} | {producto.cantidad} | {producto.precio}')

if __name__ == "__main__":
    main()
