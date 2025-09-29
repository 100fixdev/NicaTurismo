import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/reservations?userId=demo-user")
      .then(r => r.json())
      .then(setReservations)
      .catch(() => setReservations([
        { id: 1, title: "Hotel Granada", date: "2025-10-15", status: "Confirmada" },
        { id: 2, title: "Tour Masaya", date: "2025-10-16", status: "Pendiente" }
      ]));
  }, []);

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div className="dashboard">
        <aside className="sidebar">
          <h3>Mi Panel</h3>
          <ul>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Reservas</a></li>
            <li><a href="#">Pagos</a></li>
            <li><a href="#">Recomendaciones</a></li>
          </ul>
        </aside>
        <div className="content">
          <h2>Bienvenido, Usuario</h2>
          <section>
            <h3>Reservas</h3>
            {reservations.map(r => (
              <div key={r.id} className="card" style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{r.title}</div>
                  <div style={{ color: "#6b7280" }}>{r.date}</div>
                </div>
                <div style={{ color: r.status === "Confirmada" ? "#16a34a" : "#f59e0b" }}>{r.status}</div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
