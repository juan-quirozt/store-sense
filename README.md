# Proyecto Next.js con Flask

Este es un proyecto basado en [Next.js](https://nextjs.org/) creado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Cómo empezar

Primero, inicia el servidor de Flask para el backend:

```bash
cd backend
python app.py
```

Luego, en otra terminal, inicia el servidor de desarrollo de Next.js para el frontend:

```bash
cd frontend
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes empezar a editar la página modificando `app/page.tsx`. Los cambios se reflejarán automáticamente en la aplicación.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente la fuente Inter de Google.

## Más información

Para aprender más sobre Next.js, consulta los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - Aprende sobre las características y API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - Un tutorial interactivo sobre Next.js.

También puedes visitar el [repositorio de Next.js en GitHub](https://github.com/vercel/next.js), donde se aceptan comentarios y contribuciones.

## Despliegue en Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizando la [plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), creada por los desarrolladores de Next.js.

Consulta nuestra [documentación de despliegue](https://nextjs.org/docs/deployment) para más detalles.

