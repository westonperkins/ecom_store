from django import forms 
from django.forms import fields
from .models import Listing, Category

class ListingForm(forms.ModelForm):

    class Meta:
        model = Listing
        fields = ('price', 'title', 'brand', 'description', 'sizes', 'category', 'favorites', 'created_at')