import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // mock login: store demo token
    localStorage.setItem("token", "demo-token");
    navigate("/dashboard");
  }

  return (
    <div className="container__login">
      <div className="container__login--image">

        <img src="src/images/mujer-grande-camara.png" alt="" />
      </div>
      <div className="container__login--form">
        <h2>Iniciar Sesión</h2>

        <form
          className="login--form"
          style={{ maxWidth: 420 }}
          onSubmit={handleSubmit}
        > <label htmlFor="email">Correo</label>
          <input
            className="input"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            className="input"
            type="password"
            placeholder="azx123"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <button className="btn" type="submit">
            Iniciar
          </button>
        </form>
      </div>
    </div>
  );
}
