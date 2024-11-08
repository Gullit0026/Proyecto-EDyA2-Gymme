import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './About.css';

const About = () => {
  return (
    <section>
      <div className="container">

        <div className="titulo-nuestra-mision" data-aos="fade-down" data-aos-delay="100">
          <img src='/src/assets/img/about/icons/users-icn.svg' alt="icon" />
          <h2>
            Our misson
            <span className="titulo-nuestra-mision-2">.</span>
          </h2>
        </div>

        <p className="texto-nuestra-mision" data-aos="fade-up" data-aos-delay="200">
          We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment,
          which supports our members in meeting their individual fitness goals.
        </p>

        <p className="texto-nuestra-mision" data-aos="fade-up" data-aos-delay="300">
          The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.
        </p>

        <div className="nuestra-mision-btn-container">
          <a href='Join Now' className="nuestra-mision-btn" data-aos="fade-up" data-aos-delay="500">
            JOIN NOW
            <IoIosArrowDroprightCircle className="nuestra-mision-btn-icon" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
