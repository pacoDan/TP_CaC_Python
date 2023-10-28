def mayormenor(lista):#[1,2,3,4,5]
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

                
# bloque principal

lista=[]
for x in range(5):
    valor=int(input("Ingrese valor:"))
    lista.append(valor)
mayormenor(lista) #[1,2,3,4,5]
