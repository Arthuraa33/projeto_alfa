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
coordinates = gmaps.geocode(source)
# Validate an address with address validation

print(coordinates[0]['geometry']['location'])