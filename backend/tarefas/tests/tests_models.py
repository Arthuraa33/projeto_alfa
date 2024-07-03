import pytest
from django.test import TestCase
from django.contrib.auth.models import User
from api.models import (
    Clientes, Pesquisas, Pedidos, Vendedores, AreasVenda, ClassificacaoClientes, Marcas, Transportes, TipoTransportes, Produtos
)
from tarefas.models import StatusTarefas, TipoTarefas, Tarefas, TarefasAtividades

class StatusTarefasModelTest(TestCase):

    def setUp(self):
        StatusTarefas.objects.create(status_nome='Status Teste', pedido_fechado=False)

    def test_status_tarefas_str(self):
        status_tarefa = StatusTarefas.objects.get(status_nome='Status Teste')
        self.assertEqual(str(status_tarefa), str(status_tarefa.status_tarefa_id))

class TipoTarefasModelTest(TestCase):

    def setUp(self):
        TipoTarefas.objects.create(tipo_tarefa_nome='Tipo Tarefa Teste')

    def test_tipo_tarefas_str(self):
        tipo_tarefa = TipoTarefas.objects.get(tipo_tarefa_nome='Tipo Tarefa Teste')
        self.assertEqual(str(tipo_tarefa), str(tipo_tarefa.tipo_tarefa_id))

class TarefasModelTest(TestCase):

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
        vendedor = Vendedores.objects.create(vendedor_nome='Vendedor Teste', area_vendedor='Area Teste', comissao_padrao_percentual=10.0)
        status_tarefa = StatusTarefas.objects.create(status_nome='Status Teste', pedido_fechado=False)
        tipo_tarefa = TipoTarefas.objects.create(tipo_tarefa_nome='Tipo Tarefa Teste')
        usuario = User.objects.create_user(username='user_test', password='test1234')
        Tarefas.objects.create(
            tarefa_nome='Tarefa Teste',
            cliente_id=cliente,
            tipo_tarefa_id=tipo_tarefa,
            status_tarefa_id=status_tarefa,
            criador_tarefa=usuario,
            vendedor_id=vendedor,
            inicio_tarefa='2024-05-23T23:07:57.357199-03:00',
            fim_tarefa='2024-05-24T23:07:57.357199-03:00'
        )

    def test_tarefas_str(self):
        tarefa = Tarefas.objects.get(tarefa_nome='Tarefa Teste')
        self.assertEqual(str(tarefa), str(tarefa.tarefa_id))

class TarefasAtividadesModelTest(TestCase):

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
        vendedor = Vendedores.objects.create(vendedor_nome='Vendedor Teste', area_vendedor='Area Teste', comissao_padrao_percentual=10.0)
        status_tarefa = StatusTarefas.objects.create(status_nome='Status Teste', pedido_fechado=False)
        tipo_tarefa = TipoTarefas.objects.create(tipo_tarefa_nome='Tipo Tarefa Teste')
        usuario = User.objects.create_user(username='user_test', password='test1234')
        tarefa = Tarefas.objects.create(
            tarefa_nome='Tarefa Teste',
            cliente_id=cliente,
            tipo_tarefa_id=tipo_tarefa,
            status_tarefa_id=status_tarefa,
            criador_tarefa=usuario,
            vendedor_id=vendedor,
            inicio_tarefa='2024-05-23T23:07:57.357199-03:00',
            fim_tarefa='2024-05-24T23:07:57.357199-03:00'
        )
        TarefasAtividades.objects.create(
            tarefa_id=tarefa,
            tipo_tarefa_id=tipo_tarefa,
            atividade_realizada='Atividade Teste',
            usuario_atividade=usuario
        )

    def test_tarefas_atividades_str(self):
        tarefa_atividade = TarefasAtividades.objects.get(atividade_realizada='Atividade Teste')
        self.assertEqual(str(tarefa_atividade), str(tarefa_atividade.tarefa_atividade_id))
