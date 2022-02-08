from django.db.models import fields
from rest_framework import serializers
from .models import Conversacion, Mensaje, Usuario, Comentario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'name', 'surname', 'address' , 'email']

class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = ['id', 'author', 'coment', 'date']

class ConversacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversacion
        fields = ['id', 'user1', 'user2']

class MensajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mensaje
        fields = ['id', 'origin', 'conversation', 'message', 'date']