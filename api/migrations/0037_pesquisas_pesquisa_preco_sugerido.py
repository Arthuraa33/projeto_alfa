# Generated by Django 5.0.4 on 2024-04-26 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0036_pesquisas'),
    ]

    operations = [
        migrations.AddField(
            model_name='pesquisas',
            name='pesquisa_preco_sugerido',
            field=models.FloatField(null=True),
        ),
    ]
