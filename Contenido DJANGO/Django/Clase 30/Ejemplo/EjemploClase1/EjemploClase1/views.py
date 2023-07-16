from django.http import HttpResponse
import datetime
from django.shortcuts import render

""" def saludo(request):
    return HttpResponse("Hola a todos!") """

def saludo(request):
    nombre = "Juan"
    return render(request,"plantilla.html",{"nombre_persona":nombre})

def saludo_html(request):
    documento="""<html><body><h1>Hola a todos!</h1></body></html>"""
    return HttpResponse(documento)

def despedida(request):
    return HttpResponse("Hasta luego!")

def get_fecha(request):
    fecha_actual=datetime.datetime.now()
    documento="""<html><body><h1>Fecha: %s</h1></body></html>"""%fecha_actual
    return HttpResponse(documento)

def calcular_edad(request,edad,agno):
    periodo=agno-2022
    edad_futura=edad+periodo
    documento="<html><body><h2>En el año %s tendrás %s años"%(agno,edad_futura)
    return HttpResponse(documento)