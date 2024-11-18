import React from "react";
import Accordion from "./Accordion";
import QuestionMarkIcn from '../../assets/img/faq/icons/question-mark.svg';
import "./Preguntas.css";

const PreguntasFrecuentes = () => {

  const faq = {
    acordiones: [
      {
        pregunta: '¿Cómo puedo reservar una clase de entrenamiento?',
        respuesta:
          'Para reservar una clase de entrenamiento, puedes hacerlo desde nuestra aplicación móvil o en la recepción del gimnasio. Te recomendamos reservar con antelación para asegurar tu lugar.',
      },
      {
        pregunta: '¿Puedo pagar mi membresía en efectivo?',
        respuesta:
          'Sí, aceptamos pagos en efectivo en la recepción del gimnasio. También puedes optar por pagar con tarjeta de débito o crédito.',
      },
      {
        pregunta: '¿Cuál es la edad mínima para unirse?',
        respuesta:
          'La edad mínima para unirse es de 16 años. Para menores de 18 años, se requiere la autorización de los padres o tutores.',
      },
      {
        pregunta: '¿Hay casilleros disponibles?',
        respuesta:
          'Sí, contamos con casilleros disponibles para que puedas guardar tus pertenencias de manera segura mientras entrenas.',
      },
      {
        pregunta: '¿Cómo puedo cancelar mi membresía?',
        respuesta:
          'Para cancelar tu membresía, por favor acércate a la recepción o contáctanos por teléfono. Ten en cuenta que debes cancelar antes del día 15 para evitar cargos del próximo mes.',
      },
      {
        pregunta: '¿Hay agua disponible en el gimnasio?',
        respuesta:
          'Sí, el gimnasio cuenta con dispensadores de agua gratuitos. También tenemos botellas de agua a la venta en la recepción.',
      },
    ],
  };

  const { acordiones } = faq;

  return (
    <>
      <div className="contenedor-preguntas" data-aos="fade-up" data-aos-offset="300" data-aos-delay="200">
        <div className="grupo-preguntas">
          <img src={QuestionMarkIcn} alt="Icono de Preguntas Frecuentes" className="icono-preguntas1" />
          <h2 className="titulo-preguntas">Preguntas</h2>
          <img src={QuestionMarkIcn} alt="Icono de Preguntas Frecuentes" className="icono-preguntas2" />
        </div>
        <div className="lista-acordeon" data-aos="fade-up" data-aos-offset="300" data-aos-delay="200">
          {acordiones.map((acordeon, indice) => (
            <Accordion acordeon={acordeon} key={indice} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PreguntasFrecuentes;
