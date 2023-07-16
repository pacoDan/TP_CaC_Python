piezas_aptas=0
contador=1
cantidad_total=int(input("Cuantas piezas cargará:"))
while contador<=cantidad_total:
    largo=float(input("Ingrese la longitud de la pieza:"))
    if largo>=1.2 and largo<=1.3:
        piezas_aptas+=1
    contador+=1
print("La cantidad de piezas aptas son {}".format(piezas_aptas))