import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/api/reservations?userId=demo-user")
      .then((r) => r.json())
      .then(setReservations)
      .catch(() =>
        setReservations([
          { id: 1, title: "Hotel Granada", date: "2025-10-15", status: "Confirmada" },
          { id: 2, title: "Tour Masaya", date: "2025-10-16", status: "Pendiente" },
        ])
      );
  }, []);

  return (
    <div className="container" style={{ paddingTop: 24,  height: "100dvh", width: "100%" }}>
      <div className="dashboard" style={{ alignItems: "center" }}>
        <aside className="sidebar" style={{ minHeight: 720, paddingTop: 28, marginTop: 30 }}>
          <div style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 56, height: 56, background: "#231826", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, borderRadius: 8, fontSize: 20
            }}>
              NICAS
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 700 }}>Nicas Tour</div>
            </div>
          </div>

          <ul style={{ listStyle: "none", padding: 0, textAlign: "left", marginTop: 8 }}>
            <li style={{ marginBottom: 16, color: "#0f172a", fontWeight: 700 }}>Panel principal</li>
            <li style={{ marginBottom: 12, color: "#374151" }}>historial de reservas</li>
            <li style={{ marginBottom: 12, color: "#374151" }}>Pagos</li>
            <li style={{ marginBottom: 12, color: "#374151" }}>Recomendados</li>
          </ul>

          <div style={{ marginTop: 36, borderTop: "1px solid #e6e6e6", paddingTop: 16, textAlign: "left" }}>
            <div style={{ marginBottom: 12 }}>Mi perfil</div>
            <div style={{ marginBottom: 12 }}>Ajustes</div>
            <div style={{ marginBottom: 12 }}>Cerrar Sesión</div>
            <div style={{ marginBottom: 12 }}>Ayuda</div>
          </div>
        </aside>

        <div className="content" style={{ width: "100%" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18
          }}>
            <div>
              <h2 style={{ marginBottom: 6 }}>Dashboard</h2>
              <div style={{ color: "#6b7280" }}>Bienvenida, Claudia Ramírez!</div>
            </div>

            <button
              className="btn"
              onClick={() => navigate("/explore")}
              style={{
                background: "#241623",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: 12,
                cursor: "pointer"
              }}
            >
              Buscar Nuevos Viajes
            </button>
          </div>

          {/* Top cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 20
          }}>
            <div style={{
              borderRadius: 12,
              padding: 20,
              background: "#0f5132",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 800, fontSize: 20 }}>Ultimos pagos</div>
                <div style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>Revise su historial</div>
                <div style={{ marginTop: 18, fontWeight: 600 }}>Pagos realizados</div>
              </div>
              <div style={{
                width: 64, height: 64, borderRadius: 32,
                background: "rgba(255,255,255,0.12)", display: "flex",
                alignItems: "center", justifyContent: "center"
              }}>💳</div>
            </div>

            <div style={{
              borderRadius: 12,
              padding: 20,
              background: "#2b8af6",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 800, fontSize: 20 }}>Ultimas reservas</div>
                <div style={{ color: "rgba(255,255,255,0.9)", marginTop: 8 }}>Revise su reservas</div>
                <div style={{ marginTop: 18, fontWeight: 600 }}>05 - Reservas</div>
              </div>
              <div style={{
                width: 64, height: 64, borderRadius: 32,
                background: "rgba(255,255,255,0.18)", display: "flex",
                alignItems: "center", justifyContent: "center"
              }}>📞</div>
            </div>

            <div style={{
              borderRadius: 12,
              padding: 20,
              background: "#c7e04b",
              color: "#0f172a",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 800, fontSize: 20 }}>Recomendaciones</div>
                <div style={{ color: "rgba(0,0,0,0.6)", marginTop: 8 }}>Reciba recomendaciones</div>
                <div style={{ marginTop: 18, fontWeight: 600 }}>Échele un vistazo a las novedades</div>
              </div>
              <div style={{
                width: 64, height: 64, borderRadius: 32,
                background: "rgba(0,0,0,0.06)", display: "flex",
                alignItems: "center", justifyContent: "center"
              }}>✅</div>
            </div>
          </div>

          {/* Main content area: left big card + right bot card */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16 }}>
            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800 }}>Habitaciones Reservadas</div>
                  <div style={{ color: "#6b7280", marginTop: 6 }}>Revise sus estancias recientes</div>
                </div>
                <div style={{ fontSize: 22, color: "#9ca3af" }}>⋯</div>
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{
                  width: "65%",
                  height: 220,
                  borderRadius: 10,
                  backgroundImage: "url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    left: 12,
                    bottom: 12,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 20,
                    textShadow: "0 2px 6px rgba(0,0,0,0.4)"
                  }}>
                    Quinta Doña Rosa
                  </div>
                </div>

                <div style={{ width: "35%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                  <div style={{
                    height: 104,
                    borderRadius: 8,
                    backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop')",
                    backgroundSize: "cover"
                  }} />
                  <div style={{
                    height: 104,
                    borderRadius: 8,
                    backgroundImage: "url('https://images.unsplash.com/photo-1560184897-6b0b8b6b3a10?w=800&q=80&auto=format&fit=crop')",
                    backgroundSize: "cover"
                  }} />
                  <div style={{
                    height: 104,
                    borderRadius: 8,
                    backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80&auto=format&fit=crop')",
                    backgroundSize: "cover"
                  }} />
                  <div style={{
                    height: 104,
                    borderRadius: 8,
                    backgroundImage: "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&auto=format&fit=crop')",
                    backgroundSize: "cover"
                  }} />
                </div>
              </div>
            </div>

            <div style={{
              borderRadius: 12,
              background: "#1f1520",
              color: "#fff",
              padding: 22,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: 84, height: 84, borderRadius: 48, background: "#fff", margin: "0 auto 12px",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#1f1520", fontSize: 40
                }}>IT</div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>¿No sabe donde viajar?</div>
                <div style={{ color: "rgba(255,255,255,0.75)", marginTop: 8 }}>Converse con nuestro chat-Bot para obtener recomendaciones</div>
              </div>

              <button
                className="btn"
                onClick={() => alert("Iniciar conversación (demo)")}
                style={{ marginTop: 18, background: "#2b8af6", padding: "10px 16px", borderRadius: 10 }}
              >
                Conversar
              </button>
            </div>
          </div>

          {/* Simple reservations list (below) */}
          <section style={{ marginTop: 20 }}>
            <h3 style={{ marginBottom: 12 }}>Reservas Recientes</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {reservations.map((r) => (
                <div key={r.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 700 }}>{r.title}</div>
                    <div style={{ color: "#6b7280" }}>{r.date}</div>
                  </div>
                  <div style={{ color: r.status === "Confirmada" ? "#16a34a" : "#f59e0b", fontWeight: 700 }}>{r.status}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
