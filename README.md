# Library App — README

> Documentación completa del proyecto: arquitectura, cómo ejecutar localmente, endpoints principales, flujos (login, CRUD de Authors/Books), y solución a problemas comunes.

---

## 🔖 Resumen del proyecto
Aplicación web (Next.js + React + Tailwind) para gestionar una **biblioteca** con CRUD de **Authors** y **Books**.  
Incluye:
- Autenticación simple (login contra `/api/auth`).
- Panel **Admin** (`/library`) con CRUD completo.
- **Dashboard** (`/dashboard`) para usuarios normales que solo ven libros.
- Modales para crear/editar/eliminar autores y libros (UI con Tailwind).
- Contexto global para estado de usuario (persistencia en `localStorage`).

---

## 🧭 Tech stack
- Next.js (Pages-based)
- React (Client components)
- Tailwind CSS
- Axios (HTTP)
- Mongoose + MongoDB (database)
- react-toastify (toasts)
- @heroui/react (UI controls usados)
- Node 18+ / npm o yarn

---

## Estructura principal (resumen)
```
/pages
  /api
    auth.ts
    users.ts
    authors.ts
    books.ts
  index.tsx
  dashboard/index.tsx
  library/index.tsx
/src
  /components
    /button
      AuthorModal.tsx
      BookModal.tsx
  /cardLibrary
    cardBook.tsx
    cardLibrary.tsx
  /services
    auth.ts
    authors.ts
    books.ts
  /context
    Context.tsx
    Provider.tsx
  /database
    /models
      authors.ts
      books.ts
      users.ts
  /lib
    dbconection.ts
  styles/globals.css
tailwind.config.js
next.config.js
```

---

## ⚙️ Requisitos locales
- Node v18+ (recomendado)
- MongoDB (local o Atlas)
- npm o yarn

---

## ✅ Variables de entorno (archivo `.env.local`)
```
MONGODB_URI=mongodb+srv://user:password@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
NEXT_PUBLIC_API_URL=http://localhost:3000/api
PORT=3000
```

---

## 📦 Instalación y ejecución

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```
Abre: `http://localhost:3000`

3. Construir / producción:
```bash
npm run build
npm run start
```

---

## 🗂️ Conexión a DB
```ts
import mongoose from 'mongoose';

const dbConnection = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
};

export default dbConnection;
```

---

## 🔌 Endpoints relevantes
- `GET /api/auth`
- `GET /api/authors`
- `GET /api/books`

### Ejemplo login
```bash
curl -X POST http://localhost:3000/api/auth   -H "Content-Type: application/json"   -d '{"email":"daniel@example.com","password":"123456"}'
```

---

## 🧠 Contexto y persistencia
- Guarda `userLogged` en localStorage.
- Lee en `useEffect` para evitar hydration error.
- Redirige automáticamente según el rol.

---

## 🔁 Logout robusto
```ts
const handleLogout = () => {
  localStorage.removeItem('userLogged');
  setUserLogged(null);
  setIsActive(false);
  window.location.href = '/';
};
```

---

## 🎨 UI / Modals / Cards
- Tailwind CSS con estilo moderno.
- `CardBook` usa `next/image`.
- `AuthorModal` y `BookModal` con diseño centrado, sombras suaves y colores adaptativos.

---

## 🐛 Problemas comunes
### Hydration failed
Marcar componentes con `"use client"` y evitar `window` en SSR.

### Logout redirige mal
Inicializar `userLogged` en `null` y usar `window.location.href`.

### Imagen no válida
Configurar `next.config.js` con `images.remotePatterns`.

---

## 📌 Tips finales
- Controlar autenticación desde el Contexto global.
- Mantener componentes modales controlados.
- Validar URLs y entradas.
- Crear un usuario admin para pruebas.











This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
