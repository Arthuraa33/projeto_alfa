import requests
import os
from dotenv import load_dotenv

load_dotenv()

base_url = os.getenv('API_BASE_URL')

url_cliente = 'api/cadastro/cliente/'
url = base_url+url_cliente

auth_url = base_url+'api/token/'
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

data =     {
        "cliente_nome": "Francisco Contruções",
        "contato": "Francisco",
        "aniversario": "2023-05-15T09:34:56-03:00",
        "telefone": "(88) 99643-0708",
        "email": "francisco@contrucoes.com.br",
        "cnpj": "468.797.989./0001-70",
        "rua": "R. Des. Américo Militão",
        "numero_rua": "425",
        "complemento_rua": "-",
        "ponto_referencia": "-",
        "bairro": "Centro",
        "cidade": "Quixeramobim",
        "estado": "CE",
        "observacao": "-",
        "area_id": 1,
        "classificacao_id": 1
    }

###### POST
response = requests.post(url, headers=headers, json=data)

###### GET
# response = requests.get(url, headers=headers)

# if response.status_code == 200:
#     print("Response:", response.json())
# else:
#     print("Request failed:", response.status_code, response.text)

