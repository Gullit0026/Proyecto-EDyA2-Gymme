import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "./planList.css";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(1);

  return (
    <div
      className="plan-list-container"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="600"
    >
      {plans.map((plan, ind) => {
        const { name, price, list } = plan;
        return (
          <div
            key={ind}
            className="plan-card"
          >
            <div
              className={`plan-content ${ind === index ? "active" : ""}`}
              onClick={() => setIndex(ind)}
            >
              <div className="plan-info">
                <div className={`plan-name ${ind === index ? "selected" : ""}`}>
                  {name}
                </div>
                <div className="plan-price">
                  <div className="price-amount">
                    <span className="price-value">{price}</span>
                    <span className="currency">$</span>
                  </div>
                  <span className="price-duration">/month</span>
                </div>
              </div>
              <div>
                <ul className="plan-features">
                  {list.map((item, ind) => {
                    const { name } = item;
                    return (
                      <li className="feature-item" key={ind}>
                        <BsCheckCircleFill />
                        <div>{name}</div>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className={`plan-button ${ind === index ? "selected" : ""}`}
                >
                  Join now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
