from django.contrib import admin
from django.urls import path, include
from .views import GetClientUrl, AuthorizeUserGithub


urlpatterns = [
    path('auth/', include('drf_social_oauth2.urls', namespace='drf')),
    path('get_client_url/', GetClientUrl.as_view()),
    path('authorize/', AuthorizeUserGithub.as_view()),
]
