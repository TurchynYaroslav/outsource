from rest_framework import generics, permissions
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import JsonResponse
from outsource import settings
from authUser import utils
from .serializers import SocialMediaUserSerializer, GetUserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

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

class GetUsersInfo(generics.GenericAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = GetUserSerializer

    def get(self, request, *args, **kwargs):
        # print(request.META.get('Authorization'))
        users = self.get_queryset()
        serializer = self.get_serializer(users, many=True)
        return Response(serializer.data)


class GetClientUrl(generics.CreateAPIView):
    def get(self, request, *args, **kwargs):
        return JsonResponse({'url': settings.SOCIAL_AUTH_GITHUB_URL})


class AuthorizeUserGithub(generics.CreateAPIView):
    serializer_class = SocialMediaUserSerializer

    def get(self, request, *args, **kwargs):
        code = request.query_params.get('code')
        if code:
            response_dict = utils.getToken(code)
            if 'error' not in response_dict:
                userData = utils.getGitInfo(response_dict)
                if userData['email']:
                    serializer = self.get_serializer(data=userData)
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(utils.makeResponse(dict(serializer.data['user_data'])))
                    # Обработка ошибки валидации сериализатора
                    print('Error in serializer validation:', serializer.errors)
                else:
                    return JsonResponse({'error': 'Make the email address available or enter it manually'}, status=500)
            else:
                return JsonResponse(response_dict, status=500)

        else:
            return JsonResponse({'Error': 'Get token is failed'}, status=500)
