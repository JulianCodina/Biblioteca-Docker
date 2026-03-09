# 🐳 Practica Docker

Proyecto para aprender la dockerización de una aplicación Full Stack (React, Node.js, MongoDB).

## ✅ Prerrequisitos

- Tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/).

## ⚙️ Configuración (Opcional)

Si deseas usar una base de datos externa (como MongoDB Atlas), crea un archivo `.env` en la carpeta `backend/`:

```env
MONGO_URL="tu_conexion_a_mongodb"
PORT=3000
```

_Por defecto, el proyecto usa la instancia de MongoDB local configurada en Docker._

## 🚀 Ejecución

Corre el siguiente comando en la raíz del proyecto:

```powershell
docker compose up --build
```

### 🔗 Accesos

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3000/books](http://localhost:3000/books)

---

_Este proyecto es parte de un ejercicio de aprendizaje sobre contenedores._
