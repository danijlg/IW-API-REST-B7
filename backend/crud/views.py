from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.utils import serializer_helpers
from rest_framework.views import APIView
from .models import Reputacion, Reserva, Trayecto, Usuario, Comentario
from .serializers import ReputacionSerializer, ReservaSerializer, TrayectoSerializer, UsuarioSerializer, ComentarioSerializer
from django.db.models import Q
import datetime

# Create your views here.
#Read-Write: Lista de usuarios
class UsuarioList(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

#Read-Write-Delete para un usuario
class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

#Read-Write: Lista de comentarios
class ComentarioList(generics.ListCreateAPIView):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer

#Read-Write-Delete para un comentario
class ComentarioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer

class UsuarioComentarios(APIView):
    def get(self, request, author):
        comentarios = Comentario.objects.filter(author=author).order_by('-date')
        serializer = ComentarioSerializer(comentarios, many=True)
        return Response(serializer.data)

class UsuarioPorNombre(APIView):
    def get(self, request, name):
        usuario = Usuario.objects.filter(Q(name__icontains=name) | Q(surname__icontains=name))
        serializer = UsuarioSerializer(usuario, many=True)
        return Response(serializer.data)

class ComentariosFecha(APIView):
    """Format 2021-12-31"""
    def get(self, request, date):
        dateArray = date.split('-')
        datetime.date(int(dateArray[0]), int(dateArray[1]), int(dateArray[2]))
        comentarios = Comentario.objects.filter(date__lte=date).order_by('-date')
        serializer = ComentarioSerializer(comentarios, many=True)
        return Response(serializer.data)


#Read-Write: Lista de trayectos
class TrayectoList(generics.ListCreateAPIView):
    queryset = Trayecto.objects.all()
    serializer_class = TrayectoSerializer

#Read-Write-Delete para un trayecto
class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trayecto.objects.all()
    serializer_class = TrayectoSerializer

#Read-Write: Lista de reservas
class ReservaList(generics.ListCreateAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

#Read-Write-Delete para una reserva
class ReservaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

#Read-Write: Lista de reputaciones
class ReputacionList(generics.ListCreateAPIView):
    queryset = Reputacion.objects.all()
    serializer_class = ReputacionSerializer

#Read-Write-Delete para una reputacion
class ReputacionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reputacion.objects.all()
    serializer_class = ReputacionSerializer