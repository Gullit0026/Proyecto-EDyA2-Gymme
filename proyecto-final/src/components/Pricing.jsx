import React from 'react';
import { pricing } from "../data";
import { PlanList } from "./index";
import "./pricing.css";

const Pricing = () => {
  const { icon, plans, title } = pricing;

  return (
    <section className="pricing-section">
      {/* Section title */}
      <div
        className="section-title-group"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <img src={icon} alt="pricing icon" className="pricing-icon" />
        <h2 className="section-title">
          {title}
          <span className="title-dot">.</span>
        </h2>
      </div>
      <div>
        <PlanList plans={plans} />
      </div>
    </section>
  );
};

export default Pricing;
