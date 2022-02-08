from email import message
import json
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.utils import serializer_helpers
from rest_framework.views import APIView
from .models import Conversacion, Mensaje, Usuario, Comentario
from .serializers import ConversacionSerializer, MensajeSerializer, UsuarioSerializer, ComentarioSerializer
from django.db.models import Q, F, Max
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

class UsuarioPorEmail(APIView):
    def get(self, request, email):
        usuario = Usuario.objects.filter(Q(email__icontains=email))
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

class ConversacionesList(generics.ListCreateAPIView):
    queryset = Conversacion.objects.all()
    serializer_class = ConversacionSerializer

class ConversacionesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Conversacion.objects.all()
    serializer_class = ConversacionSerializer

class MensajesList(generics.ListCreateAPIView):
    queryset = Mensaje.objects.all()
    serializer_class = MensajeSerializer

class MensajesUltimoConversaciones(APIView):
    def get(self, request, var):
        conversacionesAbiertas = Conversacion.objects.filter(Q(userOne_id=var) | Q(userTwo_id=var)).values_list('id', flat=True)

        mensajes = Mensaje.objects.filter(Q(conversation__in = conversacionesAbiertas)).values('conversation').annotate(id = Max('id')).annotate(max_date=Max('date')).values_list('id', flat=True)

        respuesta = Mensaje.objects.filter(Q(id__in = mensajes)).order_by('conversation')
        

        serializer = MensajeSerializer(respuesta, many=True)
        return Response(serializer.data)

class MensajesConversacion(APIView):
    def get(self, request, conversation):

        mensajes = Mensaje.objects.filter(conversation = conversation)
        serializer = MensajeSerializer(mensajes, many=True)
        return Response(serializer.data)

class ConversacionNombres(APIView):
    def get(self, request, conversation, user):
        conversacion = Conversacion.objects.filter(id = conversation)

        respuesta = None
        if conversacion.first().userOne_id == user :
            respuesta = Usuario.objects.filter(id = conversacion.first().userTwo_id)
        elif conversacion.first().userTwo_id == user:
            respuesta = Usuario.objects.filter(id = conversacion.first().userOne_id)

        serializer = UsuarioSerializer(respuesta.first(), many=False)
        return Response(serializer.data)
    
class ListaConversacionesNombres(APIView):
    def get(self, request, var):
        conversacionesAbiertas = Conversacion.objects.filter(Q(userOne_id=var) | Q(userTwo_id=var))
        array = []
        for conversacion in conversacionesAbiertas:
            aux = None
            if conversacion.userOne_id == var :
                aux = Usuario.objects.filter(id = conversacion.userTwo_id).values('id', 'name', 'surname').first()
            elif conversacion.userTwo_id == var:
                aux = Usuario.objects.filter(id = conversacion.userOne_id).values('id', 'name', 'surname').first()
            array.append(aux)
        

        
        return Response(array)
        

        
