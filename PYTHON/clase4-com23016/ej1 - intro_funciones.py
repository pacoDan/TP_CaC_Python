# FUNCIONES EN PYTHON: Sintaxis básica

#Ejercicio 1
def imprimir_mensaje():
    print("=======================================")
    print("Bienvenidos a la Universidad de Python!")
    print("=======================================")

def imprimir_aulas():
    print("Piso\tAulas")
    for i in range(1,6):       
        print(i, end='\t')
        inicio = i*100
        fin = inicio+10
        print(f'{inicio} a {fin}')
        
# Programa principal
imprimir_mensaje()
print()
imprimir_aulas()
