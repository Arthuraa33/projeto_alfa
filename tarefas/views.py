from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import TarefasSerializer
from .models import Tarefas

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication

class TarefasListCreate(generics.ListCreateAPIView):
    queryset = Tarefas.objects.all()
    serializer_class = TarefasSerializer
    permission_classes = [IsAuthenticated]

class TarefasList(generics.ListCreateAPIView):
    queryset = Tarefas.objects.all()
    serializer_class = TarefasSerializer
    permission_classes = [IsAuthenticated]

class TarefasDelete(generics.DestroyAPIView):
    queryset = Tarefas.objects.all()
    serializer_class = TarefasSerializer
    permission_classes = [IsAuthenticated]

class TarefasDetail(generics.RetrieveUpdateAPIView):
    queryset = Tarefas.objects.all()
    serializer_class = TarefasUpdateSerializer
    permission_classes = [IsAuthenticated]