# Generated by Django 5.0.6 on 2024-05-12 00:18

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ApiNoteUser', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='Creado',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
