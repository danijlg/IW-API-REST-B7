from django.db.models import fields
from rest_framework import serializers
from .models import Conversacion, Mensaje, Reputacion, Reserva, Trayecto, Usuario, Comentario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'name', 'surname', 'address' , 'email']

class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = ['id', 'author', 'coment', 'date']

class TrayectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trayecto
        fields = '__all__'

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'

class ReputacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reputacion
        fields = '__all__'

class ConversacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversacion
        fields = ['id', 'userOne', 'userTwo']

class MensajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mensaje
        fields = ['id', 'origin', 'conversation', 'message', 'date']
