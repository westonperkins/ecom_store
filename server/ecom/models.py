from typing import DefaultDict
from django.db import models
from django.db.models.aggregates import Max
from django.db.models.deletion import CASCADE
from django.db.models.fields import related
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.


class Category(models.Model):
    category = models.CharField(max_length=100)
 
    def __str__(self):
        return self.category




class Listing(models.Model):
    category = models.CharField(
        max_length=20,
    )
    price = models.IntegerField(default=0)
    title = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    # soldBy = models.CharField(max_length=100, default='Unknown')
    description = models.CharField(max_length=500)
    sizes = models.CharField(
        max_length=20,
    )
    favorites = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now)
    photo_url = models.TextField(default="image unavaliable")
    seller = models.ForeignKey(
        User, 
        related_name='listings', 
        on_delete=models.CASCADE, 
        null=True)

    class Meta: 
        get_latest_by = 'created_at'
  
    def __str__(self):
        return str(self.seller.username)



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


