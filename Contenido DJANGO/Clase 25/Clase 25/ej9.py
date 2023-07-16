suma=0
for contador in range(10):
    valor=int(input("Ingrese valor {}:".format(contador+1)))
    suma=suma+valor
print("La suma es {} y el promedio {}".format(suma,suma/10))