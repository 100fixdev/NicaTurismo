import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container" style={{ paddingTop: 32 }}>
      <h2>Iniciar Sesión</h2>
      <form className="form" style={{ maxWidth: 420 }} onSubmit={handleSubmit}>
        <input className="input" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Contraseña" value={pw} onChange={e => setPw(e.target.value)} />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </div>
  );
}
