import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errors, setErrors] = useState({ email: "", pw: "" });
  const [touched, setTouched] = useState({ email: false, pw: false });
  const navigate = useNavigate();

  //patron regex para validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //patron regex para min 8 caracteres, al menos una letra y un numero, sin espacios
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[^\s]{8,}$/;

  function validateEmail(value) {
    const v = (value || "").trim();
    if (!v) return "El correo es obligatorio.";
    if (!emailRegex.test(v)) return "Ingrese un correo válido.";
    return "";
  }

  function validatePw(value) {
    if (!value) return "La contraseña es obligatoria.";
    if (/\s/.test(value)) return "La contraseña no puede contener espacios.";
    if (!pwRegex.test(value))
      return "Mínimo 8 caracteres, al menos una letra y un número.";
    return "";
  }

  function handleEmailChange(e) {
    const val = e.target.value;
    setEmail(val);
    if (touched.email) {
      setErrors((s) => ({ ...s, email: validateEmail(val) }));
    }
  }

  function handlePwChange(e) {
    const val = e.target.value;
    setPw(val);
    if (touched.pw) {
      setErrors((s) => ({ ...s, pw: validatePw(val) }));
    }
  }

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    if (field === "email") setErrors((s) => ({ ...s, email: validateEmail(email) }));
    if (field === "pw") setErrors((s) => ({ ...s, pw: validatePw(pw) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailTrimmed = email.trim();
    setEmail(emailTrimmed);
    const emailErr = validateEmail(emailTrimmed);
    const pwErr = validatePw(pw);
    setErrors({ email: emailErr, pw: pwErr });
    setTouched({ email: true, pw: true });
    if (emailErr || pwErr) return;

    // mock login: store demo token
    localStorage.setItem("token", "demo-token");
    navigate("/dashboard");
  }

  const isFormValid = !validateEmail(email) && !validatePw(pw);

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
          noValidate
        >
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            name="email"
            className="input"
            type="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur("email")}
            aria-describedby="email-error"
            autoComplete="email"
          />
          <div id="email-error" className="input-error" aria-live="polite">
            {errors.email && <span style={{ color: "crimson" }}>{errors.email}</span>}
          </div>

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            className="input"
            type="password"
            placeholder="azx123"
            value={pw}
            onChange={handlePwChange}
            onBlur={() => handleBlur("pw")}
            aria-describedby="pw-error"
            autoComplete="current-password"
          />
          <div id="pw-error" className="input-error" aria-live="polite">
            {errors.pw && <span style={{ color: "crimson" }}>{errors.pw}</span>}
          </div>

          <button className="btn" type="submit" disabled={!isFormValid}>
            Iniciar
          </button>
        </form>
      </div>
    </div>
  );
}
