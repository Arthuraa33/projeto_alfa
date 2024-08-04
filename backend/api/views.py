
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import (UserSerializer, 
                          ClientesSerializer,
                          ClientesUpdateSerializer,
                          AreasVendaSerializer,
                          AreasVendaUpdateSerializer,
                          ClassificacaoClientesSerializer,
                          ClassificacaoClientesUpdateSerializer,
                          MarcasSerializer, 
                          MarcasUpdateSerializer,
                          ProdutosSerializer,
                          ProdutosUpdateSerializer, 
                          TransportesSerializer,
                          TransportesUpdateSerializer, 
                          TipoTransportesSerializer, 
                          TipoTransportesUpdateSerializer,
                          VendedoresSerializer, 
                          VendedoresUpdateSerializer,
                          FornecedoresSerializer,
                          FornecedoresUpdateSerializer, 
                          PedidosSerializer,
                          PedidosUpdateSerializer, 
                          TabelaPrecosSerializer,
                          TabelaPrecosUpdateSerializer,
                          OrcamentosSerializer,
                          OrcamentosUpdateSerializer,
                          PesquisasSerializer,
                          PesquisasUpdateSerializer,
                          CidadesSerializer,
                          EstadosSerializer
                          ) 
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from .models import (Clientes, 
                     AreasVenda,
                     ClassificacaoClientes,
                     Marcas, 
                     Produtos, 
                     Transportes, 
                     TipoTransportes, 
                     Vendedores, 
                     Fornecedores, 
                     Pedidos, 
                     TabelaPrecos,
                     Orcamentos,
                     Pesquisas,
                     Cidades,
                     Estados
                    )

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

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

