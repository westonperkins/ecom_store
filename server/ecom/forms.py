from django import forms 
from django.forms import fields
from .models import Listing, Category


# class CategoryForm(forms.ModelForm):
#     class Meta:
#         model = Category
#         fields = ('category',)

class ListingForm(forms.ModelForm):
    class Meta:
        model = Listing
        fields = ('price', 'title', 'brand', 'description', 'sizes', 'category', 'favorites', 'created_at', 'photo_url')

