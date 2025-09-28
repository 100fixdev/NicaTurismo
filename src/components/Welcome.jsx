import React from "react";
import "../styles/Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome__container">
      <section className="section__hero">
        <h1>Welcome to NicaTurismo</h1>
        <div className="container__hero">
          <img src="" alt="lugares de Nicaragua" />
        </div>
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
            En NicaTurismo, nos dedicamos a ofrecerte las mejores experiencias
            turísticas en Nicaragua. Desde tours personalizados hasta
            alojamiento de calidad, estamos aquí para hacer de tu viaje una
            experiencia inolvidable.
          </p>
        </div>

        <div className="container__Ofrecemos--images">
          <div className="Ofrecemos__images--item">1</div>
          <div className="Ofrecemos__images--item">2</div>
          <div className="Ofrecemos__images--item">3</div>
          <div className="Ofrecemos__images--item">4</div>
          <div className="Ofrecemos__images--item">5</div>
        </div>
      </section>

      <section className="section__video">
        <div className="container__video">
          <div className="video--frase">
            <p>
              ¡Descubre los tesoros ocultos de Nicaragua! Planifica tu viaje
              soñado ahora!.
            </p>
          </div>
          <div className="video--button">
            <span>Reserva tu viaje ya</span>
            <button>----</button>
          </div>
        </div>
      </section>
    </div>
  );
}
