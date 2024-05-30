from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Note
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'password' ,'email', 'groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
        
class NoteSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Note
        fields = ['nombre','descripcion', 'user']
        read_only_fields = ['creado']

class RegisterSerializer(serializers.ModelSerializer):
    #aqui estoy afirmando que el atributo sea un correo y que es requerido y debe de ser unico en toda la base de datos
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    #aqui estoy afirmando que el atributo sea un texto, que es requerido y es solo de escritura, ademas de ser una contraseña valida con el validate_password
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    #configuro el modelo a usar mas los campos que quiero que use y muestre, ademas de validaciones requeridas como nombre y apellido
    class Meta:
        model = User
        fields = ['username', 'password', 'password2', 'email', 'first_name', 'last_name']
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }
    #En esta funcion esto validando de que las 2 contraseñas sean iguales, si no lo son devuelvo un error
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "La contraseña no son las mismas"})
        return attrs
    #En esta funcion cuando se llama al metodo de creacion ya esta todo ok, por lo tanto guarda la contraseña y guarda el usuario
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password']
        )
        return user
            