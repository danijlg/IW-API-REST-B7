from django.contrib import admin
from .models import Comentario, Conversacion, Mensaje, Usuario

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Comentario)
admin.site.register(Conversacion)
admin.site.register(Mensaje)