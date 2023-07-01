'''
3. Crear una clase que represente una Materia de la universidad. 
Definir como atributos su nombre, carrera, duración en meses y un atributo de 
clase booleano para definir que todas las materias no son promocionables.
Desarrollar un método __init__ para incializarlos. Crear un método para imprimir los 
datos del objeto, luego sustituirlo por el método __str__(). Crear dos objetos. 
Eliminar uno de ellos a través del método __del__().

'''

class Materia:
    promo = False # Atributo de clase

    # Nuevo método constructor
    def __init__(self, nombre, carrera, duracion): #permite instanciar y agregar valores a los atributos
        self.nombre = nombre
        self.carrera = carrera
        self.duracion = duracion

    def imprimir(self):
        print(f'Materia: {self.nombre.title()}\nCarrera: {self.carrera.upper()}\nDuración: {self.duracion} meses\nPromocionable: {self.promo}') # ya no me sirve (por __str__())

    def __str__(self): 
        return f'Materia: {self.nombre.title()}\nCarrera: {self.carrera.upper()}\nDuración: {self.duracion} meses\nPromocionable: {self.promo}'
    
    def __del__(self):
        print(f'{self.nombre} ha sido eliminada!')

# Programa principal
asign1 = Materia("introd. a python", "ing. en informática", 4)
print(asign1)
print()
asign2 = Materia("inteligencia artificial", "ing. en informática", 8)
print(asign2)
print()

