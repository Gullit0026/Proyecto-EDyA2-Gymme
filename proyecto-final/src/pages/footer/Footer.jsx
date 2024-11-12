import React from 'react';
import Logo from '../../assets/img/header/logo.svg';
import "./footer.css";

const Footer = () => {

  return (
    <footer className="pie-de-pagina">
      <div className="contenedor-pie" data-aos="fade-up" data-aos-delay="400">
        <a className="logo-pie">
          <img src={Logo} alt="Logo" />
        </a>
        <p className="copyright-pie">Todos los derechos reservados. Gymme 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
