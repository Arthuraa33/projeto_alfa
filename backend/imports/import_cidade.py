import pandas as pd
from import_post import post_import, get_import
df_estado = pd.read_csv('backend/imports/estados.csv', sep = ';', encoding = "ISO-8859-1")
df_cidade = pd.read_csv('backend/imports/cidades.csv', sep = "\t", encoding = "ISO-8859-1")

def import_estado(df):
    for i in range(len(df)):
        data = {}
        data['estado_nome'] = df['estado_nome'].iloc[i]
        data['estado_sigla'] = df['estado_sigla'].iloc[i]
        # data['estado_capital'] = df['estado_capital'].iloc[i]
        post_import(data, 'e')

    return True

def import_cidade(df):
    estados = get_import(tipo='e')
    dict_siglas = {}
    for i in range(len(estados)):
        dict_siglas[estados[i]['estado_sigla']] = estados[i]['estado_id']

    for i in range(5000, len(df)):
        data = {}
        data['cidade_nome'] = df['cidade_nome'].iloc[i]
        data['cidade_codigo_ibge'] = str(df['cidade_codigo_ibge'].iloc[i])
        data['cidade_estado'] = df['cidade_estado'].iloc[i]
        data['estado_id'] = dict_siglas[df['cidade_estado'].iloc[i]]
        post_import(data, 'c')

    return True
    # print(data)
# import_estado(df_estado)
import_cidade(df_cidade)

# print(df_cidade)
