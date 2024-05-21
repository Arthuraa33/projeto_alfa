from django.db import models
from api.models import Clientes



class Tarefas(models.Model):
    tarefa_id = models.AutoField(primary_key=True)
    tarefa_nome = models.CharField(null=True, max_length=100)
    cliente_id = models.ForeignKey(Clientes, default=0, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.tarefa_id)