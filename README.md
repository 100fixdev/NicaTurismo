# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



ESTRUCTURA DE CARPETAS---

nica-turismo/
│── nica-turismo-frontend/   # React + Vite     
│   └── src/
│       ├── pages/           # Landing, Login, Dashboard, etc
│       ├── components/      # Navbar, Footer, Cards
│       └── App.jsx
│
│── nica-turismo-backend/    # Node + Express + PostgreSQL
│   ├── routes/              # Rutas API
│   ├── controllers/         # Lógica
│   ├── models/              # Tablas SQL
│   └── index.js







--------------02


nica-turismo-frontend/
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ pages/
│  │  ├─ Landing.jsx
│  │  ├─ Auth.jsx
│  │  ├─ Dashboard.jsx
│  │  ├─ Explore.jsx
│  │  ├─ ServiceDetail.jsx
│  │  ├─ Cart.jsx
│  │  ├─ MapPage.jsx
│  │  └─ Admin.jsx
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Sidebar.jsx
│  │  ├─ ServiceCard.jsx
│  │  └─ ReservationCard.jsx
└─ tailwind.config.js

nica-turismo-backend/
├─ server.js
├─ routes/
│  ├─ auth.js
│  ├─ services.js
│  ├─ reservations.js
│  └─ payments.js
└─ data/
   └─ seed.json  (opcional)


03----------------

nica-turismo-frontend/
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  └─ ServiceCard.jsx
│  ├─ components-css/
│  │  └─ footer.css   (si quieres separar)
│  ├─ pages/
│  │  ├─ Welcome.jsx   (tu landing - ya la tienes; pega aquí)
│  │  ├─ Login.jsx
│  │  ├─ Dashboard.jsx
│  │  ├─ Explore.jsx
│  │  ├─ ServiceDetail.jsx
│  │  ├─ Cart.jsx
│  │  ├─ MapPage.jsx
│  │  └─ Admin.jsx
│  └─ assets/ (imágenes)

# NicaTurismo — Frontend (React + Vite)

![NicaTurismo - Logo](src/images/logos/Logo%20nicas%20tour_Mesa%20de%20trabajo%201.png)

Un frontend bello, rápido y preparado para demos — diseñado para explorar y reservar servicios turísticos en Nicaragua. Este README está pensado para presentar el proyecto en un hackathon: claro, completo y visual.

