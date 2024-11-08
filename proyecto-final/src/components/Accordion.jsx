import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import "./accordion.css";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = accordion;

  return (
    <div className="accordion-container" onClick={() => setIsOpen(!isOpen)}>
      <div className="accordion-card">
        <div className="accordion-header">
          <h6 className="accordion-question">{question}</h6>
          <div className="accordion-icon">
            {isOpen ? (
              <FaChevronCircleUp className="icon-open" />
            ) : (
              <FaChevronCircleDown className="icon-closed" />
            )}
          </div>
        </div>
        <div className={`accordion-answer ${isOpen ? 'open' : ''}`}>
          <div className="answer-content">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
