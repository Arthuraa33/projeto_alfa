from django.urls import path
from . import views

urlpatterns = [
    path("gestao/cliente/delete/<int:pk>/", views.ClientesDelete.as_view(), name="delete-cliente"),
    path("gestao/cliente/<int:pk>/", views.ClientesDetail.as_view(), name='clientes-detail'),
    path("gestao/cliente/", views.ClientesList.as_view(), name="gestao-cliente"),
    path("cadastro/cliente/", views.ClientesListCreate.as_view(), name="cliente-list"),

    path("gestao/marca/delete/<int:pk>/", views.MarcasDelete.as_view(), name="delete-marca"),
    path("gestao/marca/<int:pk>/", views.MarcasDetail.as_view(), name='marcas-detail'),
    path("gestao/marca/", views.MarcasList.as_view(), name="gestao-marca"),
    path("cadastro/marca/", views.MarcasListCreate.as_view(), name="marca-list"),

    path("gestao/produto/delete/<int:pk>/", views.ProdutosDelete.as_view(), name="delete-produto"),
    path("gestao/produto/<int:pk>/", views.ProdutosDetail.as_view(), name='produtos-detail'),
    path("gestao/produto/", views.ProdutosList.as_view(), name="gestao-produto"),
    path("cadastro/produto/", views.ProdutosListCreate.as_view(), name="produto-list"),

    path("gestao/transporte/delete/<int:pk>/", views.TransportesDelete.as_view(), name="delete-transporte"),
    path("gestao/transporte/<int:pk>/", views.TransportesDetail.as_view(), name='transportes-detail'),
    path("gestao/transporte/", views.TransportesList.as_view(), name="gestao-transporte"),
    path("cadastro/transporte/", views.TransportesListCreate.as_view(), name="transporte-list"),

    path("gestao/tipotransporte/delete/<int:pk>/", views.TipoTransportesDelete.as_view(), name="delete-tipotransporte"),
    path("gestao/tipotransporte/<int:pk>/", views.TipoTransportesDetail.as_view(), name='tipotransportes-detail'),
    path("gestao/tipotransporte/", views.TipoTransportesList.as_view(), name="gestao-tipotransporte"),
    path("cadastro/tipotransporte/", views.TipoTransportesListCreate.as_view(), name="tipotransporte-list"),

    path("gestao/vendedor/delete/<int:pk>/", views.VendedoresDelete.as_view(), name="delete-vendedor"),
    path("gestao/vendedor/<int:pk>/", views.VendedoresDetail.as_view(), name='vendedores-detail'),
    path("gestao/vendedor/", views.VendedoresList.as_view(), name="gestao-vendedor"),
    path("cadastro/vendedor/", views.VendedoresListCreate.as_view(), name="vendedor-list"),

    path("gestao/fornecedor/delete/<int:pk>/", views.FornecedoresDelete.as_view(), name="delete-fornecedor"),
    path("gestao/fornecedor/<int:pk>/", views.FornecedoresDetail.as_view(), name='fornecedores-detail'),
    path("gestao/fornecedor/", views.FornecedoresList.as_view(), name="gestao-fornecedor"),
    path("cadastro/fornecedor/", views.FornecedoresListCreate.as_view(), name="fornecedor-list"),

    path("gestao/tabelaprecos/delete/<int:pk>/", views.TabelaPrecosDelete.as_view(), name="delete-tabelaprecos"),
    path("gestao/tabelaprecos/<int:pk>/", views.TabelaPrecosDetail.as_view(), name='tabelaPrecos-detail'),
    path("gestao/tabelaprecos/", views.TabelaPrecosList.as_view(), name="gestao-tabelaprecos"),
    path("cadastro/tabelaprecos/", views.TabelaPrecosListCreate.as_view(), name="tabelaprecos-list"),

    path("gestao/pedido/delete/<int:pk>/", views.PedidosDelete.as_view(), name="delete-pedido"),
    path("gestao/pedido/<int:pk>/", views.PedidosDetail.as_view(), name='pedidos-detail'),
    path("gestao/pedido/", views.PedidosList.as_view(), name="gestao-pedido"),
    path("cadastro/pedido/", views.PedidosListCreate.as_view(), name="pedido-list"),

    path("gestao/orcamento/delete/<int:pk>/", views.OrcamentosDelete.as_view(), name="delete-orcamento"),
    path("gestao/orcamento/<int:pk>/", views.OrcamentosDetail.as_view(), name='orcamentos-detail'),
    path("gestao/orcamento/", views.OrcamentosList.as_view(), name="gestao-orcamento"),    
    path("cadastro/orcamento/", views.OrcamentosListCreate.as_view(), name="orcamento-list"),

    path("gestao/pesquisa/delete/<int:pk>/", views.PesquisasDelete.as_view(), name="delete-pesquisa"),
    path("gestao/pesquisa/<int:pk>/", views.PesquisasDetail.as_view(), name='pesquisas-detail'),
    path("gestao/pesquisa/", views.PesquisasList.as_view(), name="gestao-pesquisa"), 
    path("cadastro/pesquisa/", views.PesquisasListCreate.as_view(), name="pesquisa-list"),
    path("cadastro/areavenda/", views.AreasVendaListCreate.as_view(), name="area-list"),
    path("cadastro/classificacaocliente/", views.ClassificacaoClientesListCreate.as_view(), name="area-list"),

    path("gestao/areavenda/delete/<int:pk>/", views.AreasVendaDelete.as_view(), name="delete-areavenda"),
    path("gestao/areavenda/<int:pk>/", views.AreasVendaDetail.as_view(), name='areasVenda-detail'),
    path("gestao/areavenda/", views.AreasVendaList.as_view(), name="gestao-areavenda"), 
    path("cadastro/areavenda/", views.AreasVendaListCreate.as_view(), name="area-list"),

    path("gestao/classificacaocliente/delete/<int:pk>/", views.ClassificacaoClientesDelete.as_view(), name="delete-classificacaocliente"),
    path("gestao/classificacaocliente/<int:pk>/", views.ClassificacaoClientesDetail.as_view(), name='classificacaoclientes-detail'),
    path("gestao/classificacaocliente/", views.ClassificacaoClientesList.as_view(), name="gestao-classificacaocliente"),     
    path("cadastro/classificacaocliente/", views.ClassificacaoClientesListCreate.as_view(), name="area-list"),

    path("gestao/condicaopagamento/delete/<int:pk>/", views.CondicaoPagamentoDelete.as_view(), name="delete-condicaopagamento"),
    path("gestao/condicaopagamento/<int:pk>/", views.CondicaoPagamentoDetail.as_view(), name='condicaopagamentos-detail'),
    path("gestao/condicaopagamento/", views.CondicaoPagamentoList.as_view(), name="gestao-condicaopagamento"),
    path("cadastro/condicaopagamento/", views.CondicaoPagamentoListCreate.as_view(), name="condicaopagamento-list"),

    # path("cadastro/cidade/", views.CidadesListCreate.as_view(), name="cidade-list"),
    # path("cadastro/estado/", views.EstadosListCreate.as_view(), name="estado-list"),

]