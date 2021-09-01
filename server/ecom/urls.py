from django.urls import path
from django.conf.urls.static import static
from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [
    path('shop/', views.Listings.as_view(), name='listings'),

    path('/shop/category/', views.Category.as_view(), name='category')
]