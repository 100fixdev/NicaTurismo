import React, { useEffect, useState } from "react";
import "../styles/explore.css";

import img1 from "../images/hoteles/habitacion-1-web.webp";
import img2 from "../images/hoteles/vista-al-mar-web.webp";
import img3 from "../images/hoteles/hotel-rural-1.webp";
import img4 from "../images/hoteles/comedor-web.webp";
import img5 from "../images/hoteles/hotel-rural-3.webp";
import img6 from "../images/hoteles/hotel-rural-2w.webp";

export default function Explore() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // intenta traer desde API, si falla usa ejemplos locales (para diseño)
    fetch("http://localhost:4000/api/services")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setServices(
            data.slice(0, 6).map((s, i) => ({ ...s, thumbnail: s.thumbnail || [img1, img2, img3, img4, img5, img6][i] }))
          );
        } else {
          throw new Error("empty");
        }
      })
      .catch(() =>
        setServices([
          { id: 1, title: "Dormitorio Guardabarranco", people: "2 adultos | 2 Niños", priceLabel: "Desde $189 la noche", thumbnail: img1 },
          { id: 2, title: "Cabaña Garza", people: "2 adultos | 1 Niño", priceLabel: "Desde $80 la noche", thumbnail: img3 },
          { id: 3, title: "Casa Jícaro", people: "2 adultos |", priceLabel: "Desde $250 la noche", thumbnail: img2 },
          { id: 4, title: "Dormitorio Jocote", people: "2 adultos | 4 Niños", priceLabel: "Desde $189 la noche", thumbnail: img4 },
          { id: 5, title: "Casa Jinotega", people: "4 adultos | 4 Niños", priceLabel: "Desde $200 la noche", thumbnail: img5 },
          { id: 6, title: "Cabaña el Cerro", people: "2 adultos", priceLabel: "Desde $80", thumbnail: img6 },
        ])
      );
  }, []);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    marginTop: 28,
    alignItems: "stretch",
  };

  const cardStyle = {
    border: "1px solid #e6e0db",
    borderRadius: 6,
    overflow: "hidden",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 320,
  };

  const imgStyle = {
    width: "100%",
    height: 170,
    objectFit: "cover",
    display: "block",
  };

  const metaStyle = { color: "#e07a2c", fontSize: 13, padding: "12px 18px 6px" };
  const titleStyle = { fontSize: 18, fontWeight: 700, padding: "0 18px 6px", color: "#1f2937" };
  const footerStyle = { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 18px 18px" };
  const priceStyle = { color: "#6b7280", fontSize: 14 };

  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <h2 style={{ textAlign: "center", fontSize: 34, marginBottom: 12 }}>Hospedaje Disponible</h2>

      <div style={gridStyle}>
        {services.map((s) => (
          <article key={s.id} style={cardStyle}>
            <img src={s.thumbnail} alt={s.title} style={imgStyle} />
            <div>
              <div style={metaStyle}>{s.people}</div>
              <div style={titleStyle}>{s.title}</div>
            </div>

            <div style={footerStyle}>
              <div>
                <div style={priceStyle}>{s.priceLabel}</div>
              </div>
              <button
                onClick={() => alert(`Reservar: ${s.title}`)}
                style={{
                  borderRadius: 20,
                  padding: "8px 16px",
                  background: "#fff",
                  border: "1.5px solid #1f7a45",
                  color: "#0b4f2f",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                aria-label={`Reservar ${s.title}`}
              >
                Reservar ➜
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
