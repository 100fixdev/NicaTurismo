import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/services/${id}`)
      .then(r => r.json())
      .then(setService)
      .catch(() => setService({ id, title: "Servicio de ejemplo", description: "Descripción...", price: 100, availability: true }));
  }, [id]);

  if (!service) return <div className="container">Cargando...</div>;

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ serviceId: service.id, title: service.title, price: service.price });
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  }

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <h2>{service.title}</h2>
      <p style={{ color: "#6b7280" }}>{service.description}</p>
      <div style={{ marginTop: 12 }}>
        <strong>${service.price}</strong>
        <div style={{ marginTop: 8 }}>
          <button className="btn" onClick={addToCart}>Reservar</button>
        </div>
      </div>
    </div>
  );
}
