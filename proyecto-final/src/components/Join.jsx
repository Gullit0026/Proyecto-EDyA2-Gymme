import React from "react";
import { join } from "../data";
import "./join.css";

const Join = () => {
  const { btnText, image, subtitle, title } = join;
  
  return (
    <section className="join-section">
      <div className="container">
        <div className="join-content">
          {/* image */}
          <div className="join-image" data-aos="fade-right" data-aos-offset="200" data-aos-delay="200">
            <img src={image} alt="" />
          </div>
          {/* title and btn */}
          <div className="join-text" data-aos="fade-left" data-aos-offset="200" data-aos-delay="400">
            <h2 className="join-title">
              Wanna join <span className="text-highlight">&</span> have fun?
            </h2>
            <p className="join-subtitle">
              {subtitle}
            </p>
            <button className="join-btn">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
