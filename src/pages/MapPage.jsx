import React from "react";

export default function MapPage() {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <h2>Mapa Turístico</h2>
      <div className="map-placeholder card" style={{ marginTop: 12 }}>
        Aquí irá el mapa (Google Maps / Leaflet). En el hackathon puedes mostrar esto como placeholder.
      </div>
    </div>
  );
}
