function calcularPrecioConIva(precio, iva = 0.21) {
    return (precio + (precio * iva));
}

document.write(calcularPrecioConIva(10));