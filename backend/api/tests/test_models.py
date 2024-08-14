import pytest
from django.test import TestCase
from ..models import (
    AreasVenda, ClassificacaoClientes, Clientes, Marcas, Produtos, Transportes, TipoTransportes,
    Vendedores, Fornecedores, TabelaPrecos, Pedidos, Orcamentos, Pesquisas, ItensOrcamento
)

class AreasVendaModelTest(TestCase):

    def setUp(self):
        AreasVenda.objects.create(area_nome='Area Teste')

    def test_areas_venda_str(self):
        area = AreasVenda.objects.get(area_nome='Area Teste')
        self.assertEqual(str(area), str(area.area_id))

class ClassificacaoClientesModelTest(TestCase):

    def setUp(self):
        ClassificacaoClientes.objects.create(classificacao_nome='Classificação Teste')

    def test_classificacao_clientes_str(self):
        classificacao = ClassificacaoClientes.objects.get(classificacao_nome='Classificação Teste')
        self.assertEqual(str(classificacao), str(classificacao.classificacao_id))

class ClientesModelTest(TestCase):

    def setUp(self):
        area = AreasVenda.objects.create(area_nome='Area Teste')
        classificacao = ClassificacaoClientes.objects.create(classificacao_nome='Classificação Teste')
        Clientes.objects.create(
            cliente_nome='Cliente Teste', 
            contato='Contato Teste', 
            aniversario='2024-05-23T23:07:57.357199-03:00',
            telefone='123456789', 
            email='teste@teste.com', 
            cnpj='12345678901234', 
            rua='Rua Teste', 
            numero_rua='123', 
            complemento_rua='Apto 1', 
            ponto_referencia='Próximo ao mercado', 
            bairro='Bairro Teste', 
            cidade='Cidade Teste', 
            estado='Estado Teste', 
            area_id=area, 
            classificacao_id=classificacao, 
            observacao='Observação Teste'
        )

    def test_clientes_str(self):
        cliente = Clientes.objects.get(cliente_nome='Cliente Teste')
        self.assertEqual(str(cliente), str(cliente.cliente_id))

class MarcasModelTest(TestCase):

    def setUp(self):
        Marcas.objects.create(marca_nome='Marca Teste')

    def test_marcas_str(self):
        marca = Marcas.objects.get(marca_nome='Marca Teste')
        self.assertEqual(str(marca), str(marca.marca_id))

class ProdutosModelTest(TestCase):

    def setUp(self):
        marca = Marcas.objects.create(marca_nome='Marca Teste')
        Produtos.objects.create(produto_nome='Produto Teste', marca_id=marca, peso_produto=10.5, embalagem_produto='Caixa')

    def test_produtos_str(self):
        produto = Produtos.objects.get(produto_nome='Produto Teste')
        self.assertEqual(str(produto), str(produto.produto_id))

class TransportesModelTest(TestCase):

    def setUp(self):
        Transportes.objects.create(transporte_nome='Transporte Teste', capacidade_kg=1000, capacidade_un=100, preco_km=5.5)

    def test_transportes_str(self):
        transporte = Transportes.objects.get(transporte_nome='Transporte Teste')
        self.assertEqual(str(transporte), str(transporte.transporte_id))

class TipoTransportesModelTest(TestCase):

    def setUp(self):
        TipoTransportes.objects.create(tipo_transporte_nome='Tipo Transporte Teste', cif=True, fob=False, carregamento=True)

    def test_tipo_transportes_str(self):
        tipo_transporte = TipoTransportes.objects.get(tipo_transporte_nome='Tipo Transporte Teste')
        self.assertEqual(str(tipo_transporte), str(tipo_transporte.tipo_transporte_id))

class VendedoresModelTest(TestCase):

    def setUp(self):
        Vendedores.objects.create(vendedor_nome='Vendedor Teste', area_vendedor='Area Teste', comissao_padrao_percentual=10.0)

    def test_vendedores_str(self):
        vendedor = Vendedores.objects.get(vendedor_nome='Vendedor Teste')
        self.assertEqual(str(vendedor), str(vendedor.vendedor_id))

