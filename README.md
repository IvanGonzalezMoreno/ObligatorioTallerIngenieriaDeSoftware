🌐 Ver Demo https://ivangonzalezmoreno.github.io/ObligatorioTallerIngenieriaDeSoftware/index.htmlhttps://ivangonzalezmoreno.github.io/ObligatorioTallerIngenieriaDeSoftware/index.html

🏨 Hotel Las Gaviotas
https://ivangonzalezmoreno.github.io/ObligatorioTallerIngenieriaDeSoftware/index.html
Aplicación web para la gestión integral de reservas y operaciones de un hotel.

Hotel Las Gaviotas es una aplicación web desarrollada con HTML, CSS y JavaScript que simula el funcionamiento de un sistema de reservas hoteleras, incluyendo el flujo completo desde la creación de una reserva hasta el check-out.

El proyecto fue desarrollado como parte del Taller de Ingeniería de Software — ORT Uruguay, aplicando separación de responsabilidades, persistencia en el navegador y pruebas automatizadas con Jest.

📸 Vista del proyecto

![Hotel Las Gaviotas](images/FrenteDelHotel.jpg)

La aplicación cuenta con una interfaz orientada tanto al huésped como al administrador del hotel, con diferentes funcionalidades según el rol.

✨ Funcionalidades

👤 Huésped

🏨 Visualización de información del hotel.

🛏️ Consulta de habitaciones y características.

📅 Creación de reservas.

💰 Cálculo automático del costo de la estadía.

➕ Selección de servicios adicionales.

🖼️ Galería de imágenes.

⭐ Consulta y creación de reseñas.

❓ Sección de preguntas frecuentes.

🔎 Consulta de disponibilidad.

🔐 Administrador

🔑 Inicio y cierre de sesión.

📋 Gestión de reservas.

✅ Aceptación de reservas.

🗑️ Eliminación de reservas.

🛏️ Gestión de disponibilidad y precios de habitaciones.

📥 Check-in de huéspedes.

📤 Check-out de huéspedes.

📊 Consulta de estadísticas.

🔄 Actualización automática de la disponibilidad según el estado de las reservas.

🔄 Flujo de una reserva

El sistema contempla el ciclo de vida de una reserva:

                    ┌─────────────┐
                    │   Reserva   │
                    │  pendiente  │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Reserva   │
                    │   aceptada  │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Check-in   │
                    │   en curso  │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Check-out  │
                    │  finalizada │
                    └─────────────┘

Durante este proceso, la disponibilidad de las habitaciones se actualiza según corresponda.

🛠️ Tecnologías

Tecnología

Uso

HTML5

Estructura de las páginas

CSS3

Diseño y estilos

JavaScript

Lógica y funcionalidades

LocalStorage

Persistencia de datos

Jest

Testing automatizado

JSDOM

Simulación del DOM para las pruebas

🧪 Testing

El proyecto cuenta con pruebas automatizadas utilizando Jest y JSDOM.

Actualmente se incluyen tests para:

Login

Reservas

Gestión de reservas

Consulta de disponibilidad

Check-in

Check-out

Para ejecutar las pruebas:

npm install
npm test

💾 Persistencia

El proyecto no utiliza un backend ni una base de datos externa.

La información se persiste mediante LocalStorage, incluyendo:

Reservas.

Reservas aceptadas.

Disponibilidad de habitaciones.

Precios.

Reseñas.

Estado de sesión del administrador.

Esto permite simular el funcionamiento de una aplicación con persistencia sin necesidad de configurar un servidor o una base de datos.

🔑 Acceso administrativo

Para probar las funcionalidades de administrador:

Email: admin@gmail.com
Contraseña: 1234

⚠️ Estas credenciales son únicamente para demostración académica. El sistema de autenticación no está diseñado para un entorno de producción.

🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio

git clone URL_DEL_REPOSITORIO

2. Entrar al proyecto

cd ProyectoHotelLasGaviotas

3. Instalar dependencias

npm install

4. Ejecutar

Al tratarse de una aplicación frontend estática, se puede abrir directamente:

index.html

También se recomienda utilizar Live Server desde Visual Studio Code para una mejor experiencia durante el desarrollo.

5. Ejecutar los tests

npm test

📂 Estructura

ProyectoHotelLasGaviotas/
│
├── index.html
├── habitaciones.html
├── reservas.html
├── galeria.html
├── preguntasFrecuentes.html
├── iniciarSesion.html
│
├── gestionReservas.html
├── editarHabitaciones.html
├── consultarDisponibilidad.html
├── check-in.html
├── check-out.html
├── estadisticas.html
│
├── images/
│
├── styles/
│   └── styles.css
│
├── script/
│   ├── app.js
│   └── core/
│       ├── reserva.js
│       ├── gestionReserva.js
│       ├── habitaciones.js
│       ├── consultarDisponibilidad.js
│       ├── check-in.js
│       ├── check-out.js
│       ├── editarHabitaciones.js
│       ├── estadisticas.js
│       ├── login.js
│       ├── logout.js
│       ├── crearReview.js
│       └── mostrarReview.js
│
├── __tests__/
│   ├── login.test.js
│   ├── reserva.test.js
│   ├── gestionReserva.test.js
│   ├── consultarDisponibilidad.test.js
│   ├── check-in.test.js
│   └── check-out.test.js
│
├── package.json
└── package-lock.json

🎯 Objetivo del proyecto

El objetivo fue desarrollar una aplicación web que permitiera representar de forma práctica los principales procesos de gestión de un hotel, trabajando conceptos como:

Desarrollo frontend.

Manipulación del DOM.

Manejo de eventos.

Persistencia de información.

Validación de datos.

Gestión de estados.

Separación de funcionalidades.

Testing automatizado.

Experiencia de usuario.

📚 Contexto académico

Taller de Ingeniería de Software
ORT Uruguay

Proyecto desarrollado como parte de la formación en desarrollo de software.

👨‍💻 Autor

Iván González

Estudiante de Analista en Tecnologías de la Información — ORT Uruguay.

⭐ Si te resulta interesante el proyecto, podés darle una estrella al repositorio.