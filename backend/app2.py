from flask import Flask, request, jsonify
from flask_cors import CORS  # Permitir peticiones desde otro dominio (Next.js)
import os
from werkzeug.utils import secure_filename
from app.planetsr_imagenes import clasificar_imagen

app = Flask(__name__)


@app.route('/api', methods=['POST'])
def clasificar():
    return "Hola"

if __name__ == '__main__':
    app.run(debug=False, port=5000)  # Flask correrá en el puerto 5000