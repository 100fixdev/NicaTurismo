import React, { useState } from "react";
import "../styles/Navbars.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-container--logo">
          <img
            className="logo"
            src="/src/images/logos/Logo nicas tour_Mesa de trabajo 1.png"
            alt=""
          />
        </div>

        {/* Menú de escritorio */}
        <div className="nav-container--links">
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            {/* <li><a href="#inicio">Inicio</a></li> */}
            <li>
              <a href="#destinos">Iniciar</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <a href="#tours">Acerca de</a>
            </li>
          </ul>
        </div>

        {/* Botón hamburguesa */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}
