from django.contrib.auth.models import User
from rest_framework import serializers
from .models import (
                     Clientes, 
                     AreasVenda,
                     ClassificacaoClientes,
                     Marcas, 
                     Produtos, 
                     Transportes, 
                     TipoTransportes, 
                     Vendedores, 
                     Pedidos, 
                     Fornecedores, 
                     TabelaPrecos,
                     Orcamentos,
                     Pesquisas
                     )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = '__all__'

class ClientesUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = '__all__'

    def update(self, instance, validated_data):

        instance.cliente_nome = validated_data.get('cliente_nome', instance.cliente_nome)
        instance.contato = validated_data.get('contato', instance.contato)
        instance.aniversario = validated_data.get('aniversario', instance.aniversario)
        instance.telefone = validated_data.get('telefone', instance.telefone)
        instance.email = validated_data.get('email', instance.email)
        instance.cnpj = validated_data.get('cnpj', instance.cnpj)
        instance.rua = validated_data.get('rua', instance.rua)
        instance.numero_rua = validated_data.get('numero_rua', instance.numero_rua)
        instance.complemento_rua = validated_data.get('complemento_rua', instance.complemento_rua)
        instance.ponto_referencia = validated_data.get('ponto_referencia', instance.ponto_referencia)
        instance.bairro = validated_data.get('bairro', instance.bairro)
        instance.cidade = validated_data.get('cidade', instance.cidade)
        instance.estado = validated_data.get('estado', instance.estado)
        instance.area_id = validated_data.get('area_id', instance.area_id)
        instance.classificacao_id = validated_data.get('classificacao_id', instance.classificacao_id)
        instance.observacao = validated_data.get('observacao', instance.observacao)

        instance.save()
        return instance

class AreasVendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AreasVenda
        fields = '__all__'

class AreasVendaUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AreasVenda
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.area_nome = validated_data.get('area_nome', instance.area_nome)
        
        instance.save()
        return instance

class ClassificacaoClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassificacaoClientes
        fields = '__all__'

class ClassificacaoClientesUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassificacaoClientes
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.classificacao_nome = validated_data.get('classificacao_nome', instance.classificacao_nome)

        instance.save()
        return instance

class MarcasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marcas
        fields = '__all__'

class MarcasUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marcas
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.marca_nome = validated_data.get('marca_nome', instance.marca_nome)

        instance.save()
        return instance

class ProdutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = '__all__'

class ProdutosUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.produto_nome = validated_data.get('produto_nome', instance.produto_nome)
        instance.marca_id = validated_data.get('marca_id', instance.marca_id)
        instance.peso_produto = validated_data.get('peso_produto', instance.peso_produto)
        instance.embalagem_produto = validated_data.get('embalagem_produto', instance.embalagem_produto)
        
        instance.save()
        return instance

class TransportesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transportes
        fields = '__all__'

class TransportesUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transportes
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.transporte_nome = validated_data.get('transporte_nome', instance.transporte_nome)
        instance.capacidade_kg = validated_data.get('capacidade_kg', instance.capacidade_kg)
        instance.capacidade_un = validated_data.get('capacidade_un', instance.capacidade_un)
        instance.preco_km = validated_data.get('preco_km', instance.preco_km)

        instance.save()
        return instance

class TipoTransportesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoTransportes
        fields = '__all__'

class TipoTransportesUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoTransportes
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.tipo_transporte_nome = validated_data.get('tipo_transporte_nome', instance.tipo_transporte_nome)
        instance.cif = validated_data.get('cif', instance.cif)
        instance.fob = validated_data.get('fob', instance.fob)
        instance.carregamento = validated_data.get('carregamento', instance.carregamento)

        instance.save()
        return instance

class VendedoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendedores
        fields = '__all__'

class VendedoresUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendedores
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.vendedor_nome = validated_data.get('vendedor_nome', instance.vendedor_nome)
        instance.area_vendedor = validated_data.get('area_vendedor', instance.area_vendedor)
        instance.comissao_padrao_percentual = validated_data.get('comissao_padrao_percentual', instance.comissao_padrao_percentual)

        instance.save()
        return instance

class FornecedoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fornecedores
        fields = '__all__'

class FornecedoresUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fornecedores
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.fornecedor_nome = validated_data.get('fornecedor_nome', instance.fornecedor_nome)
        instance.contato = validated_data.get('contato', instance.contato)
        instance.aniversario = validated_data.get('aniversario', instance.aniversario)
        instance.telefone = validated_data.get('telefone', instance.telefone)
        instance.email = validated_data.get('email', instance.email)
        instance.cnpj = validated_data.get('cnpj', instance.cnpj)
        instance.rua = validated_data.get('rua', instance.rua)
        instance.numero_rua = validated_data.get('numero_rua', instance.numero_rua)
        instance.complemento_rua = validated_data.get('complemento_rua', instance.complemento_rua)
        instance.ponto_referencia = validated_data.get('ponto_referencia', instance.ponto_referencia)
        instance.bairro = validated_data.get('bairro', instance.bairro)
        instance.cidade = validated_data.get('cidade', instance.cidade)
        instance.estado = validated_data.get('estado', instance.estado)
        instance.observacao = validated_data.get('observacao', instance.observacao)

        instance.save()
        return instance

class TabelaPrecosSerializer(serializers.ModelSerializer):
    class Meta:
        model = TabelaPrecos
        fields = '__all__'

class TabelaPrecosUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TabelaPrecos
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.fornecedor_id = validated_data.get('fornecedor_id', instance.fornecedor_id)
        instance.produto_id = validated_data.get('produto_id', instance.produto_id)
        instance.preco_compra = validated_data.get('preco_compra', instance.preco_compra)
        instance.preco_sugestao = validated_data.get('preco_sugestao', instance.preco_sugestao)

        instance.save()
        return instance

class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = '__all__'

class PedidosUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.pedido_id = validated_data.get('pedido_id', instance.pedido_id)
        instance.cliente_id = validated_data.get('cliente_id', instance.cliente_id)
        instance.produto_id = validated_data.get('produto_id', instance.produto_id)
        instance.transporte_id = validated_data.get('transporte_id', instance.transporte_id)
        instance.tipo_transporte_id = validated_data.get('tipo_transporte_id', instance.tipo_transporte_id)
        instance.vendedor_id = validated_data.get('vendedor_id', instance.vendedor_id)
        instance.pedido_demisssao = validated_data.get('pedido_demisssao', instance.pedido_demisssao)
        instance.pedido_quantidade = validated_data.get('pedido_quantidade', instance.pedido_quantidade)
        instance.pedido_data = validated_data.get('pedido_data', instance.pedido_data)
        instance.pedido_data = validated_data.get('pedido_data', instance.pedido_data)
        instance.pedido_condicao_pagamento = validated_data.get('pedido_condicao_pagamento', instance.pedido_condicao_pagamento)
        instance.pedido_valor = validated_data.get('pedido_valor', instance.pedido_valor)

        instance.save()
        return instance

class OrcamentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orcamentos
        fields = '__all__'

class OrcamentosUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orcamentos
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.cliente_id = validated_data.get('cliente_id', instance.cliente_id)
        instance.transporte_id = validated_data.get('transporte_id', instance.transporte_id)
        instance.tipo_transporte_id = validated_data.get('tipo_transporte_id', instance.tipo_transporte_id)
        instance.vendedor_id = validated_data.get('vendedor_id', instance.vendedor_id)

        instance.save()
        return instance

class PesquisasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pesquisas
        fields = '__all__'

class PesquisasUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pesquisas
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.cliente_id = validated_data.get('cliente_id', instance.cliente_id)
        instance.marca_id = validated_data.get('marca_id', instance.marca_id)
        instance.transporte_id = validated_data.get('transporte_id', instance.transporte_id)
        instance.tipo_transporte_id = validated_data.get('tipo_transporte_id', instance.tipo_transporte_id)
        instance.pesquisa_preco = validated_data.get('pesquisa_preco', instance.pesquisa_preco)
        instance.pesquisa_preco_sugerido = validated_data.get('pesquisa_preco_sugerido', instance.pesquisa_preco_sugerido)

        instance.save()
        return instance
