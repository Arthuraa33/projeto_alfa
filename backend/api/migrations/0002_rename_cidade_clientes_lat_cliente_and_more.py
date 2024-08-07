# Generated by Django 5.0.7 on 2024-07-16 11:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clientes',
            old_name='cidade',
            new_name='lat_cliente',
        ),
        migrations.RenameField(
            model_name='clientes',
            old_name='estado',
            new_name='lng_cliente',
        ),
        migrations.AddField(
            model_name='clientes',
            name='cidade_id',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='api.cidades'),
        ),
        migrations.AddField(
            model_name='clientes',
            name='estado_id',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='api.estados'),
        ),
    ]
