
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import (UserSerializer, 
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
from .models import (Clientes, 
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

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ClientesListCreate(generics.ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    permission_classes = [IsAuthenticated]

class ClientesList(generics.ListCreateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    permission_classes = [IsAuthenticated]

class ClientesDelete(generics.DestroyAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
    permission_classes = [IsAuthenticated]

class MarcasListCreate(generics.ListCreateAPIView):
    queryset = Marcas.objects.all()
    serializer_class = MarcasSerializer
    permission_classes = [IsAuthenticated]

class ProdutosListCreate(generics.ListCreateAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
    permission_classes = [IsAuthenticated]

class TransportesListCreate(generics.ListCreateAPIView):
    queryset = Transportes.objects.all()
    serializer_class = TransportesSerializer
    permission_classes = [IsAuthenticated]

class TipoTransportesListCreate(generics.ListCreateAPIView):
    queryset = TipoTransportes.objects.all()
    serializer_class = TipoTransportesSerializer
    permission_classes = [IsAuthenticated]

class VendedoresListCreate(generics.ListCreateAPIView):
    queryset = Vendedores.objects.all()
    serializer_class = VendedoresSerializer
    permission_classes = [AllowAny]

class FornecedoresListCreate(generics.ListCreateAPIView):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresSerializer
    permission_classes = [IsAuthenticated]

class FornecedoresDelete(generics.DestroyAPIView):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresSerializer
    permission_classes = [IsAuthenticated]

class TabelaPrecosListCreate(generics.ListCreateAPIView):
    queryset = TabelaPrecos.objects.all()
    serializer_class = TabelaPrecosSerializer
    permission_classes = [IsAuthenticated]

class PedidosListCreate(generics.ListCreateAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
    permission_classes = [IsAuthenticated]

class OrcamentosListCreate(generics.ListCreateAPIView):
    queryset = Orcamentos.objects.all()
    serializer_class = OrcamentoSerializer
    permission_classes = [IsAuthenticated]

class PesquisasListCreate(generics.ListCreateAPIView):
    queryset = Pesquisas.objects.all()
    serializer_class = PesquisasSerializer
    permission_classes = [IsAuthenticated]