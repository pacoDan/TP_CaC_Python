'''
2. Implementar una nueva clase llamada Estudiante. Esta clase tendrá como atributos 
su nombre y su nota. Definir los métodos para inicializar sus atributos,
imprimirlos y mostrar un mensaje que indique: “Promocionó” (nota >= 7),
“Rinde final” (nota >= 4) o “Desaprobó”.
Definir tres objetos de la clase Alumno, cada uno con una condición
de aprobación distinta.
 
'''

class Estudiante():

    def inicializar(self, nombreCompleto, nota): #Método constructor
        self.nombreCompleto = nombreCompleto #Atributo de instancia
        self.nota = nota #Atributo de instancia
    
    def imprimir(self):
        print(f'Nombre completo: {self.nombreCompleto.title()} - Nota: {self.nota}')
        if self.nota >= 7:
            print("Promocionó")
        elif self.nota >= 4:
            print("Rinde final")
        else:
            print("Desaprobó")
        print()

# Programa principal
estud1 = Estudiante() # Creamos el objeto
estud1.inicializar("juan serrano", 8)

estud2 = Estudiante() # Creamos el objeto
estud2.inicializar("luisa lane", 4)

estud3 = Estudiante() # Creamos el objeto
estud3.inicializar("diego fernández lane", 2)


estud1.imprimir()
estud2.imprimir()
estud3.imprimir()