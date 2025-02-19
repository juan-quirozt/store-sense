export async function POST(req: Request) {
    try {
      const formData = await req.formData();
  
      const response = await fetch("http://localhost:5000/api/clasificar", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Error en el backend: ${response.statusText}`);
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Error al procesar la imagen" }), { status: 500 });
    }
  }  