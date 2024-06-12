# Vue-Django Notes App

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen)
![Django](https://img.shields.io/badge/Django-4.x-brightgreen)
![Pinia](https://img.shields.io/badge/Pinia-2.x-yellow)
![Docker](https://img.shields.io/badge/Docker-20.10.7-blue)

## Descripción

Esta es una aplicación web para gestionar notas personales, desarrollada con Vue.js en el frontend y Django en el backend. Los usuarios pueden registrarse, iniciar sesión, crear, ver y gestionar sus notas. La autenticación se maneja con JWT (JSON Web Tokens).

## Características

- **Registro de Usuario:** Permite a los usuarios crear una nueva cuenta.
- **Inicio de Sesión:** Permite a los usuarios autenticarse.
- **Recordar Sesión:** Opción para mantener la sesión iniciada usando `localStorage` o `sessionStorage`.
- **Logout:** Permite a los usuarios cerrar sesión.
- **Gestión de Notas:** Crear y ver notas personales.
- **Autenticación basada en Token:** Protege las rutas y recursos mediante JWT.

## Tecnologías

- **Frontend:** Vue.js 3, Pinia, Bootstrap
- **Backend:** Django 4, Django REST Framework
- **Autenticación:** JWT
- **Contenedores:** Docker

## Instalación

### Prerrequisitos

- Node.js y npm
- Docker y Docker Compose

### Configuración del Backend

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tuusuario/vue-django-notes-app.git
   cd vue-django-notes-app/backend
2. Archivo .env:
  Crear un archivo .env en el directorio backend con las variables de entorno necesarias (puedes usar .env.example como plantilla).

3. Construir y ejecutar los contenedores de Docker:
    ```bash
    docker-compose up --build

4. Acceder al servidor de desarrollo en http://localhost:8000.


### Configuración del Frontend

1. Clonar el repositorio:

   ```bash
   cd ../frontend



2. Instalar dependencias:
    ```bash
    npm install
  
3. Iniciar el servidor de desarrollo:
    ```bash
    npm run server
### Uso

## **Registro e Inicio de Sesión**
  - Navega a /register para crear una nueva cuenta.
  - Navega a /login para iniciar sesión.
## **Crear y Gestionar Notas**
  -Una vez autenticado, serás redirigido a la página de notas donde podrás crear y     ver tus notas personales. 
## **Recordar Sesión**
  -En el formulario de inicio de sesión, selecciona la opción "Remember me" para     mantener la sesión iniciada incluso después de cerrar el navegador.

## **Cerrar Sesión**
  - Haz clic en el botón "Logout" para cerrar sesión.



### Estructura del Proyecto
vue-django-notes-app/
├── backend/
│   ├── manage.py
│   ├── notes/
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
└── README.md


### Licencia
Este proyecto está licenciado bajo la MIT License.



