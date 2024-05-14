from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets, generics
from rest_framework.response import Response
from .serializer import NoteSerializer
from .serializer import GroupSerializer, UserSerializer, RegisterSerializer
from .models import Note
# Create your views here.
class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]
     
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class RegisteredView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
