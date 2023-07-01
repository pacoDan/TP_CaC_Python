import math # Importamos el módulo math

# Reondeo
print(f'Valor: 3.99 - Floor (suelo): {math.floor(3.99)}')  # Redondeo a la baja (suelo)
print(f'Valor: 3.01 - Ceil (techo): {math.ceil(3.01)}')  # Redondeo al alta (techo)
print()

# Sumatoria mejorada
numeros = [0.9999999, 1, 2, 3]
print(numeros)
print(f'Fsum: {math.fsum(numeros)}\n')  # 6.9999999

# Truncamiento
print(f'Valor: 123.45 - Trunc {math.trunc(123.45)}\n')  # 123

# Potencias y raíces
print(f'Pow: {math.pow(2, 3)}')  # Potencia con flotante 
print(f'Sqrt: {math.sqrt(9)}\n')  # Raíz cuadrada (square root)

# Constantes
print(f'Pi: {math.pi}')  # Constante pi
print(f'E: {math.e}')  # Constante e