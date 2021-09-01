from django.shortcuts import render, redirect
from django.http import JsonResponse

# Create your views here.

from .forms import ListingForm 
from .models import Listing, Category
from .serializers import ListingSerializer, CategorySerializer
from rest_framework import generics 

class Listings(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class Listing(generics.RetrieveUpdateDestroyAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class Categories(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class Category(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer