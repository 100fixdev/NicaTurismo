import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

export default function Explore() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/services")
      .then(r => r.json())
      .then(setServices)
      .catch(() => {
        setServices([
          { id: 1, title: "Hotel Granada", category: "Hospedaje", price: 120, thumbnail: "" },
          { id: 2, title: "Tour Masaya", category: "Experiencia", price: 50, thumbnail: "" }
        ]);
      });
  }, []);

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <h2>Explorar servicios</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {services.map(s => <ServiceCard key={s.id} service={s} />)}
      </div>
    </div>
  );
}
