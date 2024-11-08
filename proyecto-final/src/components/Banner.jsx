import React from "react";
import './Banner.css';

const Banner = () => {

  return (
    <div className="banner-section">
      <div className="banner-container">
        <div className="banner-flex">
          <div className="banner-texto">
            <h1 className="banner-titulo" data-aos="fade-right" data-aos-delay="500">
              Get the best part of your day
            </h1>
            <h1 className="banner-titulo-2" data-aos="fade-right" data-aos-delay="500">
              – you fit here.
            </h1>
            <p className="banner-subtitulo" data-aos="fade-right" data-aos-delay="600">
              We provide serious fitness but within a fun and friendly, safe space.
            </p>
            <button className="banner-btn" data-aos="fade-right" data-aos-delay="700">
              JOIN NOW
            </button>
          </div>

          {/* imagen (se define en css)*/}
          <div className="banner-img" data-aos="fade-left" data-aos-delay="900"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
