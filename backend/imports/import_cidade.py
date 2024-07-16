import pandas as pd
from import_post import post_import, get_import
df_estado = pd.read_csv('backend/imports/estados.csv', sep = ';', encoding = "ISO-8859-1")
df_cidade = pd.read_csv('backend/imports/cidades.csv', sep = "\t", encoding = "ISO-8859-1")

# for i in range(len(df_estado)):
#     data = {}
#     data['estado_nome'] = df['estado_nome'].iloc[i]
#     data['estado_sigla'] = df['estado_sigla'].iloc[i]
#     data['estado_capital'] = df['estado_capital'].iloc[i]
#     # data['estado_area'] = df['estado_area'].iloc[i]
#     # data['estado_populacao'] = df['estado_populacao'].iloc[i]
#     post_import(data, 'e')
#     print(data)

def import_cidade(df_cidade):
    estados = get_import(tipo='e')
    dict_siglas = {}
    for i in range(len(estados)):
        dict_siglas[estados[i]['estado_sigla']] = estados[i]['estado_id']

    for i in range(len(df_cidade)):
        data = {}
        data['cidade_nome'] = df_cidade['cidade_nome'].iloc[i]
        data['cidade_codigo_ibge'] = str(df_cidade['cidade_codigo_ibge'].iloc[i])
        data['cidade_estado'] = df_cidade['cidade_estado'].iloc[i]
        data['estado_id'] = dict_siglas[df_cidade['cidade_estado'].iloc[i]]
        post_import(data, 'c')

    return True
    # print(data)
# import_cidade(df_cidade)
print(df_cidade)
