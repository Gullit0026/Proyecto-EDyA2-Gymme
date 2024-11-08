import React from 'react';
import { community } from "../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "./communitySlider.css";

const CommunitySlider = () => {
  const { testimonials } = community;

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides="auto"
      grabCursor={true}
      loop={true}
      className="communitySlider"
    >
      {testimonials.map((slider, index) => {
        const { image, message, name } = slider;
        return (
          <SwiperSlide key={index}>
            <div className="slider-item">
              <div>
                <img src={image} alt="community slider" />
              </div>
              <div className="slider-caption">
                <div className="slider-message">{message}</div>
                <div className="slider-author">
                  <span className="tilde">~</span>
                  <div className="author-name">{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
