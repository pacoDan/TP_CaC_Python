import random

#Aleatoriedad
print("----------Aleatoriedad----------")
# Flotante aleatorio >= 0 y < 1.0
print(f'Random (float 0 y 1): {random.random()}')

# Entero aleatorio entre dos valores
print(f'Random (entero): {random.randint(1,10)}')

# Flotante aleatorio >= 1 y <10.0       
print(f'Random (flotante) {random.uniform(1,10)}')

# Entero aleatorio de 0 a 9, 10 excluído
print(f'Randrange (1 parámetro): {random.randrange(10)}')

# Entero aleatorio de 30 a 100
print(f'Randrange (2 parámetros): {random.randrange(30,101)}')

# Entero aleatorio de 0 a 100 cada 2 números, múltiplos de 2
print(f'Randrange (3 parámetros): {random.randrange(0,101,2)}')

# Entero aleatorio de 0 a 100 cada 5 números, múltiplos de 5
print(f'Randrange (3 parámetros): {random.randrange(0,101,5)}')

#Muestras
print("\n-------------Muestras------------")
# Letra aleatoria
print(f'Muestra: {random.choice("Hola mundo")}')

# Elemento aleatorio
print(f'Choice: {random.choice([1,2,3,4,5])}')

# Dos elementos aleatorios
print(f'Sample: {random.sample([1,2,3,4,5], 2)}')

#Mezclas
print("\n-------------Mezclas-------------")
# Barajar una lista, queda guardado
lista = [1,2,3,4,5]
print(lista)
random.shuffle(lista)
print(f'Shuffle: {lista}')