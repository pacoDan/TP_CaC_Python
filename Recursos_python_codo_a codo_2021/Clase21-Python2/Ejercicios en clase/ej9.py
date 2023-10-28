#Desarrollar un programa que permita la carga de 10 valores 
# por teclado y nos muestre posteriormente la suma de los 
# valores ingresados y su promedio
suma=0
for contador in range(10):
    valor=int(input("Ingrese el valor {} :" .format(contador+1)))
    suma=suma+valor
print("La suma es {} y el promedio {}".format(suma,suma/10))


















'''
suma=0
for contador in range(10):
    valor=int(input("Ingrese valor {}:".format(contador+1)))
    suma=suma+valor
print("La suma es {} y el promedio {}".format(suma,suma/10))
'''
