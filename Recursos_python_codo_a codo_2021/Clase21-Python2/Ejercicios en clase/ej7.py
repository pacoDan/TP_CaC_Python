'''
Una planta que fabrica perfiles de hierro posee un lote de n piezas.
Confeccionar un programa que pida ingresar por teclado la cantidad 
de piezas a procesar y luego ingrese la longitud de cada perfil; 
sabiendo que la pieza cuya longitud esté 
comprendida en el rango de 1.20 y 1.30 son aptas. 
Imprimir por pantalla la cantidad de piezas aptas que hay en el lote
'''
piezas_acumuladas=0
contador=1
cantidad=int(input("Cuantas piezas cargará:"))
while contador<=cantidad:
    largo=float(input("Ingrese la longitud de la pieza:"))
    if largo>=1.2 and largo<=1.3:
        piezas_acumuladas+=1
    contador+=1
print("La cantidad de piezas aptas son {}".format(piezas_acumuladas))
