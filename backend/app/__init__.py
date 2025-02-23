from flask import Flask
from app.clasificador_imagenes import clasificar_imagen

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'