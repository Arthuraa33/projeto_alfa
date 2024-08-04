import requests
import os
from dotenv import load_dotenv

def post_import(data,tipo):
###### POST
    load_dotenv()

    base_url = os.getenv('API_BASE_URL')

    url_cidade= 'api/cadastro/cidade/'
    url_estado= 'api/cadastro/estado/'
    if tipo == 'c':
        url = base_url+url_cidade
    if tipo == 'e':
        url = base_url+url_estado

    auth_url = base_url+'token/'
    credentials = {
        'username': 'arthur',
        'password': '123'
    }

    response = requests.post(auth_url, json=credentials)

    if response.status_code == 200:
        token = response.json().get('access')  # Assume que o token está no campo 'token'
        print("Token:", token)
    else:
        print("Failed to get token:", response.status_code, response.text)

    headers = {
        'Authorization': f'Bearer {token}'
    }

    response = requests.post(url, headers=headers, json=data)

    if response.status_code == 200:
        return print('Request Done!')
    return print("Request failed:", response.status_code, response.text)

def get_import(tipo):

    load_dotenv()

    base_url = os.getenv('API_BASE_URL')

    url_cidade= 'api/cadastro/cidade/'
    url_estado= 'api/cadastro/estado/'
    if tipo == 'c':
        url = base_url+url_cidade
    if tipo == 'e':
        url = base_url+url_estado
        
    auth_url = base_url+'token/'
    credentials = {
        'username': 'arthur',
        'password': '123'
    }
    response = requests.post(auth_url, json=credentials)

    if response.status_code == 200:
        token = response.json().get('access')  # Assume que o token está no campo 'token'
        # print("Token:", token)
    else:
        print("Failed to get token:", response.status_code, response.text)

    headers = {
        'Authorization': f'Bearer {token}'
    }

###### GET
    response = requests.get(url, headers=headers)
    return response.json()
    # if response.status_code == 200:
    #     print("Response:", response.json())
    # else:
    #     print("Request failed:", response.status_code, response.text)

