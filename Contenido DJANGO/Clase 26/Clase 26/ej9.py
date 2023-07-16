def mayor_menor(lista):
    #Paso de parámetro por referencia
    may=lista[0]
    men=lista[0]
    for x in range(1,len(lista)):
        if lista[x]>may:
            may=lista[x]
        else:
            if lista[x]<men:
                men=lista[x]
    print("El valor mayor de la lista es: {}".format(may))
    print("El valor menor de la lista es: {}".format(men))
    lista[0] = 30

def funcion_ejemplo(frase):
    #Paso de parámetro por valor
    print(frase)
    frase = "Chau"

# bloque principal
lista=[]
for x in range(5):
    valor=int(input("Ingrese valor:"))
    lista.append(valor)
mayor_menor(lista)
print(lista)

frase = "Hola"
funcion_ejemplo(frase)
print(frase)


