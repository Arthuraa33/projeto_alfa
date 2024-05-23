from django.test import TestCase

from ..models import Tarefas

class TarefasTestCase(TestCase):

    def setUp(self):
        Tarefas.objects.create(
            tarefa_nome='ligar',
            cliente_id = 0,
            tipo_tarefa_id = 0,
            pesquisa_id = 0,
            pedido_id = 0,
            status_tarefa_id = 0,
            outro_motivo_negocio_perdido = 0,
            criador_tarefa = 0,
            responsavel_tarefa = 0,
            inicio_tarefa = '2024-05-12T18:01:00-03:00',
            fim_tarefa = '2024-05-13T18:01:00-03:00'
        )

    def test_retorno_tarefa(self):
        tarefa_1 = Tarefas.objects.get(tarefa_id=1)
        self.assertEquals(tarefa_1.__str__(), '1')

