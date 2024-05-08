from django.urls import path
from . import views

urlpatterns = [
    path("gestao/cliente/delete/<int:pk>/", views.ClientesDelete.as_view(), name="delete-cliente"),
    path("gestao/cliente/", views.ClientesList.as_view(), name="gestao-cliente"),
    path("cadastro/cliente/", views.ClientesListCreate.as_view(), name="cliente-list"),
    path("cadastro/marca/", views.MarcasListCreate.as_view(), name="marca-list"),
    path("cadastro/produto/", views.ProdutosListCreate.as_view(), name="produto-list"),
    path("cadastro/transporte/", views.TransportesListCreate.as_view(), name="transporte-list"),
    path("cadastro/tipotransporte/", views.TipoTransportesListCreate.as_view(), name="tipotransporte-list"),
    path("cadastro/vendedor/", views.VendedoresListCreate.as_view(), name="vendedor-list"),
    path("cadastro/fornecedor/", views.FornecedoresListCreate.as_view(), name="fornecedor-list"),
    path("gestao/fornecedor/delete/<int:pk>/", views.FornecedoresDelete.as_view(), name="delete-fornecedor"),
    path("cadastro/tabelaprecos/", views.TabelaPrecosListCreate.as_view(), name="tabelaprecos-list"),
    path("cadastro/pedido/", views.PedidosListCreate.as_view(), name="pedido-list"),
    path("cadastro/orcamento/", views.OrcamentosListCreate.as_view(), name="orcamento-list"),
    path("cadastro/pesquisa/", views.PesquisasListCreate.as_view(), name="pesquisa-list"),

]