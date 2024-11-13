import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import BotonesHeader from "../botonesHeader/BotonesHeader";
import Logo from "../../../assets/img/header/logo.svg";
import imgUserLogged from "../../../assets/img/header/imgUserLogged.png";
import './Header.css'

const Header = ({handleInicioSesion, handleRegistro, logged}) => {
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
      {!logged && <BotonesHeader handleInicioSesion={handleInicioSesion} handleRegistro={handleRegistro} />}
      {logged && <img className="imgUserLogged" src={imgUserLogged} alt="imgUserLogged" />}
    </header>
  );
};

export default Header;
