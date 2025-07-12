from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import RegexValidator

class CustomUser(AbstractUser):
    points = models.PositiveIntegerField(default=0)
    bio = models.TextField(blank=True,null=True)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    country_code=models.CharField(max_length=5, blank=True, null=True)  # e.g., '+1', '+91'
    phone_regex = RegexValidator(regex=r'^[6-9]\d{9}$', message="Enter a valid phone number.")
    phone_number = models.CharField(validators=[phone_regex], max_length=10, blank=True, null=True)
    # phone_number = models.IntegerField(max_length=10, blank=True, null=True)
    email_notifications_enabled = models.BooleanField(default=True)

    def __str__(self):
        return self.username


class Item(models.Model):
    CATEGORY_CHOICES = [
    ('Men', 'Men'),
    ('Women', 'Women'),
    ('Kids', 'Kids'),
    ('Accessories', 'Accessories'),
    ('Footwear', 'Footwear'),
    ('Bags', 'Bags'),
    ]

    CONDITION_CHOICES = [
    ('New', 'New'),
    ('Gently Used', 'Gently Used'),
    ('Good', 'Good'),
    ]

    uploader = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='uploaded_items')
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='item_images/',null=True, blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    type = models.CharField(max_length=50)  # e.g., T-shirt, Jeans, Dress
    size = models.CharField(max_length=20)
    condition = models.CharField(max_length=20, choices=CONDITION_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    is_available = models.BooleanField(default=True)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} - {self.uploader.username}"


class SwapRequest(models.Model):
    requester = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='swap_requests',null=True, blank=True)
    requested_item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='requested_swaps',null=True, blank=True)
    offered_item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='offered_swaps', null=True, blank=True)
    status = models.CharField(max_length=20, choices=[('Pending', 'Pending'), ('Accepted', 'Accepted'), ('Rejected', 'Rejected')], default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)
    email_sent = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.requester.username} → {self.requested_item.title}"


class NotificationLog(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='notification_logs')
    content = models.TextField()
    status = models.CharField(max_length=20, choices=[('Sent', 'Sent'), ('Failed', 'Failed')])
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.status}"


class Redemption(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='redemptions')
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    points_spent = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"redeemed {self.item.title}"

class AdminAction(models.Model):
    admin = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    item = models.ForeignKey(Item, on_delete=models.SET_NULL, null=True)
    action = models.CharField(max_length=100)  # e.g., 'Approved', 'Rejected', 'Deleted'
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.action} - {self.item.title}"
