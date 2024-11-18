import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "./Plan.css";

const PlanList = ({handleRegistro}) => {
  const [indice, setIndice] = useState(1);

  const planes = [
    {
      nombre: 'bronce',
      precio: '80mil',
      lista: [
        { nombre: 'acceso ilimitado' },
        { nombre: '1 plan de entrenamiento' },
        { nombre: 'clases gratuitas' },
      ],
    },
    {
      nombre: 'oro',
      precio: '130mil',
      lista: [
        { nombre: 'acceso ilimitado' },
        { nombre: '8 planes de entrenamiento' },
        { nombre: 'clases gratuitas' },
        { nombre: 'entrenador personal' },
        { nombre: '50% en bebidas' },
      ],
    },
    {
      nombre: 'plata',
      precio: '100mil',
      lista: [
        { nombre: 'acceso ilimitado' },
        { nombre: '3 planes de entrenamiento' },
        { nombre: 'clases gratuitas' },
        { nombre: 'entrenador personal' },
      ],
    },
  ];

  return (
    <div className="contenedor-lista-planes" data-aos="fade-up" data-aos-offset="200" data-aos-delay="600">
      {planes.map((plan, ind) => {
        const { nombre, precio, lista } = plan;
        return (
          <div key={ind} className="tarjeta-plan">
            <div className={`contenido-plan ${ind === indice ? "activo" : ""}`} onClick={() => setIndice(ind)}>
              <div className="info-plan">
                <div className={`nombre-plan ${ind === indice ? "seleccionado" : ""}`}>
                  {nombre}
                </div>
                <div className="precio-plan">
                  <div className="monto-precio">
                    <span className="valor-precio">{precio}</span>
                    <span className={`moneda ${ind === indice ? "seleccionado" : ""}`}>$</span>
                  </div>
                  <span className="duracion-precio">/mes</span>
                </div>
              </div>
              <div className="caracteristicas-plan-container">
                <ul className={`caracteristicas-plan ${ind === indice ? "seleccionado" : ""}`}>
                  {lista.map((item, ind) => {
                    const { nombre } = item;
                    return (
                      <li className="item-caracteristica" key={ind}>
                        <BsCheckCircleFill className="item-caracteristica-icon"/>
                        <div>{nombre}</div>
                      </li>
                    );
                  })}
                </ul>
                <div className="btn-plan-container"> 
                  <button onClick={handleRegistro} className={`btn-plan ${ind === indice ? "seleccionado" : ""}`}>
                    Únete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
