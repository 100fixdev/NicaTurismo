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
