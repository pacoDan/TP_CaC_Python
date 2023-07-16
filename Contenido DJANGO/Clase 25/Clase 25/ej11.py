multiplos_de_tres=0
multiplos_de_cinco=0
for contador in range(10):
    valor=int(input("Ingrese un valor:"))
    if valor%3==0:
        multiplos_de_tres+=1
        print("El numero {} es multiplo de 3".format(valor))
    if valor%5==0:
        multiplos_de_cinco+=1
        print("El numero {} es multiplo de 5".format(valor))
print("Cantidad de valores ingresados múltiplos de 3: {}".format(multiplos_de_tres))
print("Cantidad de valores ingresados múltiplos de 5: {}".format(multiplos_de_cinco))