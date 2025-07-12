from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from .models import CustomUser, Item, SwapRequest, NotificationLog, Redemption, AdminAction
from .serializers import (
    CustomUserSerializer, ItemSerializer, SwapRequestSerializer,
    NotificationLogSerializer, RedemptionSerializer, AdminActionSerializer
)

# --------------------------
# 🔹 CustomUser Views
# --------------------------

class CustomUserList(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class CustomUserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

# --------------------------
# 🔹 Item Views
# --------------------------

class ItemListCreate(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

# --------------------------
# 🔹 SwapRequest Views
# --------------------------

class SwapRequestListCreate(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = SwapRequest.objects.all()
    serializer_class = SwapRequestSerializer

class SwapRequestDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = SwapRequest.objects.all()
    serializer_class = SwapRequestSerializer

# --------------------------
# 🔹 NotificationLog Views
# --------------------------

class NotificationLogList(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = NotificationLog.objects.all()
    serializer_class = NotificationLogSerializer

class NotificationLogDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = NotificationLog.objects.all()
    serializer_class = NotificationLogSerializer

# --------------------------
# 🔹 Redemption Views
# --------------------------

class RedemptionListCreate(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Redemption.objects.all()
    serializer_class = RedemptionSerializer

class RedemptionDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Redemption.objects.all()
    serializer_class = RedemptionSerializer

# --------------------------
# 🔹 AdminAction Views
# --------------------------

class AdminActionListCreate(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = AdminAction.objects.all()
    serializer_class = AdminActionSerializer

class AdminActionDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = AdminAction.objects.all()
    serializer_class = AdminActionSerializer
