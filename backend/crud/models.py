from django.db import models

# Create your models here.
class Usuario(models.Model):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=100)
    address = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)

    def get_comments(self):
       return Comentario.objects.filter( {'autor': self.id} )

class Comentario(models.Model):
    author = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    coment = models.CharField(max_length=200)
    date = models.DateField()

class Conversacion(models.Model):
    userOne = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='+')
    userTwo = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Mensaje(models.Model):
    origin = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    conversation = models.ForeignKey(Conversacion, on_delete=models.CASCADE)
    message = models.CharField(max_length=200)
    date = models.DateTimeField()