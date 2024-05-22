from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Tarefas

class TarefasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarefas
        fields = '__all__'

class TarefasUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarefas
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.marca_nome = validated_data.get('marca_nome', instance.marca_nome)

        instance.save()
        return instance