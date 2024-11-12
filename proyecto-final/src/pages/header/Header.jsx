import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Logo from "../../assets/img/header/logo.svg";
import './Header.css'

const Header = ({handleInicioSesion, handleRegistro}) => {
  const [estaActivo, setEstaActivo] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setEstaActivo(true) : setEstaActivo(false);
    });
  }, []);

  return (
    <header className={`${estaActivo ? "encabezado-activo" : "bg-transparente"} fixed mx-auto`}>
      <a href="#inicio" className="logo">
        <img src={Logo} alt="logo"/>
      </a>
      <Nav />
      <div className="contenedor-botones">
        <button onClick={handleInicioSesion} className="btn-iniciar-sesion">Iniciar sesión</button>
        <button onClick={handleRegistro} className="btn-registrarse">Registrarse</button>
      </div>
    </header>
  );
};

export default Header;

