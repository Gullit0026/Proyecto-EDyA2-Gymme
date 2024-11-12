import React from 'react';
import PlanList from './Plan';
import PriceIcn from '../../assets/img/pricing/icons/price.svg';
import "./Membresias.css";

const Precios = ({handleRegistro}) => {
  return (
    <div className="seccion-precios">
      {/* Título de la sección */}
      <div className="grupo-titulo-planes" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200">
        <img src={PriceIcn} alt="icono de precios"/>
        <h2 className="titulo-planes">
          Planes
          <span className="punto-planes">.</span>
        </h2>
      </div>
      <div>
        <PlanList handleRegistro={handleRegistro}/>
      </div>
    </div>
  );
};

export default Precios;
