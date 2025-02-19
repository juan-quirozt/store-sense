from flask import Flask

def create_app():
    app = Flask(__name__)
    
    from .planetsr_imagenes import clasificar_imagen
    app.config['UPLOAD_FOLDER'] = 'static/uploads'
    
    return app