from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title

class Clientes(models.Model):
    cliente_id = models.AutoField(primary_key=True)
    cliente_nome = models.CharField(null=True, max_length=100)
    contato = models.CharField(null=True, max_length=100)
    aniversario = models.DateTimeField(null=True)
    telefone = models.CharField(null=True, max_length=100)
    email = models.CharField(null=True, max_length=100)
    cnpj = models.CharField(null=True, max_length=100)
    rua = models.CharField(null=True, max_length=200)
    numero_rua = models.CharField(null=True, max_length=100)
    complemento_rua = models.CharField(null=True, max_length=100)
    ponto_referencia = models.CharField(null=True, max_length=200)
    bairro = models.CharField(null=True, max_length=100)
    cidade = models.CharField(null=True, max_length=100)
    estado = models.CharField(null=True, max_length=100)
    observacao = models.TextField(null=True, max_length=200)
    data_cadastro = models.DateTimeField(null=True, auto_now_add=True)

    def __str__(self):
        return str(self.cliente_id)

class Marcas(models.Model):
    marca_id = models.AutoField(primary_key=True)
    marca_nome = models.CharField(null=True, max_length=100)

    def __str__(self):
        return str(self.marca_id)

class Produtos(models.Model):
    produto_id = models.AutoField(primary_key=True)
    produto_nome = models.CharField(null=True, max_length=100)
    marca_id = models.ForeignKey(Marcas, on_delete=models.CASCADE)
    peso_produto = models.FloatField()
    embalagem_produto = models.CharField(null=True, max_length=100)

    def __str__(self):
        return str(self.produto_id)

class Transportes(models.Model):
    transporte_id = models.AutoField(primary_key=True)
    transporte_nome = models.CharField(null=True, max_length=100)
    capacidade_kg = models.FloatField()
    capacidade_un = models.IntegerField()

    def __str__(self):
        return str(self.transporte_id)
    
class TipoTransportes(models.Model):
    tipo_transporte_id = models.AutoField(primary_key=True)
    tipo_transporte_nome = models.CharField(null=True, max_length=100)
    cif = models.BooleanField(default=False)
    fob = models.BooleanField(default=False)
    carregamento = models.BooleanField(default=False)

    def __str__(self):
        return str(self.tipo_transporte_id)

class Vendedores(models.Model):
    vendedor_id = models.AutoField(primary_key=True)
    vendedor_nome = models.CharField(null=True, max_length=100)
    area_vendedor = models.CharField(null=True, max_length=100)
    comissao_padrao_percentual = models.FloatField(default=1.00)

    def __str__(self):
        return str(self.vendedor_id)
    
class Fornecedores(models.Model):
    fornecedor_id = models.AutoField(primary_key=True)
    fornecedor_nome = models.CharField(null=True, max_length=100)
    contato = models.CharField(null=True, max_length=100)
    aniversario = models.DateTimeField(null=True)
    telefone = models.CharField(null=True, max_length=100)
    email = models.CharField(null=True, max_length=100)
    cnpj = models.CharField(null=True, max_length=100)
    rua = models.CharField(null=True, max_length=200)
    numero_rua = models.CharField(null=True, max_length=100)
    complemento_rua = models.CharField(null=True, max_length=100)
    ponto_referencia = models.CharField(null=True, max_length=200)
    bairro = models.CharField(null=True, max_length=100)
    cidade = models.CharField(null=True, max_length=100)
    estado = models.CharField(null=True, max_length=100)
    observacao = models.TextField(null=True, max_length=200)
    data_cadastro = models.DateTimeField(null=True, auto_now_add=True)
    
    def __str__(self):
        return str(self.fornecedor_id)

class TabelaPrecos(models.Model):

    preco_id = models.AutoField(primary_key=True)
    fornecedor_id = models.ForeignKey(Fornecedores, default=0, on_delete=models.CASCADE)
    produto_id = models.ForeignKey(Produtos, default=0,on_delete=models.CASCADE)
    preco_compra = models.FloatField()
    preco_sugestao = models.FloatField()
    
    def __str__(self):
        return str(self.preco_id)

class Pedidos(models.Model):
    pedido_id = models.AutoField(primary_key=True)
    cliente_id = models.ForeignKey(Clientes, on_delete=models.CASCADE)
    produto_id = models.ForeignKey(Produtos, on_delete=models.CASCADE)
    transporte_id = models.ForeignKey(Transportes, on_delete=models.CASCADE)
    tipo_transporte_id = models.ForeignKey(TipoTransportes, on_delete=models.CASCADE)
    vendedor_id = models.ForeignKey(Vendedores, on_delete=models.CASCADE)
    pedido_quantidade = models.IntegerField(null=True)
    # distancia = models.FloatField()
    # comissao_percentual = models.FloatField(default=0, null=True, blank=True)
    # custo_transporte_km = models.FloatField()
    # custo_transporte_total = models.FloatField()
    # preco_inicial = models.FloatField()
    # preco_negociado = models.FloatField()
    # preco_final =models.FloatField()

    def __str__(self):
        return str(self.pedido_id)
    
    ### ESSA REGRA PEGA A COMISSÃO PADRÃO DO VENDEDOR SE NÃO FOR INFORMADA
    # def save(self, *args, **kwargs):
    #     if not self.comissao_percentual:
    #         vendedor = self.vendedor_id
    #         if vendedor:
    #             comissao_padrao = vendedor.comissao_padrao_percentual
    #             self.comissao_percentual = comissao_padrao
    #     super().save(*args, **kwargs)

class Orcamentos(models.Model):
    orcamento_id = models.AutoField(primary_key=True)
    cliente_id = models.ForeignKey(Clientes, on_delete=models.CASCADE)   
    transporte_id = models.ForeignKey(Transportes, on_delete=models.CASCADE)
    tipo_transporte_id = models.ForeignKey(TipoTransportes, on_delete=models.CASCADE)
    vendedor_id = models.ForeignKey(Vendedores, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.orcamento_id)

class Pesquisas(models.Model):
    pesquisa_id = models.AutoField(primary_key=True)
    cliente_id = models.ForeignKey(Clientes, on_delete=models.CASCADE)
    marca_id = models.ForeignKey(Marcas, on_delete=models.CASCADE)   
    transporte_id = models.ForeignKey(Transportes, on_delete=models.CASCADE)
    tipo_transporte_id = models.ForeignKey(TipoTransportes, on_delete=models.CASCADE)
    pesquisa_preco = models.FloatField(null=True)
    pesquisa_preco_sugerido = models.FloatField(null=True)
    data_cadastro = models.DateTimeField(null=True, auto_now_add=True)

    def __str__(self):
        return str(self.pesquisa_id)


class ItensOrcamento(models.Model):
    item_orcamento_id = models.AutoField(primary_key=True)
    orcamento_id = models.ForeignKey(Orcamentos, on_delete=models.CASCADE)
    produto_id = models.ForeignKey(Produtos, on_delete=models.CASCADE)
    orcamento_quantidade = models.IntegerField(null=True)

    def __str__(self):
        return str(self.item_orcamento_id)