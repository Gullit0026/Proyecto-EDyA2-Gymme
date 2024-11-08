import React from "react";
import { faq } from "../data";
import { Accordion } from "./index";
import "./faq.css";

const Faq = () => {
  const { accordions, icon, title } = faq;

  return (
    <section className="faq-section">
      <div
        className="faq-container"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="200"
      >
        <div className="section-title-group">
          <img src={icon} alt="FAQ icon" className="icon-lg-hidden" />
          <h2 className="section-title-heading">
            {title} <span className="title-highlight">.</span>
          </h2>
        </div>
        <div
          className="accordion-list"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="200"
        >
          {accordions.map((accordion, index) => (
            <Accordion accordion={accordion} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
