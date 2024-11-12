import React from "react";
import img from'../../assets/img/banner/bg.png';
import './Inicio.css';

const Banner = ({handleRegistro}) => {

  return (
    <div className="banner-section">
      <div className="banner-container">
        <div className="banner-flex">
          <div className="banner-texto">
            <h1 className="banner-titulo" data-aos="fade-right" data-aos-delay="500">
              Aprovecha la mejor parte de tu día
            </h1>
            <h1 className="banner-titulo-2" data-aos="fade-right" data-aos-delay="500">
              – Tú encajas aquí.
            </h1>
            <p className="banner-subtitulo" data-aos="fade-right" data-aos-delay="600">
              Ofrecemos fitness serio pero dentro de un espacio divertido, amigable y seguro.
            </p>
            <button onClick={handleRegistro} className="banner-btn" data-aos="fade-right" data-aos-delay="700">
              ÚNETE
            </button>
          </div>
          <div className="banner-img" data-aos="fade-left" data-aos-delay="900">
            <img src={img} alt="imagen-banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
