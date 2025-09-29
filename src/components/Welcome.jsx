import React from "react";
import "../styles/Welcome.css";
import {useState} from "react";

export default function Welcome() {

  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    { id: 1, img: "src/images/hoteles/habitacion-1-web.webp", title: "Hospedaje" },
    { id: 2, img: "src/images/hoteles/comedor-web.webp", title: "Restaurantes" },
    { id: 3, img: "src/images/alqulerdeauto2.png", title: "Transportes" },
    { id: 4, img: "src/images/sandb-boarding.jpg", title: "Experiencias" },
    { id: 5, img: "src/images/fondo-rural.jpg", title: "Comunidad" },
  ];

  return (
    <div className="welcome__container">
      <section className="section__hero">
        <h1>Welcome to Nicaragua</h1>
        {/*<div className="container__hero">
          <img src="" alt="lugares de Nicaragua" />
        </div>*/}
      </section>

      <div className="section__description">
        <div className="section__description--title">
          <h2>Descubre la belleza de Nicaragua </h2>
        </div>
        <div className="section__description--text">
          <p>
            Viaja y descubre la rica cultura, impresionantes paisajes y
            vibrantes comunidades con NicaTurismo. La plataforma perfecta para
            planificar y hacer tu proxima aventura una experiencia inolvidable.
          </p>
        </div>
      </div>

      <section className="section__Lugares">
        <h2>Descubre las historias y tradiciones de este hermoso país.</h2>

        <div className="section__Lugares__grid">
          <div className="section__Lugares--item lugar1">
            <div>
              <p>
                Reserva tu hospedaje en diferentes hoteles de Nicaragua listos
                para recibirte en con la mayor calidad y atencion personalizada.
              </p>
            </div>
            <div>
              <span>Explora los Hospedajes</span>
              <button>
                <img src="/src/assets/flecha-derecha-blanca.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="section__Lugares--item lugar2">
            <img src="/src/images/hoteles/hotel-rural-3.webp" alt="" />
          </div>
          <div className="section__Lugares--item lugar3">
            <img src="/src/images/hoteles/hotel-rural-2w.webp" alt="" />
          </div>
          <div className="section__Lugares--item lugar4">
            <img src="/src/images/hoteles/hotel-rural-1.webp" alt="" />
          </div>
        </div>
      </section>

      <section className="section__Ofrecemos">
        <div className="section__Ofrecemos--title">
          <h2>¿Qué nos diferencia de otras plataformas?</h2>
          <p>
            En NicasTour, nos dedicamos a ofrecerte las mejores experiencias
            turísticas en Nicaragua. Desde alojamiento de calidad, hasta pago de
            entradas turisticas estamos aquí para hacer de tu viaje una
            experiencia inolvidable.
          </p>
        </div>

        <div className="container__Ofrecemos--images">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`Ofrecemos__images--item ${
                activeIndex === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="Ofrecemos__overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section__video">
        <div className="container__video">
          <p>
            ¡Descubre los tesoros ocultos de Nicaragua! Planifica tu viaje
            soñado ahora!.
          </p>
          <div className="video--button">
            <span>Reserva tu viaje ya</span>
            <button class="cssbuttons-io-button">
              Explora ya
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
