import React from "react";
import ImagenUnete from '../../assets/img/join/woman.png';
import "./Unete.css";

const Join = ({handleRegistro}) => {

  return (
    <div className="seccion-unete">
      <div className="contenedor-unete">
        <div className="imagen-unete" data-aos="fade-right" data-aos-offset="200" data-aos-delay="200">
          <img src={ImagenUnete} alt="" />
        </div>
        <div className="contenido-unete">
          <div className="texto-unete" data-aos="fade-left" data-aos-offset="200" data-aos-delay="400">
            <h2 className="titulo-unete">
              <span className="texto-resaltado">¿</span>
              Quieres unirte 
              <span className="texto-resaltado"> & </span>
              divertirte
              <span className="texto-resaltado">?</span>
            </h2>
            <p className="subtitulo-unete">
              Te mantendremos al tanto de lo que necesitas saber sobre Gymme. Nada más, nada menos.
            </p>
            <div className="btn-unete-container">
              <button onClick={handleRegistro} className="btn-unete">Únete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
