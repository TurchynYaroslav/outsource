from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from .models import *


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('username', 'email')


# class SocialMediaUserSerializer(serializers.ModelSerializer):
#     user_data = UserSerializer(source='user')

#     class Meta:
#         model = SocialMediaUser
#         fields = ('user_data', 'social_media_url', 'avatar_url')

#     def to_internal_value(self, data):
#         modified_data = {
#             'user_data': {
#                 'id': data.get('id'),
#                 'username': data.get('login'),
#                 'email': data.get('email'),
#             },
#             'social_media_url': data.get('url'),
#             'avatar_url': data.get('avatar_url'),
#         }

#         return modified_data

#     def create(self, validated_data):
#         user_data = validated_data.pop('user_data')
#         user_instance = User.objects.create_user(**user_data)

#         # Проверка наличия существующего объекта SocialMediaUser
#         social_media_user, created = SocialMediaUser.objects.get_or_create(
#             user=user_instance, defaults=validated_data
#         )

#         if not created:
#             # Обновляем существующий объект, если он уже существует
#             social_media_user.social_media_url = validated_data.get(
#                 'social_media_url', social_media_user.social_media_url)
#             social_media_user.avatar_url = validated_data.get(
#                 'avatar_url', social_media_user.avatar_url)
#             social_media_user.save()

#         return social_media_user


class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'username',

# class UserRegistrationSerializer(serializers.ModelSerializer):

#     tokens = serializers.SerializerMethodField()
#     password = serializers.CharField(
#         write_only=True, required=True, validators=[validate_password])
#     confirm_password = serializers.CharField(write_only=True, required=True)

#     class Meta:
#         model = User
#         fields = ('id', 'username', 'password', 'confirm_password', 'tokens')

#     def validate(self, attrs):
#         if attrs['password'] != attrs['confirm_password']:
#             raise serializers.ValidationError(
#                 {"password": "Password fields didn't match."})
#         return attrs

#     def get_tokens(self, user):
#         tokens = RefreshToken.for_user(user)
#         data = {
#             'refresh': str(tokens),
#             'access': str(tokens.access_token)
#         }
#         return data

#     def create(self, validated_data):
#         user = User.objects.create_user(
#             username=validated_data['username'], password=validated_data['password'])
#         return user
