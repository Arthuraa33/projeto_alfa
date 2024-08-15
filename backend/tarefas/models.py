from django.db import models
from api.models import (Clientes,
                        Pesquisas,
                        Pedidos,
                        Vendedores,
                        User
                        )

class StatusTarefas(models.Model):
    status_tarefa_id = models.AutoField(primary_key=True)
    pedido_fechado = models.BooleanField(default=False)
    status_nome = models.CharField(null=True, max_length=100)
    status_ordem = models.IntegerField(null=True)
    
    def __str__(self):
        return str(self.status_tarefa_id)

class TipoTarefas(models.Model):
    tipo_tarefa_id = models.AutoField(primary_key=True)
    tipo_tarefa_nome = models.CharField(null=True, max_length=100)
    
    def __str__(self):
        return str(self.tipo_tarefa_id)

class Tarefas(models.Model):
    tarefa_id = models.AutoField(primary_key=True)
    tarefa_nome = models.CharField(null=True, max_length=100)
    cliente_id = models.ForeignKey(Clientes, default=0, on_delete=models.CASCADE)
    pesquisa_id = models.ForeignKey(Pesquisas, null=True, on_delete=models.CASCADE)
    pedido_id = models.ForeignKey(Pedidos, null=True, on_delete=models.CASCADE)
    tipo_tarefa_id = models.ForeignKey(TipoTarefas, default=0, on_delete=models.CASCADE)
    status_tarefa_id = models.ForeignKey(StatusTarefas, default=0, on_delete=models.CASCADE)
    outro_motivo_negocio_perdido = models.CharField(null=True, max_length=255)
    criador_tarefa = models.ForeignKey(User, null=True, on_delete=models.CASCADE, related_name="responsavel_tarefa")
    vendedor_id = models.ForeignKey(Vendedores, default=0, on_delete=models.CASCADE)
    inicio_tarefa = models.DateTimeField(null=True)
    fim_tarefa = models.DateTimeField(null=True)
    registro_tarefa = models.DateTimeField(null=True, auto_now_add=True)

    def __str__(self):
        return str(self.tarefa_id)
    
class TarefasAtividades(models.Model):
    tarefa_atividade_id = models.AutoField(primary_key=True)
    tarefa_id = models.ForeignKey(Tarefas, default=0, on_delete=models.CASCADE)
    tipo_tarefa_id = models.ForeignKey(TipoTarefas, default=0, on_delete=models.CASCADE)
    atividade_realizada = models.CharField(null=True, max_length=255)
    usuario_atividade = models.ForeignKey(User, on_delete=models.CASCADE, related_name="responsavel_atividade")
    registro_atividade = models.DateTimeField(null=True, auto_now_add=True)

    def __str__(self):
        return str(self.tarefa_atividade_id)