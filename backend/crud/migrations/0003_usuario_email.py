# Generated by Django 3.2.9 on 2022-01-18 22:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0002_comentario'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='email',
            field=models.EmailField(default='example@email.com', max_length=50),
            preserve_default=False,
        ),
    ]