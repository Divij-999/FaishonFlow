from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ClothingItemViewSet, SwapRequestViewSet

router = DefaultRouter()
router.register(r'items', ClothingItemViewSet)
router.register(r'swaps', SwapRequestViewSet)

urlpatterns = [
    path('', include(router.urls)),
]