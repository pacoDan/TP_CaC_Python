from django.shortcuts import render
from django.http import HttpResponse
from gestionPedidos.models import Articulos


def busqueda_productos(request):
    return render(request,"busqueda_productos.html")

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

def contacto(request):
    return render(request,"contacto.html")