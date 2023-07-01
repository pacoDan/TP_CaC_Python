class Vehiculo(): # Superclase / clase padre

    def __init__(self, color, ruedas):
        self.color = color # Atributo de instancia
        self.ruedas = ruedas # Atributo de instancia
    
    def __str__(self):
        return f'Color: {self.color}\nRuedas: {self.ruedas}'

    def andar(self):
        print(f'Estoy andando en {self.ruedas} ruedas')

class Transporte(Vehiculo):
    def __init__(self, color, ruedas, velocidad, modelo, tipo):
        Vehiculo.__init__(self, color, ruedas) # Atributos heredados
        self.velocidad = velocidad # Atributo propio
        self.modelo = modelo # Atributo propio
        self.tipo = tipo # Atributo propio
    
    def __str__(self):
        return Vehiculo.__str__(self) + f'\nTipo: {self.tipo.upper()}\nVelocidad: {self.velocidad} km/h\nModelo: {self.modelo}' #Muestra atributos heredados y propios
    
#Programa principal
vehiculo1 = Vehiculo("Rojo", 2) # Instancia del padre
print(vehiculo1)
vehiculo1.andar()
print()

auto1 = Transporte("Azul", 4, 150, "Ford", "Auto") # Instancia del hijo
print(auto1)
auto1.andar()
print()

# def __init__(self, color, ruedas, velocidad, modelo, tipo):
moto1 = Transporte("Rojo", 2, 220, "Yamaha", "Moto") # Instancia del hijo
print(moto1)
moto1.andar()