from django.urls import path
from . import views

urlpatterns = [

    path("tarefa/delete/<int:pk>/", views.TarefasDelete.as_view(), name="delete-tarefa"),
    path("tarefa/<int:pk>/", views.TarefasDetail.as_view(), name='detail-tarefa'),
    path("tarefa/", views.TarefasList.as_view(), name="get-tarefa"),
    path("tarefa/", views.TarefasListCreate.as_view(), name="post-tarefa"), 

    path("tipotarefa/delete/<int:pk>/", views.TipoTarefasDelete.as_view(), name="delete-tipotarefa"),
    path("tipotarefa/<int:pk>/", views.TipoTarefasDetail.as_view(), name='detail-tipotarefa'),
    path("tipotarefa/", views.TipoTarefasList.as_view(), name="get-tipotarefa"),
    path("tipotarefa/", views.TipoTarefasListCreate.as_view(), name="post-tipotarefa"), 

    path("statustarefa/delete/<int:pk>/", views.StatusTarefasDelete.as_view(), name="delete-statustarefa"),
    path("statustarefa/<int:pk>/", views.StatusTarefasDetail.as_view(), name='detail-statustarefa'),
    path("statustarefa/", views.StatusTarefasList.as_view(), name="get-statustarefa"),
    path("statustarefa/", views.StatusTarefasListCreate.as_view(), name="post-statustarefa"), 

    path("tarefaatividade/delete/<int:pk>/", views.TarefasAtividadesDelete.as_view(), name="delete-tarefaatividade"),
    path("tarefaatividade/<int:pk>/", views.TarefasAtividadesDetail.as_view(), name='detail-tarefaatividade'),
    path("tarefaatividade/", views.TarefasAtividadesList.as_view(), name="get-tarefaatividade"),
    path("tarefaatividade/", views.TarefasAtividadesListCreate.as_view(), name="post-tarefaatividade"), 

]