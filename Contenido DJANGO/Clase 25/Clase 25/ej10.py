aprobados=0
reprobados=0
for contador in range(5):
    nota=int(input("Ingrese la nota {}:".format(contador+1)))
    if nota>=7:
        aprobados+=1
    else:
        reprobados+=1
print("Cantidad de aprobados: {}".format(aprobados))
print("Cantidad de reprobados: {}".format(reprobados))