Tabla de contenidos
- [Qué hace](#qué-hace)
- [Demo visual / Capturas](#demo-visual--capturas)
- [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
- [Configuración de entorno y API](#configuración-de-entorno-y-api)
- [Endpoints usados y comportamiento frente a fallos](#endpoints-usados-y-comportamiento-frente-a-fallos)
- [Estructura de carpetas (resumen)](#estructura-de-carpetas-resumen)
- [Guía rápida de componentes y páginas](#guía-rápida-de-componentes-y-páginas)
- [Estilo visual y recomendaciones para presentación](#estilo-visual-y-recomendaciones-para-presentación)
- [Problemas comunes y soluciones rápidas](#problemas-comunes-y-soluciones-rápidas)
- [Checklist para la demo (pre-hackathon)](#checklist-para-la-demo-pre-hackathon)
- [Ideas de mejora con alto impacto en la votación](#ideas-de-mejora-con-alto-impacto-en-la-votación)
- [Créditos y licencia](#créditos-y-licencia)
- [Contacto / ayuda adicional](#contacto--ayuda-adicional)

---

Qué hace
--------
NicaTurismo (frontend) ofrece:
- Landing atractiva y responsiva con hero y secciones.
- Explorador de servicios turísticos (hoteles, tours, experiencias).
- Página de detalle por servicio con galería, descripción y CTA para reservar.
- Carrito simple y flujo de checkout simulado.
- Dashboard de usuario con reservas y estado.
- Panel administrativo básico (vista Admin).
- Login simulado con token en localStorage (útil en demo).

Demo visual / Capturas
----------------------
Para presentación, coloca capturas en `docs/screenshots/` y enlázalas aquí. Ejemplo:
![Hero ejemplo](src/images/fondo-hero-4k.jpg)

Cómo ejecutar el proyecto
-------------------------
1. Clonar el repositorio y entrar al directorio:
   ```bash
   git clone <repo-url>
   cd nicaturismo
   ```

2. Instalar dependencias:
   ```bash
   pnpm install
   # o
   npm install
   # o
   yarn
   ```

3. Iniciar modo desarrollo:
   ```bash
   pnpm dev
   ```
   Abrir: http://localhost:5173

4. Build y preview:
   ```bash
   pnpm build
   pnpm preview
   ```

Nota: se recomienda usar pnpm para velocidad, pero npm/yarn funcionan igual.

Configuración de entorno y API
------------------------------
Crear un archivo `.env` en la raíz (no comitear claves). Variables recomendadas:

VITE_API_URL por defecto:
```
VITE_API_URL=http://localhost:4000
```

Uso en código:
```js
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';
fetch(`${API}/api/services`);
```

Si no configuras `.env`, el frontend intentará `http://localhost:4000` por defecto.

Endpoints usados y comportamiento frente a fallos
------------------------------------------------
El frontend espera un backend REST. Endpoints principales:

- GET /api/services  
  - Listado de servicios. Si falla: se muestran datos de ejemplo locales.

- GET /api/services/:id  
  - Detalle del servicio. Si falla: muestra fallback con ficha básica.

- GET /api/reservations?userId=:userId  
  - Reservas del usuario en Dashboard. Si falla: carga datos demo.

- POST /api/checkout  
  - Procesa checkout (simulado). Espera un reservationId en respuesta.

- POST /api/login (opcional)  
  - Login — si no existe, el frontend usa un login simulado que guarda token en localStorage.

Manejo de errores: los componentes hacen fallback (mock) y muestran mensajes de error en consola/alerta; en producción se recomienda mostrar UI amigable (toasts).

Estructura de carpetas (resumen)
--------------------------------
Raíz relevante:
- package.json
- vite.config.js
- README.md
- .env (opcional)

src/
- main.jsx — entry
- App.jsx — router + layout (Navbar + Footer)
- App.css, index.css — estilos globales
- assets/ — SVGs y fuentes (Montserat)
- images/ — fotos, logos y galerías
- components/
  - Navbar.jsx
  - Footer.jsx
  - ServiceCard.jsx
  - Welcome.jsx
- pages/
  - Login.jsx
  - Dashboard.jsx
  - Explore.jsx
  - ServiceDetail.jsx
  - Cart.jsx
  - MapPage.jsx
  - Admin.jsx
- styles/ — CSS por página/componentes

Guía rápida de componentes y páginas
-----------------------------------
- Navbar — navegación principal, manejo de sesión (mostrar login / logout).
- Footer — copyright y enlaces.
- Welcome — hero y llamada a explorar.
- ServiceCard — tarjeta reutilizable para listados.
- Login — validación básica y guardado de token demo.
- Explore — fetch de servicios, paginación/filtrado simple.
- ServiceDetail — galería, descripción, añadir al carrito.
- Cart — lista, resumen y botón de checkout (mock).
- Dashboard — reservas del usuario.
- Admin — panel administrativo simple.

Estilo visual y recomendaciones para presentación
------------------------------------------------
Paleta sugerida:
- Primario: #0F7D57 (verde)
- Secundario: #F6AE2D (ambar)
- Neutros: #FFFFFF, #F5F7FA, #182026

Tipografía:
- Montserrat (ya incluida en src/assets). Importar en index.css con @font-face.

Componentes:
- Cards con border-radius 12px, sombra suave.
- CTA destacadas (botones con color primario y microinteracciones).
- Hero con imagen de alta resolución y overlay suave para texto legible.

Ejemplo CSS (usar en styles/*.css):
```css
:root {
  --primary: #0F7D57;
  --accent: #F6AE2D;
  --muted: #6B7280;
}
.card {
  border-radius: 12px;
  background: white;
  box-shadow: 0 8px 24px rgba(15, 21, 30, 0.06);
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.card:hover { transform: translateY(-6px); box-shadow: 0 18px 48px rgba(15,21,30,0.08); }
.btn-primary {
  background: var(--primary);
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(15,125,87,0.12);
}
```

Problemas comunes y soluciones rápidas
-------------------------------------
- Rutas de imágenes/fuentes: usar import o rutas relativas desde src. Ej:
  ```js
  import logo from '../images/logos/Logo nicas tour_Mesa de trabajo 1.png';
  ```
- CORS al consumir API: habilitar CORS en backend o usar proxy en Vite:
  - Ejemplo proxy en vite.config.js (sólo sugerencia, no cambiar estructura):
    ```js
    // vite.config.js (sugerencia)
    export default defineConfig({
      server: {
        proxy: {
          '/api': 'http://localhost:4000'
        }
      }
    });
    ```
- Env vars en Vite: deben empezar con VITE_ para ser accesibles en import.meta.env.
- Errores en producción: revisar console/network, validar rutas y assets en build.

Checklist para la demo (pre-hackathon)
--------------------------------------
- [ ] Verificar VITE_API_URL y endpoints.
- [ ] Preparar seed de datos o backend mock si backend no disponible.
- [ ] Añadir 3 capturas clave en docs/screenshots/ (Hero, Explore, ServiceDetail).
- [ ] Ensayar flujo: login (demo) → explorar → detalle → agregar al carrito → checkout.
- [ ] Verificar responsividad en móvil/tablet.

Ideas de mejora con alto impacto en la votación
-----------------------------------------------
- Integrar mapa interactivo (Leaflet / Mapbox) para buscar por ubicación.
- Reservas en tiempo real (websockets) y confirmaciones instantáneas.
- Integrar calendario y disponibilidad real por servicio.
- Microinteracciones y animaciones (Lottie) en hero y CTA.
- Implementar pruebas E2E (Cypress) para flujos críticos.

Créditos y licencia
-------------------
- Frontend: React + Vite
- Diseño: CSS modular + assets en src/assets y src/images
- Licencia: MIT — usa según conveniencia del equipo.

Contacto / ayuda adicional
--------------------------
Si quieres:
- que agregue badges, screenshots embebidas o un PDF listo para presentar,
- que genere ejemplos de .env, o
- que prepare un backend mock (servidor Express simple) para demo offline,

indica qué prefieres y lo preparo.

Gracias. ¡Éxitos en el hackathon!
