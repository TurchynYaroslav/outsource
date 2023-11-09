import requests

# Задайте URL-адрес сервера, на который вы хотите отправить запрос
"""url = 'http://127.0.0.1:8000/login/'  # Замените на нужный URL

data = {
    "username": "artur",
    "password": '2711ips4',
}

# Отправьте POST-запрос
response = requests.post(url, json=data)

# Проверьте, что запрос выполнен успешно (статус 200 OK)
if response.status_code == 200:
    # Выведите содержимое ответа
    print('Ответ сервера:')
    print(response.text)
else:
    print(f'Произошла ошибка. Статус код: {response.text}')
"""
"""
url = 'http://127.0.0.1:8000/women/5/'
token = response.json()['access']

headers = {
    "Authorization": f"Bearer {token}"
}

# Отправьте POST-запрос
response2 = requests.get(url, headers=headers)

# Проверьте, что запрос выполнен успешно (статус 200 OK)
if response2.status_code == 200:
    # Выведите содержимое ответа
    print('Ответ сервера:')
    print(response2.text)
else:
    print(f'Произошла ошибка. Статус код: {response2.text}')
"""


url = 'http://127.0.0.1:8000/login/refresh/'
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwMDI0MzYyOCwiaWF0IjoxNjk5Mzc5NjI4LCJqdGkiOiI5OTY0YmM1YzQ3Nzg0YzE5YjViZTQ2YTI5MmYwMDZkOSIsInVzZXJfaWQiOjJ9.N6kb3o6qUOB752OKW13iL1ww8KnbP1Uq30tkQowLqtU'
headers = {
    "refresh": f"{token}"
}

# Отправьте POST-запрос
response2 = requests.post(url, json=headers)

# Проверьте, что запрос выполнен успешно (статус 200 OK)
if response2.status_code == 200:
    # Выведите содержимое ответа
    print('Ответ сервера:')
    print(response2.text)
else:
    print(f'Произошла ошибка. Статус код: {response2.text}')
