import React, { useState, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import NuestraMision from "../pages/nuestraMision/Mision";
import Inicio from "../pages/inicio/Inicio";
import Entrenamientos from "../pages/entrenamientos/Entranamientos";
import Membresias from "../pages/membresias/Membresias";
import Preguntas from "../pages/preguntas/Preguntas";
import Unete from "../pages/unete/Unete";
import Ubicacion from "../pages/ubicacion/Ubicacion";
import RecuperoPassword from "../pages/recuperoPassword/RecuperoPassword";

import Footer from "../Components/Shared/footer/Footer";
import Header from "../Components/Shared/header/Header";

import InicioSesion from "../Components/Index/inicioSesion/InicioSesion";
import Registro from "../Components/Index/registro/Registro";
import RecuperarPassword from "../Components/Index/recuperarPassword/RecuperarPassword";
import Chat from "../Components/Index/chat/Chat";

const AppRoutes = () => {
  const [registro, setRegistro] = useState(false);
  const [inicioSesion, setInicioSesion] = useState(false);
  const [password, setPassword] = useState(false);
  const [logged, setLogged] = useState(false);

  const {correo} = useParams(null);

  Aos.init({
    duration: 500,
    delay: 1000,
  });
  const handleLogged = () => {
    setInicioSesion(false);
    setRegistro(false);
    setPassword(false);
    setLogged(true);
  }

  const handleRegistro = () => {
    if (!logged){
      setInicioSesion(false);
      setRegistro(true);
    }
  };

  const handleInicioSesion = () => {
    setRegistro(false);
    setInicioSesion(true);
  };

  const handleRecuperarPassword = () => {
    setRegistro(false);
    setInicioSesion(false);
    setPassword(true);
  };

  const handleCancelar = () => {
    setRegistro(false);
    setInicioSesion(false);
  };

  const handleCancelarPassword = () => {
    setPassword(false);
    setInicioSesion(true);
  };

  return (
    <div className="app">
      <Header handleInicioSesion={handleInicioSesion} handleRegistro={handleRegistro}  logged={logged}/>

      {/* Rutas condicionales para Login y Registro */}
      {registro && <Registro handleInicioSesion={handleInicioSesion} handleCancelar={handleCancelar} />}
      {inicioSesion && <InicioSesion handleLogged={handleLogged} handleRegistro={handleRegistro} handleCancelar={handleCancelar} handleRecuperarPassword={handleRecuperarPassword} />}
      {password && <RecuperarPassword handleRecuperarPassword={handleRecuperarPassword} handleCancelarPassword={handleCancelarPassword} />}

      <div id="inicio"><Inicio handleRegistro={handleRegistro} logged={logged}/></div>
      <div id="nuestra-mision"><NuestraMision handleRegistro={handleRegistro} logged={logged}/></div>
      <div id="entrenamientos"><Entrenamientos /></div>
      <div id="planes"><Membresias handleRegistro={handleRegistro} logged={logged}/></div>
      <div id="preguntas"><Preguntas /></div>
      <div id="ubicacion"><Ubicacion /></div>
      <Chat/>

      <Unete handleRegistro={handleRegistro} logged={logged}/>
      <Footer />
    </div>
  );
};

export default AppRoutes;
