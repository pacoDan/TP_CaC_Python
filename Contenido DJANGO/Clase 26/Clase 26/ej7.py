def retornar_mayor(v1, v2):
    if v1 > v2:
        mayor = v1
    elif v2 > v1:
        mayor = v2
    else:
        mayor = "Son iguales"
    return mayor


# bloque principal
valor1 = int(input("Ingrese el primer valor:"))
valor2 = int(input("Ingrese el segundo valor:"))
print(retornar_mayor(valor1, valor2))
