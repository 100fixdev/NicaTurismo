import React, { useState } from "react";
import "../styles/Navbars.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">NicaTurismo</h1>

        {/* Menú de escritorio */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* <li><a href="#inicio">Inicio</a></li> */}
          <li><a href="#destinos">Iniciar</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#tours">Acerca de</a></li>
        </ul>

        {/* Botón hamburguesa */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}
