# Herencia simple

class Padre(): #Superclase / clase base / clase padre
    
    def __init__(self):
        self.apellido = "Fernández"
    
    def hacer_deporte(self):
        print("Estoy haciendo deporte")

class Hijo(Padre): # Subclase / clase hija (hereda de la superclase Padre)
    nombre = "" # Atributo de clase

    def jugar(self):
        print(f'Soy {self.nombre} y juego al fútbol')

# Programa principal
hijo1 = Hijo()
hijo1.nombre = "Juan"
hijo1.hacer_deporte() # Método del padre
hijo1.jugar()
print(f'El hijo se llama {hijo1.nombre} {hijo1.apellido}') # Imprimimos atributos propios y heredados