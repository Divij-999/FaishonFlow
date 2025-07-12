from django.urls import path
from .views import *

urlpatterns = [
    path('users/', CustomUserList.as_view()),
    path('users/<int:pk>/', CustomUserDetail.as_view()),

    path('items/', ItemListCreate.as_view()),
    path('items/<int:pk>/', ItemDetail.as_view()),

    path('swap-requests/', SwapRequestListCreate.as_view()),
    path('swap-requests/<int:pk>/', SwapRequestDetail.as_view()),

    path('notifications/', NotificationLogList.as_view()),
    path('notifications/<int:pk>/', NotificationLogDetail.as_view()),

    path('redemptions/', RedemptionListCreate.as_view()),
    path('redemptions/<int:pk>/', RedemptionDetail.as_view()),

    path('admin-actions/', AdminActionListCreate.as_view()),
    path('admin-actions/<int:pk>/', AdminActionDetail.as_view()),
]
