#problema 2 , contador hasta valor ingresado
'''
Codificar un programa que solicite la carga de un valor positivo y nos muestre desde 1 hasta 
el valor ingresado de uno en uno'''

numero_ingresado=int(input("Ingrese el valor final:"))
contador=1
while contador<=numero_ingresado:
    print(contador)
    contador+=1   
print("Terminó el programa.")
