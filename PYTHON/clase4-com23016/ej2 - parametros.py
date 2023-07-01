# FUNCIONES CON PARÁMETROS
# Parámetros: Al definir la función
# Argumentos: Al llamarla

#Ejercicio 2
def imprimir_bienvenida(cuat, anio):
    print("Bienvenidos estudiantes!")
    print(f'{cuat} cuatrimestre {anio}')

def mostrar_cuotas_curso(importe, fpago):
    fpago = fpago.upper()
    if fpago == "CONTADO":
        print(f'Forma de pago: Contado. Valor: {importe*0.9}')
    elif fpago == "DÉBITO":
        print(f'Forma de pago: Débito. Valor: {importe}')
    elif fpago == "CRÉDITO":
        print("Forma de pago: Crédito.")
        print("Cuotas\tValor cuota\tTotal financiado")
        interes = 0.15
        for i in range(3,13,3):
            valor_cuota = round(importe*(1+interes)/i,2)
            total_financiado = valor_cuota * i
            print(f'{i}\t{valor_cuota}\t\t{total_financiado}')
            interes = interes + 0.15
    else:
        print("Forma de pago errónea")

#Programa principal

cuat = input("Escriba un cuatrimestre: 1er o 2do: ")
while len(cuat)==0: #Validamos que se haya escrito un nombre
    print("Debes escribir un valor")
    cuat = input("Escriba un cuatrimestre: 1er o 2do: ")
anio = int(input("¿Qué año es?: "))
while anio<2000: #Validamos que no se ingresen valores menores que 2000
    print("Dato no válido! Debe ser mayor o igual a 2000")
    anio = int(input("¿Qué año es?: "))
imprimir_bienvenida(cuat, anio)

importe = int(input("Ingrese un importe: "))
forma_pago = input("Ingrese una forma de pago: Contado, Débito, Crédito: ")
mostrar_cuotas_curso(importe, forma_pago)