import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const total = cart.reduce((s, i) => s + i.price, 0);

  function payNow() {
    fetch("http://localhost:4000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, userId: "demo-user" })
    })
      .then(r => r.json())
      .then(res => {
        localStorage.removeItem("cart");
        navigate("/dashboard");
        alert("Pago simulado exitoso. ID Reserva: " + res.reservationId);
      })
      .catch(() => alert("Error de pago (mock)."));
  }

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <h2>Carrito</h2>
      {cart.length === 0 ? <p>Tu carrito está vacío</p> : (
        <>
          <ul style={{ marginBottom: 12 }}>
            {cart.map((c, idx) => <li key={idx} className="card" style={{ marginBottom: 8 }}>{c.title} - ${c.price}</li>)}
          </ul>
          <div style={{ marginBottom: 12 }}><strong>Total: ${total}</strong></div>
          <button className="btn" onClick={payNow}>Pagar</button>
        </>
      )}
    </div>
  );
}
