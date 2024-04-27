# Generated by Django 5.0.4 on 2024-04-25 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_clientes_marcas_pedidos_produtos_tipotransportes_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fornecedores',
            fields=[
                ('fornecedor_id', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=100, null=True)),
                ('contato', models.CharField(max_length=100, null=True)),
                ('aniversario', models.DateTimeField(null=True)),
                ('telefone', models.CharField(max_length=100, null=True)),
                ('email', models.CharField(max_length=100, null=True)),
                ('cnpj', models.CharField(max_length=100, null=True)),
                ('rua', models.CharField(max_length=200, null=True)),
                ('numero_rua', models.CharField(max_length=100, null=True)),
                ('complemento_rua', models.CharField(max_length=100, null=True)),
                ('ponto_referencia', models.CharField(max_length=200, null=True)),
                ('bairro', models.CharField(max_length=100, null=True)),
                ('cidade', models.CharField(max_length=100, null=True)),
                ('estado', models.CharField(max_length=100, null=True)),
                ('observacao', models.TextField(max_length=200, null=True)),
                ('data_cadastro', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='produtos',
            name='produto',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
