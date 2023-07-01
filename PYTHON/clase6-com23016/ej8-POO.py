'''
8) Ejercicio 8 (composición): Definir una clase Materia que gestione datos de materias de la universidad. La clase Materia tiene los atributos código, nombre y duración en meses, e implementa __str__ para mostrar sus datos. La duración en meses está definida como “Cuatrimestral” (4 meses), “Anual” (8 meses) o “A confirmar” (en el resto de los casos).
Definir la clase Carrera, que administra una lista de materias. Estas materias son objetos de la clase Materia. Debe implementar sus métodos, mostrar y agregar materias.

'''

# ------------------- Clase Materia -------------------

class Materia():

    def __init__(self, codigo, nombre, duracion):
        self.codigo = codigo
        self.nombre = nombre
        self.duracion = duracion
        print(f'Se ha creado la materia: {self.codigo}-{self.nombre}')
    
    def __str__(self):
        if self.duracion == 4:
            durac = "Cuatrimestral"
        elif self.duracion == 8:
            durac = "Anual"
        else:
            durac = "A confirmar"
        return f'{self.codigo}: {self.nombre} ({durac})'
    
# ------------------- Clase Carrera -------------------

class Carrera:

    materias = [] # Esta lista contendrá los objetos de la clase Materia

    def __init__(self, nombre, materias=[]):
        self.nombre = nombre
        self.materias = materias
    
    def agregar(self, mat): # mat: objeto de la clase Materia
        self.materias.append(mat)
    
    def __str__(self):
        linea = "="*60
        cad = f'\n{linea}\n{self.nombre.upper()} - Listado de materias:\n'
        for i in range(len(self.materias)):
            cad = cad + str(self.materias[i]) + "\n"
        cad = cad + linea + "\n"
        return cad

# Programa principal
print()
materia1 = Materia("A1000", "Algoritmos I", 4) # Creamos la primera materia
print(materia1)
print()

carrera1 = Carrera("Licenciatura en Python", [materia1]) #Instanciamos la carrera con una materia
print(carrera1)

# Agregamos 3 materias
carrera1.agregar(Materia("A1001", "Python I", 8)) #Agregamos otra materia
carrera1.agregar(Materia("A1002", "Objetos I", 6)) #Agregamos otra materia
carrera1.agregar(Materia("A1003", "Inteligencia Artificial", 4)) #Agregamos otra materia

print(carrera1)


