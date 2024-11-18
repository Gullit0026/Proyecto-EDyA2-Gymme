import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import "./accordion.css";

const Acordeon = ({ acordeon }) => {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const { pregunta, respuesta } = acordeon;

  return (
    <div className={`tarjeta-acordeon ${estaAbierto ? 'estaAbierto' : ''}`} onClick={() => setEstaAbierto(!estaAbierto)}>
      <div className="encabezado-acordeon">
        <h6 className="pregunta-acordeon">{pregunta}</h6>
        <div className="icono-acordeon">
          {estaAbierto ? (
            <FaChevronCircleUp className="icono-abierto" />
          ) : (
            <FaChevronCircleDown className="icono-cerrado" />
          )}
        </div>
      </div>
      <div className={`respuesta-acordeon ${estaAbierto ? 'abierto' : ''}`}>
        <div className="contenido-respuesta">
          {respuesta}
        </div>
      </div>
    </div>
  );
};

export default Acordeon;
