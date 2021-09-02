from django.contrib import admin

# Register your models here.
from .models import Category
from .models import Listing
from .models import Review


admin.site.register(Category)
admin.site.register(Listing)
admin.site.register(Review)
