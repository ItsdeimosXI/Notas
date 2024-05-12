from django.db import models
from django.contrib.auth import get_user_model 
# Create your models here.
class Note(models.Model):
    nombre = models.TextField(max_length=48)
    descripcion = models.TextField(max_length=1000)
    Creado = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(get_user_model(), db_column='user', verbose_name="Usuario", on_delete=models.CASCADE)
    
    def __unicode__(self):
        return '%d - %s' % (self.id, self.nombre)

    def __str__(self):
        return '%d - %s' % (self.id, self.nombre)
