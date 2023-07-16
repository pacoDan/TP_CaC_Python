nota1=int(input("Ingrese primer nota:"))
nota2=int(input("Ingrese segunda nota:"))
nota3=int(input("Ingrese tercer nota:"))
promedio=(nota1+nota2+nota3)/3

if promedio>=7:
    print("Promocionado")
else:
    if promedio>=4 and promedio<7:
        print("Regular")
    else:
        print("Reprobado")

if promedio>=7:
    print("Promocionado")
elif promedio>=4 and promedio<7:
    print("Regular")
else:
    print("Reprobado")