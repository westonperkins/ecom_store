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
        # print(self.request.user)
        return self.request.user.listings.all()

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user) 





class ListingViewSetAll(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ListingSerializer

    def get_queryset(self):
        # queryset = Listing.objects.all()
        # filter_value = self.reuqest.query_params.get('id', None)
        print(Listing.objects.get(pk=54))
        return Listing.objects.all()



# making viewset for id 