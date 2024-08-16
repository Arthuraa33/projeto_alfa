# Generated by Django 5.0.8 on 2024-08-15 09:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pesquisas',
            name='fornecedor_id',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='api.fornecedores'),
        ),
        migrations.AddField(
            model_name='pesquisas',
            name='volume_mensal',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='transportes',
            name='capacidade_kg',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='transportes',
            name='capacidade_un',
            field=models.IntegerField(null=True),
        ),
    ]
