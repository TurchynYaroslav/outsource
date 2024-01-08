from django.contrib import admin
from .models import SocialMediaUser
# Register your models here.


class SocialMediaUserAdmin(admin.ModelAdmin):
    list_display = ('get_username', 'get_email',
                    'social_media_url', 'avatar_url')

    def get_username(self, obj):
        return obj.user.username

    def get_email(self, obj):
        return obj.user.email

    get_username.short_description = 'Username'  # Заголовок столбца в админке
    get_email.short_description = 'Email'  # Заголовок столбца в админке


admin.site.register(SocialMediaUser, SocialMediaUserAdmin)
