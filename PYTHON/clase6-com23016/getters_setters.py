# Getters y setters

class Color:

    def __init__(self):
        self.__color = "Azul" # Atributo de instancia privado

    @property #Getter
    def favorito(self):
        return f'Mi color favorito es: {self.__color}'

    @favorito.setter
    def favorito(self,color):
        self.__color = color

#Programa principal

color1 = Color()
#print(color1.__color)
print(color1.favorito)
color1.favorito = "Rojo"
print(color1.favorito)


