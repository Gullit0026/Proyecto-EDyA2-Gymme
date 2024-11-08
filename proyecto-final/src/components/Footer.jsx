import React from 'react';
import { footer } from "../data";
import "./footer.css";

const Footer = () => {
  const { copyrightText, logo } = footer;
  
  return (
    <footer className="footer">
      <div className="footer-container" data-aos="fade-up" data-aos-delay="400">
        {/* logo */}
        <a className="footer-logo">
          <img src={logo} alt="Logo" />
        </a>
        {/* text copyright */}
        <p className="footer-copyright">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
