import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="card">
      <img src={service.thumbnail || "https://via.placeholder.com/600x400"} alt={service.title} style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />
      <h3>{service.title}</h3>
      <p style={{ color: "#6b7280" }}>{service.category}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
        <strong>${service.price}</strong>
        <Link to={`/service/${service.id}`} className="btn">Ver</Link>
      </div>
    </div>
  );
}
