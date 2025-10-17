import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css/autoplay";
import "swiper/css";

import brandImg1 from "../../assets/img/brand/brand-1.png";
import brandImg2 from "../../assets/img/brand/brand-2.png";
import brandImg3 from "../../assets/img/brand/brand-3.png";
import brandImg4 from "../../assets/img/brand/brand-4.png";
import brandImg5 from "../../assets/img/brand/brand-2.png";

const Brand = (props) => {
  const { itemClass } = props;
  const sliderOption = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 50,
    slidesPerView: 4,
    speed: 4000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    allowTouchMove: false,
    breakpoints: {
      1200: { slidesPerView: 4 },
      991: { slidesPerView: 3 },
      576: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  };
  return (
    <div
      className={
        itemClass ? itemClass : "brand__area brand__white-bg" //brand__mlr
      }
    >
      <div className="container">
        <div className="pt-5">
          <h2 className="text-center ">Empresas</h2>
          <p className="text-center">
            Empresas que apuestan por la innovación y confían en nuestras
            soluciones inteligentes.
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper-container brand__active">
              <Swiper {...sliderOption} className="swiper-wrapper">
                <SwiperSlide
                  className="swiper-slide wow animate__fadeInUp"
                  data-wow-duration=".7s"
                >
                  <div className="brand__img">
                    <img src={brandImg1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide wow animate__fadeInUp"
                  data-wow-duration=".9s"
                >
                  <div className="brand__img">
                    <img src={brandImg2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide wow animate__fadeInUp"
                  data-wow-duration="1.1s"
                >
                  <div className="brand__img">
                    <img src={brandImg3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide wow animate__fadeInUp"
                  data-wow-duration="1.3s"
                >
                  <div className="brand__img">
                    <img src={brandImg4} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide wow animate__fadeInUp"
                  data-wow-duration="1.5s"
                >
                  <div className="brand__img">
                    <img src={brandImg5} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
