class Punto:

    def __init__(self,x,y):
        self.x=x
        self.y=y

    @staticmethod
    def metodo_estatico():
        print("método estático")

    def imprimir(self):
        print("Coordenada del punto")
        print("({}:{})".format(self.x,self.y))

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
Punto.metodo_estatico()
punto1.imprimir()
punto1.imprimir_cuadrante()
