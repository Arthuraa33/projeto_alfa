# Generated by Django 5.0.8 on 2024-08-15 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tarefas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='statustarefas',
            name='status_ordem',
            field=models.IntegerField(null=True),
        ),
    ]
