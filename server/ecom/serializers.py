from rest_framework import serializers
from .models import Category, Listing, Review

class CategorySerializer(serializers.ModelSerializer):
    listings = serializers.HyperlinkedRelatedField(
        view_name='listing',
        many=True,
        read_only=True
    )

    class Meta:
        model = Category
        fields = 'category'


class ListingSerializer(serializers.HyperlinkedModelSerializer):
    category = serializers.HyperlinkedRelatedField(
        view_name='category',
        read_only=True
    )
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source='category'
    )
    class Meta: 
        model = Listing
        fields = ('price', 'title', 'brand', 'description', 'sizes', 'category', 'category_id', 'favorites', 'created_at')

