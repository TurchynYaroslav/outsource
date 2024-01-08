from outsource import settings
import requests
from urllib.parse import parse_qs
import json
from .costants import *
from django.contrib.auth.models import User


def getToken(code):
    # Параметры для запроса
    data = {
        'client_id': settings.SOCIAL_AUTH_GITHUB_KEY,
        'client_secret': settings.SOCIAL_AUTH_GITHUB_SECRET,
        'code': code,
        'redirect_uri': settings.REDIRECT_URI
    }

    try:
        # Выполнение POST-запроса
        response = requests.post(TOKEN_URL, data=data)
        response.raise_for_status()  # Проверка успешности запроса
        response_dict = parse_qs(response.text)
        for response in response_dict:
            response_dict[response] = response_dict[response][0]
        return response_dict
    except requests.RequestException as e:
        return {'error': str(e)}


def getGitInfo(tokenDict):
    try:
        headers = {'Authorization': f'Bearer {
            tokenDict["access_token"]}'}
        response = requests.get(USER_URL, headers=headers)
        response.raise_for_status()  # Проверка успешности запроса
        userData = response.json()
        return userData
    except requests.RequestException as e:
        return {'error': str(e)}
