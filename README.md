# UnaHur Anti-Social Net - Interfaz de Usuario

![Red Social React](./public/react.png)

## 📝 Descripción del Proyecto

UnaHur Anti-Social Net es una red social simple desarrollada como parte de una actividad académica. Esta interfaz de usuario, construida con **React**, permite a los usuarios registrarse, iniciar sesión, crear publicaciones con imágenes y etiquetas, y ver comentarios.

---

## ⚙️ Instrucciones para correr el proyecto en local

### ✅ Requisitos

- Node.js (v16 o superior)
- npm 

### 📦 Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/UnaHur-Anti-Social-Net-Interfaz-de-Usuario.git

   cd UnaHur-Anti-Social-Net-Interfaz-de-Usuario
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir tu navegador en:  
   👉 [http://localhost:5173]

> 💡 **Nota:** Asegurarce de tener corriendo el backend en paralelo en el puerto: 3001

---

## 🌐 URL de la API utilizada

Esta aplicación consume datos desde una API local desarrollada para el proyecto.
 -> `http://localhost:3001`

- **Base URL del backend:**  
  `http://localhost:3001`

- **Endpoints principales disponibles:**

  | Método | Endpoint                      | Descripción                            |
  |--------|-------------------------------|----------------------------------------|
  | GET    | `/users`                      | Listar usuarios                        |
  | POST   | `/users`                      | Crear usuario                          |
  | GET    | `/posts`                      | Listar publicaciones                   |
  | POST   | `/posts`                      | Crear publicación                      |
  | GET    | `/tags`                       | Obtener etiquetas                      |
  | POST   | `/postimages`                 | Subir imagen a una publicación         |
  | GET    | `/postimages/post/:postId`    | Obtener imágenes de un post            |
  | GET    | `/comments/post/:postId`      | Obtener comentarios de un post         |
  | POST   | `/comments`                   | Agregar un comentario                  |

---

## 👩‍💻 Autores

Fernando Cantero
| Estudiante de Programación – Universidad Nacional de Hurlingham

Nahuel Negreti Carballo
| Estudiante de Programación – Universidad Nacional de Hurlingham

Roberto Galeano  
| Estudiante de Programación – Universidad Nacional de Hurlingham

Matias Daniel Diaz
| Estudiante de Programación – Universidad Nacional de Hurlingham

---