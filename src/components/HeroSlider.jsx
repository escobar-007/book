import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper stillarini import qilish
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../style/HeroSlider.css";

// Rasmlarni import qilish (assets ichidan)
import Rectangle14 from "../assets/Rectangle14.svg"; // fayl nomini tekshiring

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "TEMURIYLAR DAVRI ADABIYOTI",
      image: Rectangle14,
    },
    {
      id: 2,
      title: "JADIDLAR DAVRI ADABIYOTI",
      image: Rectangle14,
    },
    {
      id: 3,
      title: "O'ZBEK MUMTOZ ADABIYOTI",
      image: Rectangle14,
    },
    {
      id: 4,
      title: "SOVET DAVRI O'ZBEK ADABIYOTI",
      image: Rectangle14,
    },
  ];

  return (
    <div className="hero-container">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item">
              {/* Rasmni o'zgaruvchi orqali beramiz */}
              <img src={slide.image} alt={slide.title} className="slide-bg" />

              <div className="slide-overlay">
                <h1 className="slide-title">{slide.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
