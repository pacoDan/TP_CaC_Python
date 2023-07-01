'''
Ejercicio 2: La universidad ahora pide un programa que permita cargar las notas de dos exámenes y obtener el promedio. Además deberá determinar si el alumno aprobó el último examen (nota mayor o igual a 7), en caso contrario informar que desaprobó.
Además se desea saber si el alumno mejoró, empeoró o mantuvo su desempeño entre ambos parciales. Para ello se deberá informar "Mejoró su desempeño" si la nota del segundo parcial es mayor que la del primero, "Mantuvo la nota" si ambas notas son iguales o "Empeoró su desempeño" si la nota del primer parcial es mayor que la del segundo.
Finalmente, la universidad desea saber si el alumno promocionó la materia (promedio mayor o igual a 7), debe rendir final (promedio mayor o igual a 4) o debe recursar.

'''
nota1 = float(input("Ingrese la nota del primer parcial: "))
nota2 = float(input("Ingrese la nota del segundo parcial: "))
promedio = (nota1 + nota2) / 2
print()
print("El promedio de las notas es:", promedio)

if nota2 >= 7:
    print("Aprobó el segundo parcial")
else:
    print("Desaprobó el segundo parcial")

if nota2 > nota1:
    estado = "Mejoró su desempeño"
else:
    if nota1 == nota2:
         estado = "Mantuvo la nota"
    else:
        estado = "Empeoró su desempeño"
print(f'Progreso del 1er al 2do parcial: {estado}')

if promedio >= 7:
    print("Promocionó la materia")
elif promedio >= 4:
    print("Debe rendir final")
else:
    print("Debe recursar")