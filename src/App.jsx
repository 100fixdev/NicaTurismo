import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Páginas */
import Welcome from "./pages/Welcome"; // tu Landing (ya existente)
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard.jsx/index.js";
import Explore from "./pages/Explore";
import ServiceDetail from "./pages/ServiceDetail";
import Cart from "./pages/Cart";
import MapPage from "./pages/MapPage.jsx";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
