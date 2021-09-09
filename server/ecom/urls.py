from django.urls import path
from django.conf.urls.static import static
from rest_framework import urlpatterns, routers
from rest_framework.routers import DefaultRouter
from . import views
from .api import ListingViewSet

router = routers.DefaultRouter()
router.register('api/shop', ListingViewSet, 'listings')

urlpatterns = router.urls
# urlpatterns = [
#     path('shop/', views.ListingList.as_view(), name='listing_list'),
#     path('shop/<int:pk>', views.ListingDetail.as_view(), name='listing_detail'),

#     path('categories/', views.CategoryList.as_view(), name='category_list'),
#     path('categories/<int:pk>', views.CategoryDetail.as_view(), name='category_detail'),


# ]