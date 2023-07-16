class Punto:

    VariableEstatica = 5

    def __init__(self,x,y):
        self.x=x
        self.y=y
        self.codigo = Punto.VariableEstatica
        Punto.VariableEstatica+=5

    @staticmethod
    def get_variable_estatica():
        print("método estático")
        return Punto.VariableEstatica

    def imprimir(self):
        print("Coordenada del punto")
        print("({}:{})".format(self.x,self.y))
        print("({})".format(self.codigo))

    def imprimir_cuadrante(self):
        if self.x>0 and self.y>0:
            print("Primer cuadrante")
        elif self.x<0 and self.y>0:
            print("Segundo cuadrante")
        elif self.x<0 and self.y<0:
            print("Tercer cuadrante")
        else:
            print("Cuarto cuadrante")

# bloque principal

punto1=Punto(10,-30)
punto1.imprimir()
punto1.imprimir_cuadrante()

punto2=Punto(42,30)
punto2.imprimir()
punto2.imprimir_cuadrante()

print(Punto.get_variable_estatica())