class FornecedoresModelTest(TestCase):

    def setUp(self):
        Fornecedores.objects.create(
            fornecedor_nome='Fornecedor Teste', 
            contato='Contato Teste', 
            aniversario='2024-05-23T23:07:57.357199-03:00',
            telefone='123456789', 
            email='teste@teste.com', 
            cnpj='12345678901234', 
            rua='Rua Teste', 
            numero_rua='123', 
            complemento_rua='Apto 1', 
            ponto_referencia='Próximo ao mercado', 
            bairro='Bairro Teste', 
            cidade='Cidade Teste', 
            estado='Estado Teste', 
            observacao='Observação Teste'
        )

    def test_fornecedores_str(self):
        fornecedor = Fornecedores.objects.get(fornecedor_nome='Fornecedor Teste')
        self.assertEqual(str(fornecedor), str(fornecedor.fornecedor_id))

class TabelaPrecosModelTest(TestCase):

    def setUp(self):
        fornecedor = Fornecedores.objects.create(fornecedor_nome='Fornecedor Teste')
        produto = Produtos.objects.create(produto_nome='Produto Teste', marca_id=Marcas.objects.create(marca_nome='Marca Teste'), peso_produto=10.5, embalagem_produto='Caixa')
        TabelaPrecos.objects.create(fornecedor_id=fornecedor, produto_id=produto, preco_compra=100.0, preco_sugestao=120.0)

    def test_tabela_precos_str(self):
        tabela_preco = TabelaPrecos.objects.get(preco_compra=100.0)
        self.assertEqual(str(tabela_preco), str(tabela_preco.preco_id))

class PedidosModelTest(TestCase):

    def setUp(self):
        area = AreasVenda.objects.create(area_nome='Area Teste')
        classificacao = ClassificacaoClientes.objects.create(classificacao_nome='Classificação Teste')
        cliente = Clientes.objects.create(
            cliente_nome='Cliente Teste', 
            contato='Contato Teste', 
            aniversario='2024-05-23T23:07:57.357199-03:00',
            telefone='123456789', 
            email='teste@teste.com', 
            cnpj='12345678901234', 
            rua='Rua Teste', 
            numero_rua='123', 
            complemento_rua='Apto 1', 
            ponto_referencia='Próximo ao mercado', 
            bairro='Bairro Teste', 
            cidade='Cidade Teste', 
            estado='Estado Teste', 
            area_id=area, 
            classificacao_id=classificacao, 
            observacao='Observação Teste'
        )
        marca = Marcas.objects.create(marca_nome='Marca Teste')
        produto = Produtos.objects.create(produto_nome='Produto Teste', marca_id=marca, peso_produto=10.5, embalagem_produto='Caixa')
        transporte = Transportes.objects.create(transporte_nome='Transporte Teste', capacidade_kg=1000, capacidade_un=100, preco_km=5.5)
        tipo_transporte = TipoTransportes.objects.create(tipo_transporte_nome='Tipo Transporte Teste', cif=True, fob=False, carregamento=True)
        vendedor = Vendedores.objects.create(vendedor_nome='Vendedor Teste', area_vendedor='Area Teste', comissao_padrao_percentual=10.0)
        Pedidos.objects.create(
            cliente_id=cliente,
            produto_id=produto,
            transporte_id=transporte,
            tipo_transporte_id=tipo_transporte,
            vendedor_id=vendedor,
            pedido_comissao=10.0,
            pedido_quantidade=100,
            pedido_data='2024-05-23T23:07:57.357199-03:00',
            pedido_condicao_pagamento='À vista',
            pedido_valor=1000.0
        )

    def test_pedidos_str(self):
        pedido = Pedidos.objects.get(pedido_valor=1000.0)
        self.assertEqual(str(pedido), str(pedido.pedido_id))

class OrcamentosModelTest(TestCase):

    def setUp(self):
        area = AreasVenda.objects.create(area_nome='Area Teste')
        classificacao = ClassificacaoClientes.objects.create(classificacao_nome='Classificação Teste')
        cliente = Clientes.objects.create(
            cliente_nome='Cliente Teste', 
            contato='Contato Teste', 
            aniversario='2024-05-23T23:07:57.357199-03:00',
            telefone='123456789', 
            email='teste@teste.com', 
            cnpj='12345678901234', 
            rua='Rua Teste', 
            numero_rua='123', 
            complemento_rua='Apto 1', 
            ponto_referencia='Próximo ao mercado', 
            bairro='Bairro Teste', 
            cidade='Cidade Teste', 
            estado='Estado Teste', 
            area_id=area, 
            classificacao_id=classificacao, 
            observacao='Observação Teste'
        )
        transporte = Transportes.objects.create(transporte_nome='Transporte Teste', capacidade_kg=1000, capacidade_un=100, preco_km=5.5)
        tipo_transporte = TipoTransportes.objects.create(tipo_transporte_nome='Tipo Transporte Teste', cif=True, fob=False, carregamento=True)
        vendedor = Vendedores.objects.create(vendedor_nome='Vendedor Teste', area_vendedor='Area Teste', comissao_padrao_percentual=10.0)
        Orcamentos.objects.create(cliente_id=cliente, transporte_id=transporte, tipo_transporte_id=tipo_transporte, vendedor_id=vendedor)

    def test_orcamentos_str(self):
        orcamento = Orcamentos.objects.get(cliente_id__cliente_nome='Cliente Teste')
        self.assertEqual(str(orcamento), str(orcamento.orcamento_id))

