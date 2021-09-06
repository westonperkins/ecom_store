from typing import DefaultDict
from django.db import models
from django.db.models.aggregates import Max
from django.db.models.deletion import CASCADE
from django.db.models.fields import related
from django.utils import timezone

# Create your models here.


class Category(models.Model):
    category = models.CharField(max_length=100)
 
    def __str__(self):
        return self.category


class Listing(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="listings"
    )
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
    price = models.IntegerField(default=0)
    title = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    sizes = models.CharField(
        max_length=2,
        choices=SIZE_CHOICES,
        default=SMALL
    )
    favorites = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now)
    photo_url = models.TextField(default="image unavaliable")

    class Meta: 
        get_latest_by = 'created_at'
  
    def __str__(self):
        return self.title

class Review(models.Model):
    ZERO = '0'
    ONE = '1'
    TWO = '2'
    THREE = '3'
    FOUR = '4'
    FIVE = '5'
    REVIEW_STARS = [
        (ZERO, '0',),
        (ONE, '1'),
        (TWO, '2'),
        (THREE, '3'),
        (FOUR, '4'),
        (FIVE, '5')
    ]
    stars = models. CharField(
        choices = REVIEW_STARS,
        max_length=1,
        default=ZERO
    )
    review = models.CharField(max_length=5000)
  
    def __str__(self):
        return self.review