class ClientesDetail(generics.RetrieveUpdateAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesUpdateSerializer
    permission_classes = [IsAuthenticated]

class MarcasListCreate(generics.ListCreateAPIView):
    queryset = Marcas.objects.all()
    serializer_class = MarcasSerializer
    permission_classes = [IsAuthenticated]

class MarcasList(generics.ListCreateAPIView):
    queryset = Marcas.objects.all()
    serializer_class = MarcasSerializer
    permission_classes = [IsAuthenticated]

class MarcasDelete(generics.DestroyAPIView):
    queryset = Marcas.objects.all()
    serializer_class = MarcasSerializer
    permission_classes = [IsAuthenticated]

class MarcasDetail(generics.RetrieveUpdateAPIView):
    queryset = Marcas.objects.all()
    serializer_class = MarcasUpdateSerializer
    permission_classes = [IsAuthenticated]

class AreasVendaListCreate(generics.ListCreateAPIView):
    queryset = AreasVenda.objects.all()
    serializer_class = AreasVendaSerializer
    permission_classes = [IsAuthenticated]

class AreasVendaList(generics.ListCreateAPIView):
    queryset = AreasVenda.objects.all()
    serializer_class = AreasVendaSerializer
    permission_classes = [IsAuthenticated]

class AreasVendaDelete(generics.DestroyAPIView):
    queryset = AreasVenda.objects.all()
    serializer_class = AreasVendaSerializer
    permission_classes = [IsAuthenticated]

class AreasVendaDetail(generics.RetrieveUpdateAPIView):
    queryset = AreasVenda.objects.all()
    serializer_class = AreasVendaUpdateSerializer
    permission_classes = [IsAuthenticated]

class ClassificacaoClientesListCreate(generics.ListCreateAPIView):
    queryset = ClassificacaoClientes.objects.all()
    serializer_class = ClassificacaoClientesSerializer
    permission_classes = [IsAuthenticated]

class ClassificacaoClientesList(generics.ListCreateAPIView):
    queryset = ClassificacaoClientes.objects.all()
    serializer_class = ClassificacaoClientesSerializer
    permission_classes = [IsAuthenticated]

class ClassificacaoClientesDelete(generics.DestroyAPIView):
    queryset = ClassificacaoClientes.objects.all()
    serializer_class = ClassificacaoClientesSerializer
    permission_classes = [IsAuthenticated]

class ClassificacaoClientesDetail(generics.RetrieveUpdateAPIView):
    queryset = ClassificacaoClientes.objects.all()
    serializer_class = ClassificacaoClientesUpdateSerializer
    permission_classes = [IsAuthenticated]

class ProdutosListCreate(generics.ListCreateAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
    permission_classes = [IsAuthenticated]

class ProdutosList(generics.ListCreateAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
    permission_classes = [IsAuthenticated]

class ProdutosDelete(generics.DestroyAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer
    permission_classes = [IsAuthenticated]

class ProdutosDetail(generics.RetrieveUpdateAPIView):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosUpdateSerializer
    permission_classes = [IsAuthenticated]

class TransportesListCreate(generics.ListCreateAPIView):
    queryset = Transportes.objects.all()
    serializer_class = TransportesSerializer
    permission_classes = [IsAuthenticated]

class TransportesList(generics.ListCreateAPIView):
    queryset = Transportes.objects.all()
    serializer_class = TransportesSerializer
    permission_classes = [IsAuthenticated]

class TransportesDelete(generics.DestroyAPIView):
    queryset = Transportes.objects.all()
    serializer_class = TransportesSerializer
    permission_classes = [IsAuthenticated]

class TransportesDetail(generics.RetrieveUpdateAPIView):
    queryset = Transportes.objects.all()
    serializer_class = TransportesUpdateSerializer
    permission_classes = [IsAuthenticated]

class TipoTransportesListCreate(generics.ListCreateAPIView):
    queryset = TipoTransportes.objects.all()
    serializer_class = TipoTransportesSerializer
    permission_classes = [IsAuthenticated]

class TipoTransportesList(generics.ListCreateAPIView):
    queryset = TipoTransportes.objects.all()
    serializer_class = TipoTransportesSerializer
    permission_classes = [IsAuthenticated]

class TipoTransportesDelete(generics.DestroyAPIView):
    queryset = TipoTransportes.objects.all()
    serializer_class = TipoTransportesSerializer
    permission_classes = [IsAuthenticated]

class TipoTransportesDetail(generics.RetrieveUpdateAPIView):
    queryset = TipoTransportes.objects.all()
    serializer_class = TipoTransportesUpdateSerializer
    permission_classes = [IsAuthenticated]

class VendedoresListCreate(generics.ListCreateAPIView):
    queryset = Vendedores.objects.all()
    serializer_class = VendedoresSerializer
    permission_classes = [IsAuthenticated]

class VendedoresList(generics.ListCreateAPIView):
    queryset = Vendedores.objects.all()
    serializer_class = VendedoresSerializer
    permission_classes = [IsAuthenticated]

class VendedoresDelete(generics.DestroyAPIView):
    queryset = Vendedores.objects.all()
    serializer_class = VendedoresSerializer
    permission_classes = [IsAuthenticated]

class VendedoresDetail(generics.RetrieveUpdateAPIView):
    queryset = Vendedores.objects.all()
    serializer_class = VendedoresUpdateSerializer
    permission_classes = [IsAuthenticated]

class FornecedoresListCreate(generics.ListCreateAPIView):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresSerializer
    permission_classes = [IsAuthenticated]

class FornecedoresList(generics.ListCreateAPIView):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresSerializer
    permission_classes = [IsAuthenticated]

class FornecedoresDelete(generics.DestroyAPIView):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresSerializer
    permission_classes = [IsAuthenticated]

class FornecedoresDetail(generics.RetrieveUpdateAPIView):
    queryset = Fornecedores.objects.all()
    serializer_class = FornecedoresUpdateSerializer
    permission_classes = [IsAuthenticated]

class TabelaPrecosListCreate(generics.ListCreateAPIView):
    queryset = TabelaPrecos.objects.all()
    serializer_class = TabelaPrecosSerializer
    permission_classes = [IsAuthenticated]

class TabelaPrecosList(generics.ListCreateAPIView):
    queryset = TabelaPrecos.objects.all()
    serializer_class = TabelaPrecosSerializer
    permission_classes = [IsAuthenticated]

class TabelaPrecosDelete(generics.DestroyAPIView):
    queryset = TabelaPrecos.objects.all()
    serializer_class = TabelaPrecosSerializer
    permission_classes = [IsAuthenticated]

class TabelaPrecosDetail(generics.RetrieveUpdateAPIView):
    queryset = TabelaPrecos.objects.all()
    serializer_class = TabelaPrecosUpdateSerializer
    permission_classes = [IsAuthenticated]

class PedidosListCreate(generics.ListCreateAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
    permission_classes = [IsAuthenticated]

class PedidosList(generics.ListCreateAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
    permission_classes = [IsAuthenticated]

class PedidosDelete(generics.DestroyAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
    permission_classes = [IsAuthenticated]

class PedidosDetail(generics.RetrieveUpdateAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosUpdateSerializer
    permission_classes = [IsAuthenticated]

class OrcamentosListCreate(generics.ListCreateAPIView):
    queryset = Orcamentos.objects.all()
    serializer_class = OrcamentosSerializer
    permission_classes = [IsAuthenticated]

class OrcamentosList(generics.ListCreateAPIView):
    queryset = Orcamentos.objects.all()
    serializer_class = OrcamentosSerializer
    permission_classes = [IsAuthenticated]

class OrcamentosDelete(generics.DestroyAPIView):
    queryset = Orcamentos.objects.all()
    serializer_class = OrcamentosSerializer
    permission_classes = [IsAuthenticated]

class OrcamentosDetail(generics.RetrieveUpdateAPIView):
    queryset = Orcamentos.objects.all()
    serializer_class = OrcamentosUpdateSerializer
    permission_classes = [IsAuthenticated]

class PesquisasListCreate(generics.ListCreateAPIView):
    queryset = Pesquisas.objects.all()
    serializer_class = PesquisasSerializer
    permission_classes = [IsAuthenticated]

class PesquisasList(generics.ListCreateAPIView):
    queryset = Pesquisas.objects.all()
    serializer_class = PesquisasSerializer
    permission_classes = [IsAuthenticated]

class PesquisasDelete(generics.DestroyAPIView):
    queryset = Pesquisas.objects.all()
    serializer_class = PesquisasSerializer
    permission_classes = [IsAuthenticated]

class PesquisasDetail(generics.RetrieveUpdateAPIView):
    queryset = Pesquisas.objects.all()
    serializer_class = PesquisasUpdateSerializer
    permission_classes = [IsAuthenticated]

class CidadesListCreate(generics.ListCreateAPIView):
    queryset = Cidades.objects.all()
    serializer_class = CidadesSerializer
    permission_classes = [IsAuthenticated]

class EstadosListCreate(generics.ListCreateAPIView):
    queryset = Estados.objects.all()
    serializer_class = EstadosSerializer
    permission_classes = [IsAuthenticated]