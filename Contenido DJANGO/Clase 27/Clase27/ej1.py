class Persona:

    def inicializar(self,nombre):
        self.nombre=nombre

    def imprimir(self):
        print("Nombre: {}".format(self.nombre))


# bloque principal

persona1=Persona()
persona1.inicializar("Pedro")
#persona1.nombre = "Pedro"
persona1.imprimir()

persona2=Persona()
persona2.inicializar("Carla")
persona2.imprimir()
