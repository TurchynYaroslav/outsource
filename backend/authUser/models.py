from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class SocialMediaUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    social_media_url = models.URLField()
    avatar_url = models.URLField()

    @receiver(post_save, sender=User)
    def create_or_update_social_media_user(sender, instance, created, **kwargs):
        # Если пользователь создан, создайте или обновите связанный SocialMediaUser
        if created:
            SocialMediaUser.objects.create(user=instance)
        else:
            instance.socialmediauser.save()
