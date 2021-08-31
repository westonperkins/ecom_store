from django.contrib import admin

# Register your models here.
from .models import Category
from .models import Garment

admin.site.register(Category)
admin.site.register(Garment)