from django.contrib.auth.models import User
from rest_framework import serializers
from .models import (Note, 
                     Clientes, 
                     Marcas, 
                     Produtos, 
                     Transportes, 
                     TipoTransportes, 
                     Vendedores, 
                     Pedidos, 
                     Fornecedores, 
                     TabelaPrecos,
                     Orcamentos)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = '__all__'

class MarcasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marcas
        fields = '__all__'

class ProdutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = '__all__'

class TransportesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transportes
        fields = '__all__'

class TipoTransportesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoTransportes
        fields = '__all__'

class VendedoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendedores
        fields = '__all__'

class FornecedoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fornecedores
        fields = '__all__'

class TabelaPrecosSerializer(serializers.ModelSerializer):
    class Meta:
        model = TabelaPrecos
        fields = '__all__'

class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = '__all__'

class OrcamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orcamentos
        fields = '__all__'

class PesquisasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orcamentos
        fields = '__all__'

