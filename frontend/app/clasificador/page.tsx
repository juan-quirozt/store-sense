"use client";

import { useState } from "react";

export default function ClasificarComponent() {
  const [image, setImage] = useState<File | null>(null);
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
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
    formData.append("imagen", image);  // Asegúrate de que coincide con el backend

    try {
      const res = await fetch("http://localhost:5000/api/clasificar", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(`Clase: ${data.clase}, Confianza: ${data.confianza}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <input 
        type="file" 
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button 
        onClick={handleUpload} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Cargando..." : "Subir Imagen"}
      </button>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      {response && (
        <pre className="mt-4 p-2 bg-gray-100 border rounded">
          {response}
        </pre>
      )}
    </div>
  );
}