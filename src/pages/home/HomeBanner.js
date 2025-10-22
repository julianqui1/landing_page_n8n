import React from "react";
//import { Link } from "react-router-dom";

import sliderImg1 from "../../assets/img/slider/Imagen_principal_Azul-Photoroom.png";
import shapeImg1 from "../../assets/img/slider/shape_azul-1.png";
import shapeImg2 from "../../assets/img/slider/shape_azul-2.png";
import shapeImg3 from "../../assets/img/slider/shape_azul-3.png";
import shapeImg4 from "../../assets/img/slider/shape_azul-4.png";
import shapeImg5 from "../../assets/img/slider/shape-19.png";
import shapeImg6 from "../../assets/img/slider/shape-6.png";
import shapeImg7 from "../../assets/img/slider/shape-7.png";
import shapeImg8 from "../../assets/img/slider/shape_azul-8.png";
import shapeImg10 from "../../assets/img/slider/shape-10.png";
import shapeImg11 from "../../assets/img/slider/shape_azul-11.png";

const Banner = () => {
  return (
    <div className="slider__area bg-custom-blue slider__space slider__plr p-relative z-index fix">
      <div
        className="slider__shape-top-1 d-none d-xl-block wow animate__fadeInUp"
        data-wow-duration="1.1s"
      >
        <img src={shapeImg1} alt="" />
      </div>
      <div
        className="slider__shape-top-2 d-none d-xl-block wow animate__fadeInLeft"
        data-wow-duration="1.1s"
      >
        <img src={shapeImg2} alt="" />
      </div>
      <div
        className="slider__shape-top-3 d-none d-xl-block wow animate__fadeInRight"
        data-wow-duration="1.1s"
      >
        <img src={shapeImg3} alt="" />
      </div>
      <div
        className="slider__shape-top-4 d-none d-xl-block wow animate__fadeInRight"
        data-wow-duration="1.1s"
      >
        <img src={shapeImg4} alt="" />
      </div>
      <div className="slider__shape-top-5 d-none d-xxl-block">
        <img src={shapeImg5} alt="" />
      </div>
      <div className="slider__shape-top-6 d-none d-lg-block">
        <img src={shapeImg6} alt="" />
      </div>
      <div className="slider__shape-top-7 d-none d-sm-block">
        <img src={shapeImg7} alt="" />
      </div>
      <div className="slider__shape-top-8">
        <img src={shapeImg8} alt="" />
      </div>
      <div className="slider__shape-top-10">
        <img src={shapeImg10} alt="" />
      </div>
      <div className="slider__shape-top-11">
        <img src={shapeImg11} alt="" />
      </div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="slider__section-box">
              <h4
                className="section-subtitle char-anim wow animate__fadeInUp "
                data-wow-duration="1.1s"
                data-wow-delay=".3s"
              >
                Haz más, invirtiendo menos
              </h4>
              <h3
                className="hero-title char-anim wow animate__fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".3s"
              >
                Ahorra hasta un 40% en costos operativos y libera cientos de
                horas al año
              </h3>
            </div>
            <div
              className="slider__content wow animate__fadeInUp"
              data-wow-duration="1.1s"
              data-wow-delay=".3s"
            >
              <p className="char-anim-2">
                Optimizamos procesos que te ahorran tiempo y reducen costos con
                soluciones tecnológicas accesibles y efectivas.{" "}
              </p>
            </div>
            <div
              className="slider__btn wow animate__fadeInUp"
              data-wow-duration="1.1s"
              data-wow-delay=".5s"
            ></div>
          </div>
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInRight"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <div className="slider__thumb">
              <img src={sliderImg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

/*<Link to="/about-us" className="main-btn tp-btn-hover alt-color">
  <span>Get Started</span>
  <b></b>
</Link>;*/

/*<div className="slider__shape-top-9 d-none d-xl-block">
        <img src={shapeImg9} alt="" />
      </div>*/
