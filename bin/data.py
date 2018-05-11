import requests
from bs4 import BeautifulSoup
import json

target_url = 'http://isin.twse.com.tw/isin/C_public.jsp?strMode=2'
rs = requests.session()
res = rs.get(target_url, verify=False)
soup = BeautifulSoup(res.text, 'html.parser')

table_data = [] 
for index, item in enumerate(soup.select('table tr')):
	
	if index >1 and index <918:
		td = [cell.text for cell in item("td")]
		table_data.append( { 'id':td[0][:4],'name':td[0][5:],'industry':td[4] }  )

with open('data.json', 'w') as outfile:
    json.dump( table_data, outfile )