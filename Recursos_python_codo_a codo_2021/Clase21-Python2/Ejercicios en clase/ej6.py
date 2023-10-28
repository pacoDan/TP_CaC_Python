'''
Desarrollar un programa que permita la carga de 10 valores por 
teclado y nos muestre 
posteriormente la suma de los valores ingresados y su promedio.
'''
#Se debe evitar escribir 5 veces la entrada de valor poniendolo adentro del while
contador=1
suma=0

while contador<=5:
    valor=int(input("Ingrese un valor:"))
    suma=suma+valor
    contador+=1
promedio=suma/5
print("La suma de los 10 valores es {}".format(suma))
print("El promedio es {}".format(promedio))