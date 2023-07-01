class Padre(): #Superclase 1

    def __init__(self):
        self.apellido = "Pérez" # Atributo de instancia (padre)

    def llevar(self): # Método propio
        print(f'Papá me lleva al colegio')

    def programar(self): # Método compartido
        print(f'Papá programa en JAVA')

class Madre(): #Superclase 2

    def __init__(self):
        self.apellido = "Osorio" # Atributo de instancia (madre)

    def retirar(self): # Método propio
        print(f'Mamá me retira del colegio')

    def programar(self): # Método compartido
        print(f'Mamá programa en Python')
    
class Hijo(Padre, Madre): #Subclase
    nombre = ""

    def jugar(self):
        print(f'Soy {self.nombre} {self.apellido} y juego al básquet')

hijo1 = Hijo() # Instancia de Hijo
hijo1.nombre = "Fernando"
hijo1.jugar() # Método propio
hijo1.llevar() # Método del padre
hijo1.retirar() # Método de la madre
hijo1.programar() # Método de la madre o del padre?