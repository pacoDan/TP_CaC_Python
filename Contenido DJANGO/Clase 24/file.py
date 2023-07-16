#Input/Output básico con Python
""" lado = int(input("Ingrese el lado:"))
superficie = lado*lado
print(superficie) """

#Uso de tuplas
""" #print("Hello world")
tupla=(1, 2, 3)
fecha=(25, "Diciembre", 2016)
punto=(10, 2)
persona=("Rodriguez", "Pablo", 43)
print(tupla[1])
print(fecha)
print(punto)
print(persona)

empleado=["juan", 53, (25, 11, 1999)]
print(empleado)

empleado.append((1, 1, 2016))
print(empleado)

alumno=("pedro",[7, 9])
print(alumno)

alumno[1].append(10)
print(alumno)"""

#Uso de diccionarios
productos = {"manzanas":39, "peras":32, "lechuga":17}

nombre=input("Ingrese el nombre del producto:")
precio=int(input("Ingrese el precio:"))
productos[nombre]=precio
print(productos)

if "naranjas" in productos:
    print(productos["naranjas"])
elif "manzanas" in productos:
    print(productos["manzanas"])
else:
    print("No se encontró la clave")

#Funciones
""" def suma_numeros(numeros): # Bloque 1
    suma = 0 # Bloque 2
    for n in numeros: # Bloque 2
        suma += n # Bloque 3
        print(suma) # Bloque 3
    return suma     # Bloque 2 """


