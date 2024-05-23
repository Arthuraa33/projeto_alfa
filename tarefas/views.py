from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import (TarefasSerializer, 
                          TarefasUpdateSerializer, 
                          TipoTarefasSerializer, 
                          TipoTarefasUpdateSerializer,
                          StatusTarefasSerializer,
                          StatusTarefasUpdateSerializer,
                          TarefasAtividadesSerializer,
                          TarefasAtividadesUpdateSerializer
                          )
from .models import (Tarefas, 
                     TipoTarefas,
                     StatusTarefas,
                     TarefasAtividades
                     )

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication

class TarefasListCreate(generics.ListCreateAPIView):
    queryset = Tarefas.objects.all()
    serializer_class = TarefasSerializer
    permission_classes = [IsAuthenticated]
        
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(criador_tarefa=self.request.user)
        else:
            print(serializer.errors)

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

class TipoTarefasListCreate(generics.ListCreateAPIView):
    queryset = TipoTarefas.objects.all()
    serializer_class = TipoTarefasSerializer
    permission_classes = [IsAuthenticated]

class TipoTarefasList(generics.ListCreateAPIView):
    queryset = TipoTarefas.objects.all()
    serializer_class = TipoTarefasSerializer
    permission_classes = [IsAuthenticated]

class TipoTarefasDelete(generics.DestroyAPIView):
    queryset = TipoTarefas.objects.all()
    serializer_class = TipoTarefasSerializer
    permission_classes = [IsAuthenticated]

class TipoTarefasDetail(generics.RetrieveUpdateAPIView):
    queryset = TipoTarefas.objects.all()
    serializer_class = TipoTarefasUpdateSerializer
    permission_classes = [IsAuthenticated]

class StatusTarefasListCreate(generics.ListCreateAPIView):
    queryset = StatusTarefas.objects.all()
    serializer_class = StatusTarefasSerializer
    permission_classes = [IsAuthenticated]

class StatusTarefasList(generics.ListCreateAPIView):
    queryset = StatusTarefas.objects.all()
    serializer_class = StatusTarefasSerializer
    permission_classes = [IsAuthenticated]

class StatusTarefasDelete(generics.DestroyAPIView):
    queryset = StatusTarefas.objects.all()
    serializer_class = StatusTarefasSerializer
    permission_classes = [IsAuthenticated]

class StatusTarefasDetail(generics.RetrieveUpdateAPIView):
    queryset = StatusTarefas.objects.all()
    serializer_class = StatusTarefasUpdateSerializer
    permission_classes = [IsAuthenticated]

class TarefasAtividadesListCreate(generics.ListCreateAPIView):
    queryset = TarefasAtividades.objects.all()
    serializer_class = TarefasAtividadesSerializer
    permission_classes = [IsAuthenticated]

class TarefasAtividadesList(generics.ListCreateAPIView):
    queryset = TarefasAtividades.objects.all()
    serializer_class = TarefasAtividadesSerializer
    permission_classes = [IsAuthenticated]

class TarefasAtividadesDelete(generics.DestroyAPIView):
    queryset = TarefasAtividades.objects.all()
    serializer_class = TarefasAtividadesSerializer
    permission_classes = [IsAuthenticated]

class TarefasAtividadesDetail(generics.RetrieveUpdateAPIView):
    queryset = TarefasAtividades.objects.all()
    serializer_class = TarefasAtividadesUpdateSerializer
    permission_classes = [IsAuthenticated]