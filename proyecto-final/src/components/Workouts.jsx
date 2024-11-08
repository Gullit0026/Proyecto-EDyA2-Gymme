import React from 'react';
import CalendarIcn from '../../src/assets/img/workouts/icons/calendar.svg';
import {WorkoutSlider} from "./index"
import './Workouts.css'

const Workouts = () => {
  
  return (
    <section>
      {/* section title */}
      <div className='entrenamientos-container' data-aos="fade-down" data-aos-dely="200">
        <img src={CalendarIcn} alt="icon" />
        <h2>
          Programas de entrenamiento
        </h2>
      </div>
      {/* slider */}
      <div data-aos="fade-up" data-aos-dely="400">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