class PesquisasModelTest(TestCase):

    def setUp(self):
        area = AreasVenda.objects.create(area_nome='Area Teste')
        classificacao = ClassificacaoClientes.objects.create(classificacao_nome='Classificação Teste')
        cliente = Clientes.objects.create(
            cliente_nome='Cliente Teste', 
            contato='Contato Teste', 
            aniversario='2024-05-23T23:07:57.357199-03:00',
            telefone='123456789', 
            email='teste@teste.com', 
            cnpj='12345678901234', 
            rua='Rua Teste', 
            numero_rua='123', 
            complemento_rua='Apto 1', 
            ponto_referencia='Próximo ao mercado', 
            bairro='Bairro Teste', 
            cidade='Cidade Teste', 
            estado='Estado Teste', 
            area_id=area, 
            classificacao_id=classificacao, 
            observacao='Observação Teste'
        )
        marca = Marcas.objects.create(marca_nome='Marca Teste')
        transporte = Transportes.objects.create(transporte_nome='Transporte Teste', capacidade_kg=1000, capacidade_un=100, preco_km=5.5)
        tipo_transporte = TipoTransportes.objects.create(tipo_transporte_nome='Tipo Transporte Teste', cif=True, fob=False, carregamento=True)
        Pesquisas.objects.create(cliente_id=cliente, marca_id=marca, transporte_id=transporte, tipo_transporte_id=tipo_transporte, pesquisa_preco=100.0, pesquisa_preco_sugerido=120.0)

    def test_pesquisas_str(self):
        pesquisa = Pesquisas.objects.get(pesquisa_preco=100.0)
        self.assertEqual(str(pesquisa), str(pesquisa.pesquisa_id))

class ItensOrcamentoModelTest(TestCase):

    def setUp(self):
        area = AreasVenda.objects.create(area_nome='Area Teste')
        classificacao = ClassificacaoClientes.objects.create(classificacao_nome='Classificação Teste')
        cliente = Clientes.objects.create(
            cliente_nome='Cliente Teste', 
            contato='Contato Teste', 
            aniversario='2024-05-23T23:07:57.357199-03:00',
            telefone='123456789', 
            email='teste@teste.com', 
            cnpj='12345678901234', 
            rua='Rua Teste', 
            numero_rua='123', 
            complemento_rua='Apto 1', 
            ponto_referencia='Próximo ao mercado', 
            bairro='Bairro Teste', 
            cidade='Cidade Teste', 
            estado='Estado Teste', 
            area_id=area, 
            classificacao_id=classificacao, 
            observacao='Observação Teste'
        )
        transporte = Transportes.objects.create(transporte_nome='Transporte Teste', capacidade_kg=1000, capacidade_un=100, preco_km=5.5)
        tipo_transporte = TipoTransportes.objects.create(tipo_transporte_nome='Tipo Transporte Teste', cif=True, fob=False, carregamento=True)
        vendedor = Vendedores.objects.create(vendedor_nome='Vendedor Teste', area_vendedor='Area Teste', comissao_padrao_percentual=10.0)
        orcamento = Orcamentos.objects.create(cliente_id=cliente, transporte_id=transporte, tipo_transporte_id=tipo_transporte, vendedor_id=vendedor)
        produto = Produtos.objects.create(produto_nome='Produto Teste', marca_id=Marcas.objects.create(marca_nome='Marca Teste'), peso_produto=10.5, embalagem_produto='Caixa')
        ItensOrcamento.objects.create(orcamento_id=orcamento, produto_id=produto, orcamento_quantidade=10)

    def test_itens_orcamento_str(self):
        item_orcamento = ItensOrcamento.objects.get(orcamento_quantidade=10)
        self.assertEqual(str(item_orcamento), str(item_orcamento.item_orcamento_id))

