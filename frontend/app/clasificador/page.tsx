"use client";

import { useState } from "react";
import Image from "next/image";

export default function ClasificarComponent() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [response, setResponse] = useState<{ clase: string; confianza: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Por favor selecciona una imagen.");
      return;
    }

    setLoading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append("imagen", image);

    try {
      const res = await fetch("http://localhost:5000/api/clasificar", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setResponse({ clase: data.clase, confianza: data.confianza });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewPrediction = () => {
    setImage(null);
    setImagePreview(null);
    setResponse(null);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Componente de instrucciones y referencia */}
      <div className="w-full max-w-2xl p-6 border rounded-lg shadow-md bg-white text-center mb-6 shadow-palleteOrangeVariant">
        <h2 className="text-lg font-semibold mb-2">Instrucciones</h2>
        <p className="text-gray-600">Sigue estos pasos para clasificar una imagen:</p>
        <ul className="list-disc list-inside text-gray-600 mt-2 text-left">
          <li>Haz clic en el botón "Seleccionar archivo".</li>
          <li>Selecciona una imagen desde tu dispositivo.</li>
          <li>Presiona el botón "Subir Imagen" para procesarla.</li>
          <li>El modelo devolverá la clase de la imagen.</li>
          <li>El modelo puede retornar 4 clases: Tshirt, Tv, Jeans o Sofa.</li>
        </ul>

        <div className="mt-4 flex flex-col items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
          <Image 
            src="/planet.jpg" 
            alt="Imagen de referencia" 
            width={250} 
            height={250} 
            className="rounded-lg shadow-md"
          />
          <div className="mt-3 p-3 bg-gray-100 border rounded shadow-sm w-full max-w-sm">
            <p className="font-semibold">Resultado de referencia:</p>
            <p><span className="font-medium">Clase:</span> Planeta</p>
          </div>
        </div>
      </div>

      {/* Entrada de imagen */}
      <div className="w-full max-w-sm p-6 border rounded-lg shadow-md bg-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
        {!response ? (
          <>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="w-full border p-2 rounded-md" 
            />
            <button 
              onClick={handleUpload} 
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full " 
              disabled={loading}
            >
              {loading ? "Cargando..." : "Subir Imagen"}
            </button>
          </>
        ) : (
          <>
            {imagePreview && (
              <div className="flex justify-center">
                <Image 
                  src={imagePreview} 
                  alt="Imagen subida" 
                  width={150} 
                  height={150} 
                  className="rounded-lg shadow-md mb-2"
                />
              </div>
            )}
            <div className="mt-4 p-3 bg-gray-100 border rounded shadow-sm flex flex-col items-center">
              <p className="font-semibold">Resultado de clasificación:</p>
              <p><span className="font-medium">Clase:</span> {response.clase}</p>
            </div>
            <button 
              onClick={handleNewPrediction} 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full "
            >
              Clasificar de nuevo
            </button>
          </>
        )}
      </div>
  
    </div>
  );
}
