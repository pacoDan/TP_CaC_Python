# Módulo collections: colecciones de datos
from collections import Counter
numeros = [1,2,3,4,1,2,3,1,2,1]
cadena = "Codo a Codo"

print("MÓDULO COLLECTIONS: SUBCLASE COUNTER\n")
print("Ejemplo 1: conteo sobre listas o strings\n")
print(numeros)
print(Counter(numeros)) #Counter({1: 4, 2: 3, 3: 2, 4: 1})
print()
print(cadena)
print(Counter(cadena)) #Counter({'a': 3, 'p': 1, 'l': 1, 'b': 1, 'r': 1})
print()

print("Ejemplo 2: contar palabras dentro de una cadena\n")
coches = "ferrari bmw bmw ferrari bmw fiat mercedes mercedes"
print(coches)
lista_coches = coches.split()
print(lista_coches)
print(Counter(lista_coches)) #Counter({'bmw': 3, 'ferrari': 2, 'mercedes': 1})
print()

print("Ejemplo 3: most_common() devuelve una lista ordenada por repeticiones\n")

campeones_mundiales = "Uruguay Italia Italia Uruguay Alemania Brasil Brasil Inglaterra Brasil Alemania Argentina Italia Argentina Alemania Brasil Francia Brasil Italia España Alemania Francia Argentina"
cm = Counter(campeones_mundiales.split())
print("Campeonatos mundiales de fútbol por país:")
print(cm.most_common())  #Ordenado por número de repeticiones (campeonatos)
print()
print("País con más campeonatos mundiales:", cm.most_common(1)) #País más repetido (con más campeonatos)
print()
print("Los 3 países con más campeonatos:", cm.most_common(3)) #Los 3 países con más campeonatos 

