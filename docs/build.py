from jinja2 import Environment, FileSystemLoader, select_autoescape
from json import loads as json_loads
from base64 import b64encode
import htmlmin

# Function
def base64_str(val):
	Data = val.encode('UTF-8')
	Data = b64encode(Data)
	return Data.decode('UTF-8')

# Loader
FileLoader	= FileSystemLoader('tpl')
JinjaEnv	= Environment(loader=FileLoader, autoescape=select_autoescape(['html', 'xml']))
JinjaEnv.globals['base64_str'] = base64_str

# Read data
DataFile	= open("data/showcase.json", "r")
DataDict	= json_loads(DataFile.read())

# Render
TemplateData	= JinjaEnv.get_template('base.twig')
TemplateString	= TemplateData.render(Data=DataDict)

# Save to file
try:
	with open('index.html', 'w') as file:
		file.write(htmlmin.minify(TemplateString))

except Exception as e:
	print("* Error:", e)

finally:
	print(" * Success...")