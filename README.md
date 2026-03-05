---

# Backend 5C - API con Express y MySQL

Este proyecto es una API RESTful desarrollada con **Node.js** y **Express**, diseñada para gestionar grupos y usuarios. Fue creada como parte de las prácticas del grupo 5C para implementar una arquitectura de software organizada y escalable.

## 🚀 Características

* **Framework**: Express.js (v5.2.1).
* **Base de Datos**: MySQL (utilizando `mysql2/promise` para soporte de promesas).
* **Autenticación**: Implementación de seguridad con `bcryptjs` para el hash de contraseñas y `jsonwebtoken` (JWT) para el manejo de sesiones.
* **Despliegue**: Configurado para ser desplegado fácilmente en **Vercel**.

## 📁 Estructura del Proyecto

Siguiendo una arquitectura de capas, el proyecto se organiza de la siguiente manera:

* `src/config/`: Configuración de la conexión a MySQL (Pool).
* `src/controllers/`: Lógica de negocio y manejo de peticiones/respuestas HTTP.
* `src/models/`: Consultas SQL encapsuladas para interactuar con la base de datos.
* `src/routes/`: Definición de los end-points y verbos HTTP.
* `src/app.js`: Punto de entrada y configuración principal de Express.

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio:**
```bash
git clone <url-del-repositorio>
cd backend5c

```


2. **Instalar dependencias:**
```bash
npm install

```


3. **Variables de Entorno:**
Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`:
```env
PORT=3000
DB_HOST=tu_host
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=nombre_de_tu_bd
DB_PORT=3306
JWT_SECRET=tu_clave_secreta

```


4. **Ejecutar en desarrollo:**
El proyecto utiliza `nodemon` para reiniciar automáticamente el servidor al detectar cambios:
```bash
npm run dev

```



## 🛣️ Endpoints Principales

### Grupos (`/api/grupos`)

* `GET /`: Obtiene todos los grupos activos.
* `GET /:id`: Obtiene el detalle de un grupo por su ID.
* `POST /`: Crea un nuevo grupo.

### Usuarios/Auth

* `POST /register`: Registro de nuevos usuarios con encriptación de contraseña.
* `POST /login`: Autenticación y generación de Token JWT.

## 📦 Scripts Disponibles

* `npm start`: Inicia el servidor usando Node.js.
* `npm run dev`: Inicia el servidor en modo desarrollo con Nodemon.

---

### Notas adicionales

* El archivo `.gitignore` ya está configurado para excluir `node_modules` y el archivo `.env` para proteger tus credenciales.
* Para el despliegue en Vercel, se incluye el archivo `vercel.json` que redirige todas las rutas al punto de entrada en `src/app.js`.