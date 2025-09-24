import React from "react";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="containerfoot--info">
          <h3>Información de contacto</h3>
          <p>Email: info@nicaturismo.com</p>
          <p>Teléfono: +505 1234 5678</p>
        </div>
        <div className="containerfoot--info">
          <h3>Conecta con nosotros</h3>
          <p>
            Síguenos en nuestras redes sociales para estar al tanto de nuestras
            novedades.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              FB
            </a>
            <a href="#" className="social-icon">
              TW
            </a>
            <a href="#" className="social-icon">
              IG
            </a>
          </div>
        </div>
        <div className="containerfoot--info">
          <h3>Colaboradores</h3>
          <p>
            Trabajamos con las mejores agencias y guías locales para ofrecerte
            una experiencia única.
          </p>
          <div className="collaborators-logos">
            <img src="logo1.png" alt="Logo 1" />
            <img src="logo2.png" alt="Logo 2" />
            <img src="logo3.png" alt="Logo 3" />
          </div>
        </div>
        <div className="containerfoot--info">
          <p>
            © {new Date().getFullYear()} NicaTurismo. Todos los derechos
            reservados.
          </p>
          <span>Desarrollado por Innovators Hackathon-2025</span>
        </div>
      </div>
    </footer>
  );
}
