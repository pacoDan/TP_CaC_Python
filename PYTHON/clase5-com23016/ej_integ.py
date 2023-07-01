'''
Implementar una clase llamada Empleado, que posee un atributo de clase (nro_empleados) que
lleva la cuenta de los objetos instanciados.
Cada objeto de la clase Empleado posee un legajo, nombre completo y un sueldo.
Definir métodos para inicializar sus atributos, definir su categoría (variable de clase),
procesar su eliminación de la memoria y para mostrar un texto con la categoría asignada.
La categoría es "Full Time" para los legajos comenzados en "F", "Part time" para los legajos
comenzados en "P" y "Contratado" para los comenzados en "C", para el resto la categoría es
vacía.
En el programa principal instanciar distintos objetos de la clase Empleado y mostrar sus
características encolumnadas. Al salir del programa eliminarlos de la memoria.

'''

class Empleado:
    nro_empleados = 0
    categoria = "" #Atributo de clase

    # Constructor
    def __init__(self, legajo, nombreCompleto, sueldo):
        self.legajo = legajo # Atributo de instancia
        self.nombreCompleto = nombreCompleto
        self.sueldo = sueldo
        Empleado.nro_empleados += 1 # Acumulamos (Empleado.nro_empleados = Empleado.nro_empleados + 1)

    def __str__(self):
        inicial_legajo = self.legajo[0] #Primera inicial del legajo
        
        if inicial_legajo == "F":
            self.categoria = "Full time"
        elif inicial_legajo == "P":
            self.categoria = "Part time"
        elif inicial_legajo == "C":
            self.categoria = "Contratado"

        cadena = f'{self.legajo}\t{self.nombreCompleto}\t{self.sueldo}\t{self.categoria}'
        
        return cadena
    
    def titulos():
        print(f'Legajo\tNombre completo\tSueldo\tCategoria')

    def __del__(self):
        Empleado.nro_empleados -= 1 #Restamos un empleado
        print(f'{self.nombreCompleto} ha sido dado de baja - Restan: {Empleado.nro_empleados}')

# Programa princiapl
emp1 = Empleado("F10000", "juan Pérez", 150000)
emp2 = Empleado("P10001", "Ana gómez", 160000)
emp3 = Empleado("C10002", "Luciana garcía", 80000)
emp4 = Empleado("H10003", "Marcela Priore", 220000)

Empleado.titulos()
print(emp1)
print(emp2)
print(emp3)
print(emp4)
print()
input("Puse Enter para salir: ")
print()