import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";
import './App.css';

import About from "./pages/nuestraMision/Mision";
import Banner from "./pages/inicio/Inicio";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Workouts from "./pages/entrenamientos/Entranamientos";
import Pricing from "./pages/membresias/Membresias";
import Faq from "./pages/preguntas/Preguntas";
import Join from "./pages/unete/Unete";
import Ubicacion from "./pages/ubicacion/Ubicacion";

import Login from "./pages/inicioSesion/InicioSesion";
import Register from "./pages/registro/Registro";

const App = () => {
  const [registro, setRegistro] = useState(false);
  const [inicioSesion, setInicioSesion] = useState(false);
  
    Aos.init({
    duration:500,
    delay:1000
  })

  const handleRegistro = () => {
    setInicioSesion(false);
    setRegistro(true);
  };

  const handleInicioSesion = () => {
    setRegistro(false);
    setInicioSesion(true);
  };

  return (
    <div className="app">
      <Header handleInicioSesion={handleInicioSesion} handleRegistro={handleRegistro}/>
      {registro && 
      <>
        <Register handleInicioSesion={handleInicioSesion}/>
      </>
      }
      {inicioSesion && 
      <>
        <Login handleRegistro={handleRegistro}/>
      </>
      }
      <div id="inicio">
        <Banner handleRegistro={handleRegistro}/>
      </div>

      <div id="nuestra-mision-offset" className="offset"></div>
      <div id="nuestra-mision">
        <About handleRegistro={handleRegistro}/>
      </div>

      <div id="entrenamientos-offset" className="offset"></div>
      <div id="entrenamientos">
        <Workouts />
      </div>

      <div id="planes-offset" className="offset"></div>
      <div id="planes">
        <Pricing handleRegistro={handleRegistro}/>
      </div>

      <div id="preguntas-offset" className="offset"></div>
      <div id="preguntas">
        <Faq />
      </div>

      <div id="ubicacion" className="offset">
        <Ubicacion />
      </div>
      <Join handleRegistro={handleRegistro}/>
      <Footer />
    </div>
  );
};

export default App;

