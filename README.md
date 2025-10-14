# 💻 TechNova - Sistema de Gestión Interna de Catálogo y Operaciones

## 🚀 Descripción General del Sistema

**TechNova** es un sistema web interno desarrollado para digitalizar y optimizar la gestión del catálogo de productos tecnológicos (laptops, monitores, periféricos y accesorios), usuarios y pedidos básicos de la empresa.

El proyecto aborda y soluciona problemas críticos derivados del uso de hojas de cálculo: duplicidad de productos, falta de información de inventario en tiempo real e inconsistencia en la gestión de pedidos.

### Tecnología y Arquitectura

* **Frontend:** React.js, TypeScript, Next.js (para routing y API Routes), Hooks y Context API.
* **Backend:** Next.js API Routes, Mongoose (MongoDB ODM).
* **Base de Datos:** MongoDB.
* **Comunicación:** Axios para servicios de consumo de API.

### Características y Funcionalidades Clave

| Módulo | Requisitos Cumplidos |
| :--- | :--- |
| **Gestión de Productos** | CRUD completo. Validación de **SKU único**. Listado y filtrado por categoría/marca. Formularios controlados y tipados en TypeScript. |
| **Gestión de Usuarios** | **Login modular** con redirección tras éxito. `UserStore` con operaciones CRUD y logs simulando llamadas HTTP. **Decorador** aplicado a `create` para agregar propiedades por defecto (`role`, `createdAt`). |
| **Dashboard y API** | API RESTful en Next.js (`/api/products`) con `GET`, `POST`, `PUT`, `DELETE`. Servicios Axios implementados para consumo desde el Dashboard. |
| **UI Reutilizable** | Componentes base (`Button`, `Badge`, `Card`) con **props tipadas**, variantes y tamaños. Listado de productos usando un grid de Cards con Badge y Button. |
| **Estado Global** | Uso de **Context API** para la gestión de la autenticación del usuario. |
| **Manejo de Errores** | Captura de errores (`try/catch`) en servicios y UI. Mensajes de error/éxito claros al usuario. |

***

## ⚙️ Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu entorno de desarrollo:

1.  **Node.js:** Versión 18 o superior.
2.  **npm o yarn:** Gestor de paquetes.
3.  **MongoDB:** Una instancia local o un clúster en la nube (ej. MongoDB Atlas) accesible.

### Variables de Entorno

Se requiere un archivo `.env.local` en la raíz del proyecto con la siguiente variable de conexión:

| Variable | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `MONGODB_URI` | Cadena de conexión a la base de datos MongoDB. | `mongodb://localhost:27017/technova_db` |

***

## 🛠️ Instalación y Ejecución

Sigue estos pasos para clonar, configurar y ejecutar el proyecto localmente.

### 1. Clonar el Repositorio

```bash
git clone
cd technova-gestion-interna

npm install
# o
# yarn install


npm run dev
# o
# yarn dev


























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
