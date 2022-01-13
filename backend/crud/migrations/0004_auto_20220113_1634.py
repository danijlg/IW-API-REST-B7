# Generated by Django 3.2.9 on 2022-01-13 15:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0003_trayecto'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trayecto',
            name='passengers',
        ),
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('journey', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crud.trayecto')),
                ('passenger', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crud.usuario')),
            ],
        ),
    ]
