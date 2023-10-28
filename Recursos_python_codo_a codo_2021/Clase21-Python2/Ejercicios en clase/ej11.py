#Escribir un programa que lea 10 números enteros y 
# luego muestre cuántos valores 
#ingresados fueron múltiplos de 3 y cuántos de 5.
#Debemos tener en cuenta que hay 
#números que son múltiplos de 3 y de 5 a la vez.

multiplos_de_tres=0
multiplos_de_cinco=0
for contador in range(10):
    valor=int(input("Ingrese un valor:"))
    if valor%3==0:
        multiplos_de_tres+=1
    if valor%5==0: #ojo , no meter elif porque 15 no pasa
        multiplos_de_cinco+=1
print("Cantidad de valores ingresados múltiplos de 3: {}".format(multiplos_de_tres))
print("Cantidad de valores ingresados múltiplos de 5: {}".format(multiplos_de_cinco))

