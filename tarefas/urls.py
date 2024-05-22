from django.urls import path
from . import views

urlpatterns = [
    path("gestao/cliente/delete/<int:pk>/", views.ClientesDelete.as_view(), name="delete-cliente"),

]