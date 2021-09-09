from rest_framework import serializers
from .models import Category, Listing, Review

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    listings = serializers.HyperlinkedRelatedField(
        view_name='listing_detail',
        many=True,
        read_only=True,
    )
    category_url = serializers.ModelSerializer.serializer_url_field(
        view_name='category_detail'
    )
    class Meta:
        model = Category
        fields = ('category', 'listings', 'category_url')


class ListingSerializer(serializers.HyperlinkedModelSerializer):
    # category = serializers.HyperlinkedRelatedField(
    #     view_name='category_detail',
    #     read_only=True
    # )
    # category_id = serializers.PrimaryKeyRelatedField(
    #     queryset=Category.objects.all(),
    #     source="category"
    # )
  
    class Meta: 
        model = Listing
        get_latest_by = 'created_at'
        fields = ('id', 'price', 'title', 'brand', 'description', 'sizes', 'favorites', 'created_at', 'photo_url')


