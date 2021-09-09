from typing import List
from ecom.models import Listing
from rest_framework import viewsets, permissions
from .serializers import ListingSerializer

class ListingViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    serializer_class = ListingSerializer

    def get_queryset(self):
        return self.request.user.listings.all()

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)