# Generated by Django 3.2.9 on 2022-02-09 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0009_alter_mensaje_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='email',
            field=models.EmailField(blank=True, max_length=50),
        ),
    ]
