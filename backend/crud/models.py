from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

class Usuario(models.Model):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=100)
    address = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, blank=True)

    def get_comments(self):
       return Comentario.objects.filter( {'author': self.id} )

class Trayecto(models.Model):
    driver = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    car = models.CharField(max_length=50) #De momento es un string con el nombre del coche SEAT LEON
    source = models.CharField(max_length=30)
    destiny = models.CharField(max_length=30)
    date = models.DateField()
    departure_time = models.TimeField()
    estimated_duration = models.TimeField()
    periodicity = models.IntegerField() #Ni idea de que es esto, le he puesto entero
    places_offered = models.IntegerField()
    price = models.FloatField()

    
class Comentario(models.Model):
    author = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    #posted_in = models.ForeignKey(Trayecto, on_delete=models.CASCADE)
    coment = models.CharField(max_length=200)
    date = models.DateField()

# Habria que limitarla las reservas  en el frontend TODO: view que devuelva las plazas y/o pasajeros para poder limitar
class Reserva(models.Model):
    passenger = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    journey = models.ForeignKey(Trayecto, on_delete=models.CASCADE)

# En un principio es reputacion en general, no diferencia de si el usuario es conductor o pasajero
class Reputacion(models.Model):
    STARS = (
        (1, '*'),
        (2, '**'),
        (3, '***'),
        (4, '****'),
        (5, '*****'),
    )
    Stars = models.IntegerField(max_length=1, choices=STARS)
    user = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Conversacion(models.Model):
    userOne = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='+')
    userTwo = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Mensaje(models.Model):
    origin = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    conversation = models.ForeignKey(Conversacion, on_delete=models.CASCADE)
    message = models.CharField(max_length=200)
    date = models.DateTimeField()
