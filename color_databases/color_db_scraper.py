import requests
import urllib.request
import time
from bs4 import BeautifulSoup

url = 'https://www.colorhexa.com/color-names'
response = requests.get(url)

soup = BeautifulSoup(response.text, "html.parser")
Colors_with_hexes = {}
colors = []

for color_row in soup.findAll('tr')[1:]:
    color_name = color_row.findAll('td')[0].text
    color_hex = color_row.findAll('td')[1].text
    if len(color_name.split()) == 1:
        Colors_with_hexes[color_name] = color_hex
        colors.append(color_name)

print(Colors_with_hexes)
