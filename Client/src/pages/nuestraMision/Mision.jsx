import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './Mision.css';

const About = ({handleRegistro}) => {
  return (
    <div className="seccion-nuestra-mision">
      <div className="container-nuestra-mision">

        <div className="titulo-nuestra-mision" data-aos="fade-down" data-aos-delay="100">
          <img src='/src/assets/img/about/icons/users-icn.svg' alt="icon" />
          <h2>
            Nuestra Misión
            <span className="titulo-nuestra-mision-2">.</span>
          </h2>
        </div>

        <p className="texto-nuestra-mision" data-aos="fade-up" data-aos-delay="200">
          Nos distinguimos por nuestro ambiente motivador inigualable, nuestro personal capacitado y nuestros equipos de ejercicio de primera calidad,
          que ayudan a nuestros miembros a alcanzar sus objetivos de acondicionamiento físico individuales.
        </p>

        <p className="texto-nuestra-mision" data-aos="fade-up" data-aos-delay="300">
          La fuerza de nuestra sincera identidad se utiliza para inspirar a cada persona que ingresa a nuestros gimnasios a mejorar.
        </p>

        <div className="nuestra-mision-btn-container">
          <button onClick={handleRegistro} className="nuestra-mision-btn" data-aos="fade-up" data-aos-delay="500">
            ÚNETE
            <IoIosArrowDroprightCircle className="nuestra-mision-btn-icon" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
