from flask import Flask, request, jsonify
from flask_cors import CORS  # Permitir peticiones desde otro dominio (Next.js)
import os
from werkzeug.utils import secure_filename
from app.clasificador_imagenes import clasificar_imagen

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000", "https://store-sense.onrender.com"]}})


app.config['UPLOAD_FOLDER'] = 'static/uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/api/clasificar', methods=['POST'])
def clasificar():
    print("\n📩 **Solicitud recibida en /api/clasificar**")
    
    # Imprimir detalles de la petición
    print("🔍 Headers:", request.headers)
    print("🔍 Content-Type:", request.content_type)
    print("🔍 request.files:", request.files)
    print("🔍 request.form:", request.form)

    if 'imagen' not in request.files:
        print("❌ Error: No se envió ninguna imagen")
        return jsonify({"error": "No se envió ninguna imagen"}), 400

    imagen = request.files['imagen']
    
    if imagen.filename == '':
        print("❌ Error: Archivo vacío")
        return jsonify({"error": "Archivo vacío"}), 400

    filename = secure_filename(imagen.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    imagen.save(filepath)

    print(f"✅ Imagen guardada en: {filepath}")

    try:
        clase_predicha, confianza = clasificar_imagen(filepath)
        print(f"✅ Clasificación exitosa: Clase - {clase_predicha}, Confianza - {confianza}")

        return jsonify({
            "clase": clase_predicha,
            "confianza": float(confianza)
        })
    except Exception as e:
        print(f"❌ Error al clasificar la imagen: {e}")
        return jsonify({"error": "Error interno al procesar la imagen"}), 500

if __name__ == '__main__':
    app.run(debug=False, port=5000)  # Flask correrá en el puerto 5000
