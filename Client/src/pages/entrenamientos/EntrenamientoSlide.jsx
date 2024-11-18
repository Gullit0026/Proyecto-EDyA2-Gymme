import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./EntrenamientoSlide.css";

import ResistanceImg from '../../assets/img/workouts/resistance.png';
import BoxingImg from '../../assets/img/workouts/boxing.png';
import BodyPumpImg from '../../assets/img/workouts/body-pump.png';
import YogaImg from '../../assets/img/workouts/yoga.png';
import FullBodyImg from '../../assets/img/workouts/full-body.png';
import FitnessImg from '../../assets/img/workouts/fitness.png';
import BattleRopeImg from '../../assets/img/workouts/battle-rope.png';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const WorkoutSlider = () => {

  const workouts = {
    programas: [
      {
        imagen: ResistanceImg,
        nombre: 'Resistencia',
      },
      {
        imagen: BoxingImg,
        nombre: 'Boxeo',
      },
      {
        imagen: BodyPumpImg,
        nombre: 'Body Pump',
      },
      {
        imagen: YogaImg,
        nombre: 'Yoga',
      },
      {
        imagen: FullBodyImg,
        nombre: 'Cuerpo entero',
      },
      {
        imagen: FitnessImg,
        nombre: 'Fitness',
      },
      {
        imagen: BattleRopeImg,
        nombre: 'Battle Rope',
      },
    ],
  };

  const { programas } = workouts;

  return (
    <Swiper modules={[Navigation]} spaceBetween={32} slidesPerView={3} navigation loop={true} className="entrenamientos-slide">
      {programas.map((programa, index) => {
        const { imagen, nombre } = programa;
        return (
          <SwiperSlide key={index} className="entrenamiento-slide">
            <img src={imagen} alt="img-slide" />
            <div className="entremaniento-nombre-cantainer">
              <div className="entrenamiento-nombre">{nombre}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;

