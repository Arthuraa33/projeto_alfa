import googlemaps
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('API-KEY-MAPS')
# now = datetime.today()
now = datetime(2024, 4, 25, 10, 0, 0)
gmaps = googlemaps.Client(key=api_key)

source = 'Avenida João Pereira dos Santos Filho, Itapetinga, Mossoró, RN, Brasil'
destination  = 'Rua José Alves Cavalcante 951, CE, Brasil'

#direction_result = gmaps.distance_matrix(source, destination, mode='driving')

# Validate an address with address validation
def get_coordinates(source):
    coordinates = gmaps.geocode(source)
    return coordinates[0]['geometry']['location']

def get_distance(source,destination):
    direction_result = gmaps.distance_matrix(source, destination, mode='driving')
    if direction_result['status'] == 'OK':
        distance_str = direction_result['rows'][0]['elements'][0]['distance']['text']
        distance = int(distance_str.split(' ')[0])
        return distance
    return False

print(get_coordinates(source))