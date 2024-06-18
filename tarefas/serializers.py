from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Tarefas, TipoTarefas, StatusTarefas, TarefasAtividades

class TarefasSerializer(serializers.ModelSerializer):
    cliente_nome = serializers.SerializerMethodField()

    class Meta:
        model = Tarefas
        fields = '__all__'
        read_only_fields = ('criador_tarefa', 'cliente_nome')
    
    def get_cliente_nome(self, obj):
        return obj.cliente_id.cliente_nome

class TarefasUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarefas
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.tarefa_nome = validated_data.get('tarefa_nome', instance.tarefa_nome)
        instance.cliente_id = validated_data.get('cliente_id', instance.cliente_id)
        instance.tipo_tarefa_id = validated_data.get('tipo_tarefa_id', instance.tipo_tarefa_id)
        instance.pesquisa_id = validated_data.get('pesquisa_id', instance.pesquisa_id)
        instance.pedido_id = validated_data.get('pedido_id', instance.pedido_id)
        instance.status_tarefa_id = validated_data.get('status_tarefa_id', instance.status_tarefa_id)
        instance.outro_motivo_negocio_perdido = validated_data.get('outro_motivo_negocio_perdido', instance.outro_motivo_negocio_perdido)
        instance.inicio_tarefa = validated_data.get('inicio_tarefa', instance.inicio_tarefa)
        instance.fim_tarefa = validated_data.get('fim_tarefa', instance.fim_tarefa)

        instance.save()
        return instance
    
class TipoTarefasSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoTarefas
        fields = '__all__'

class TipoTarefasUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoTarefas
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.tipo_tarefa_nome = validated_data.get('tipo_tarefa_nome', instance.tipo_tarefa_nome)

        instance.save()
        return instance
    

class StatusTarefasSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusTarefas
        fields = '__all__'

class StatusTarefasUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusTarefas
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.pedido_fechado = validated_data.get('pedido_fechado', instance.pedido_fechado)
        instance.status_descricao = validated_data.get('status_descricao', instance.status_descricao)

        instance.save()
        return instance
    
class TarefasAtividadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TarefasAtividades
        fields = '__all__'

class TarefasAtividadesUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TarefasAtividades
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.tarefa_id = validated_data.get('tarefa_id', instance.tarefa_id)
        instance.tipo_tarefa_id = validated_data.get('tipo_tarefa_id', instance.tipo_tarefa_id)
        instance.atividade_realizada = validated_data.get('atividade_realizada', instance.atividade_realizada)

        instance.save()
        return instance