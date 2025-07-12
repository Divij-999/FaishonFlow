from django.contrib import admin
from .models import *

class ItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploader', 'category', 'condition', 'is_available', 'is_approved')
    list_filter = ('category', 'condition', 'is_approved')


class SwapRequestAdmin(admin.ModelAdmin):
    list_display = ('requester', 'requested_item', 'offered_item', 'status', 'created_at', 'email_sent')
    list_filter = ('status', 'email_sent')

class NotificationLogAdmin(admin.ModelAdmin):
    list_display = ('user', 'status', 'timestamp')

class RedemptionAdmin(admin.ModelAdmin):
    list_display = ('user', 'item', 'points_spent', 'created_at')

class AdminActionAdmin(admin.ModelAdmin):
    list_display = ('admin', 'item', 'action', 'timestamp')

admin.site.register(CustomUser)
admin.site.register(Item, ItemAdmin)
admin.site.register(SwapRequest, SwapRequestAdmin)
admin.site.register(NotificationLog, NotificationLogAdmin)
admin.site.register(Redemption, RedemptionAdmin)
admin.site.register(AdminAction, AdminActionAdmin)
