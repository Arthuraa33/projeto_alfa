
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import (UserSerializer, 
                          NoteSerializer, 
                          ClientesSerializer, 
                          MarcasSerializer, 
                          ProdutosSerializer, 
                          TransportesSerializer, 
                          TipoTransportesSerializer, 
                          VendedoresSerializer, 
                          FornecedoresSerializer, 
                          PedidosSerializer, 
                          TabelaPrecosSerializer,
                          OrcamentoSerializer,
                          PesquisasSerializer
                          ) 
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import (Note, 
                     Clientes, 
                     Marcas, 
                     Produtos, 
                     Transportes, 
                     TipoTransportes, 
                     Vendedores, 
                     Fornecedores, 
                     Pedidos, 
                     TabelaPrecos,
                     Orcamentos,
                     Pesquisas
                    )

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ClientesListCreate(generics.ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    permission_classes = [AllowAny]

class ClientesList(generics.ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    permission_classes = [AllowAny]

class ClientesDelete(generics.DestroyAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    permission_classes = [AllowAny]

class MarcasListCreate(generics.ListCreateAPIView):
    queryset = Marcas.objects.all()
    serializer_class = MarcasSerializer
    permission_classes = [AllowAny]

class ProdutosListCreate(generics.ListCreateAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
    permission_classes = [AllowAny]

class TransportesListCreate(generics.ListCreateAPIView):
    queryset = Transportes.objects.all()
    serializer_class = TransportesSerializer
    permission_classes = [AllowAny]

class TipoTransportesListCreate(generics.ListCreateAPIView):
    queryset = TipoTransportes.objects.all()
    serializer_class = TipoTransportesSerializer
    permission_classes = [AllowAny]

class VendedoresListCreate(generics.ListCreateAPIView):
    queryset = Vendedores.objects.all()
    serializer_class = VendedoresSerializer
    permission_classes = [AllowAny]

class FornecedoresListCreate(generics.ListCreateAPIView):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresSerializer
    permission_classes = [AllowAny]

class FornecedoresDelete(generics.DestroyAPIView):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresSerializer
    permission_classes = [AllowAny]

class TabelaPrecosListCreate(generics.ListCreateAPIView):
    queryset = TabelaPrecos.objects.all()
    serializer_class = TabelaPrecosSerializer
    permission_classes = [AllowAny]

class PedidosListCreate(generics.ListCreateAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
    permission_classes = [AllowAny]

class OrcamentosListCreate(generics.ListCreateAPIView):
    queryset = Orcamentos.objects.all()
    serializer_class = OrcamentoSerializer
    permission_classes = [AllowAny]

class PesquisasListCreate(generics.ListCreateAPIView):
    queryset = Pesquisas.objects.all()
    serializer_class = PesquisasSerializer
    permission_classes = [AllowAny]