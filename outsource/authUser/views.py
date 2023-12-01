from rest_framework import generics, permissions
from django.contrib.auth.models import User
from rest_framework.response import Response
from outsource import settings
import requests
import json
from urllib.parse import parse_qs

# from .serializers import UserRegistrationSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView

# # Create your views here.


# class UserRegistrationView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserRegistrationSerializer
#     permission_classes = [permissions.AllowAny]

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)


# class UserLoginView(TokenObtainPairView):
#     def post(self, request, *args, **kwargs):
#         response = super(UserLoginView, self).post(request, *args, **kwargs)
#         return response

class GetClientUrl(generics.CreateAPIView):
    def get(self, request, *args, **kwargs):
        url = f'https://github.com/login/oauth/authorize?client_id={settings.SOCIAL_AUTH_GITHUB_KEY}'
        return Response({'url': url})


class AuthorizeUserGithub(generics.CreateAPIView):
    def get(self, request, *args, **kwargs):
        code = request.query_params.get('code')
        # URL для запроса токена доступа
        token_url = 'https://github.com/login/oauth/access_token'

        # Параметры для запроса
        data = {
            'client_id': settings.SOCIAL_AUTH_GITHUB_KEY,
            'client_secret': settings.SOCIAL_AUTH_GITHUB_SECRET,
            'code': code,
            'redirect_uri': settings.REDIRECT_URI
        }

        # Выполнение POST-запроса
        response = requests.post(token_url, data=data)
        response_dict = parse_qs(response.text)

        user_url = 'https://api.github.com/user'
        headers = {'Authorization': f'Bearer {response_dict["access_token"][0]}'}
        response_user = requests.get(user_url, headers=headers)
        userData = json.loads(response_user.text)
        print(userData['id'])

        response_dict['name'] = [userData['name']]
        return Response(response_dict)
