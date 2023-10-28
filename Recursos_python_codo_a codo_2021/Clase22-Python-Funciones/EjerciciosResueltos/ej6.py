'''RETURN
Confeccionar una función que le enviemos como parámetro el valor del lado de un cuadrado 
y nos retorne su superficie.'''


def retornar_superficie(lado):
    sup=lado*lado
    return sup


# bloque principal del programa

va=int(input("Ingrese el valor del lado del cuadrado:"))
superficie=retornar_superficie(va)
print("La superficie del cuadrado es: {} m2".format(superficie))
