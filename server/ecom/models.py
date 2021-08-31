from typing import DefaultDict
from django.db import models

# Create your models here.

class Category(models.Model):
    category = models.CharField(max_length=100)
 
    def __str__(self):
        return self.category

class Garment(models.Model):
    EXTRA_SMALL = 'XS'
    SMALL = 'S'
    MEDIUM = 'M'
    LARGE = 'L'
    EXTRA_LARGE = 'XL'
    SIZE_CHOICES = [
        (EXTRA_SMALL, 'xs',),
        (SMALL, 's'),
        (MEDIUM, 'm'),
        (LARGE, 'l'),
        (EXTRA_LARGE, 'xl')
    ]
    price = models.IntegerField
    title = models.CharField(max_length=100)
    collection = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    sizes = models.CharField(
        max_length=2,
        choices=SIZE_CHOICES,
        default=SMALL
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="garments"
    )

    def __str__(self):
        return self.title