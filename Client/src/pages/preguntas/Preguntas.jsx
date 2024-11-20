import React, { useState } from "react";
import Accordion from "./Accordion";
import QuestionMarkIcn from '../../assets/img/faq/icons/question-mark.svg';
import io from "socket.io-client";
import { getChats, send, getAll} from "../../utils/Chat";
import "./Preguntas.css";

const socket = io("http://localhost:5100");
console.log("Cliente conectado al servidor");

const PreguntasFrecuentes = ({ setShowChat, logged, handleInicioSesion, correo, setMessagesList, messagesList, admin, allChats, setAllChats}) => {

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

  const getAllChats = async () => {
    if (admin) {
      setAllChats(await getAll());
    }
  };

  const joinRoom = async () => {  
    if (admin) {
      getAllChats();
    } else {
      const chat = await getChats(correo);
      if (!chat) {
        const newChat = await send(correo, [{ texto: "Bienvenido!", autor: "Sistema", time: new Date().toLocaleTimeString() }]);
        setMessagesList(newChat.mensajes); 
      } else {
        setMessagesList(chat.mensajes);
      }
    }

    socket.emit("join_room", correo);
  };

  const handleChat = () => {
    if (!logged) {
      handleInicioSesion();
    } else {
      joinRoom();
      setShowChat(true);
    }
  };

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

        <div className="preguntas-btn-container" data-aos="fade-up" data-aos-offset="300" data-aos-delay="200">
          <h4 className="preguntas-texto">Si tienes alguna otra pregunta contactanos</h4>
          <button onClick={() => handleChat()} className="preguntas-btn">Aquí</button>
        </div>

      </div>
    </>
  );
};

export default PreguntasFrecuentes;
