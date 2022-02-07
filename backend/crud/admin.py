from django.contrib import admin
from .models import Comentario, Reputacion, Reserva, Usuario, Trayecto

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Comentario)
admin.site.register(Trayecto)
admin.site.register(Reserva)
admin.site.register(Reputacion)