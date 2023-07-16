from django.shortcuts import render

def curso(request):
    return render(request,"curso.html")

def contacto(request):
    return render(request,"contacto.html")