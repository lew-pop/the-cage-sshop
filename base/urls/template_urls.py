from django.urls import path
from base.views import template_views as views

urlpatterns = [

    path('token/', views.send_token, name="send-token"),
    path('success/', views.success, name="success"),

]