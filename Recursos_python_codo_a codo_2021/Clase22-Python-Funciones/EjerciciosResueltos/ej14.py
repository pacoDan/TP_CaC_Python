'''---PASO PARAMETROS POR NOMBRE DE ARGUMENTO---
Confeccionar una función que reciba el nombre de un operario, el pago por hora y la 
cantidad de horas trabajadas. 
Debe mostrar su sueldo y el nombre. 
Hacer la llamada de la función mediante argumentos nombrados.
'''


def calcular_sueldo(nombre,costo_hora,cantidad_horas):
    sueldo=costo_hora*cantidad_horas
    print("{} trabajo {} horas y cobra un sueldo de ${}".format(nombre,cantidad_horas,sueldo))

# bloque principal

calcular_sueldo("Juan",10,120)
calcular_sueldo(costo_hora=12,cantidad_horas=40,nombre="Ana")
calcular_sueldo(cantidad_horas=90,nombre="Luis",costo_hora=7)
