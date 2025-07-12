from rest_framework import serializers
from .models import CustomUser, Item, ItemImage, SwapRequest, NotificationLog, Redemption, AdminAction

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    user_details=CustomUserSerializer()
    class Meta:
        model = Item
        fields = '__all__'

class SwapRequestSerializer(serializers.ModelSerializer):
    requester_details = CustomUserSerializer()
    item_details = ItemSerializer()
    class Meta:
        model = SwapRequest
        fields = '__all__'

class NotificationLogSerializer(serializers.ModelSerializer):
    user_details = CustomUserSerializer()
    class Meta:
        model = NotificationLog
        fields = '__all__'

class RedemptionSerializer(serializers.ModelSerializer):
    user_details = CustomUserSerializer()
    item_details = ItemSerializer()
    class Meta:
        model = Redemption
        fields = '__all__'

class AdminActionSerializer(serializers.ModelSerializer):
    admin_details = CustomUserSerializer()
    item_details = ItemSerializer()
    class Meta:
        model = AdminAction
        fields = '__all__'
