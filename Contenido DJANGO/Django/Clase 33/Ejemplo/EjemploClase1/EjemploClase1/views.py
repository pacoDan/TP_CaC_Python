from django.shortcuts import render
from django.http import HttpResponse
from gestionPedidos.models import Articulos
from EjemploClase1.forms import FormularioContacto

def busqueda_productos(request):
    return render(request,"busqueda_productos.html")

def contacto(request):
    #Si es POST, se crea un form tomando como datos los ingresados por el usuario
    #Si es GET; se sirve el formulario en blanco
    miFormulario=FormularioContacto(request.POST or None)
    #Si pasa la validación de datos
    if miFormulario.is_valid():
        #Obtenemos la data "limpia" del formulario y la enviamos a gracias.html
        infForm=miFormulario.cleaned_data
        return render(request,"gracias.html",{"infForm":infForm})
    return render(request,"contacto.html",{"form":miFormulario})

def buscar(request):
    if request.GET["prd"]:
        producto=request.GET["prd"]
        articulos_fetcheados=Articulos.objects.filter(nombre__icontains=producto)
        return render(request,"resultados_productos.html",{"articulos":articulos_fetcheados,"query":producto})
    else:
        mensaje="No has introducido ningún dato"
        return HttpResponse(mensaje)

def curso(request):
    return render(request,"curso.html")