import React from "react";

import SectionTitle from "../../components/SectionTitle";

import shapeImg1 from "../../assets/img/testimonial/testi-shape-2.png";
import shapeImg2 from "../../assets/img/testimonial/testi-shape-3.png";
import shapeImg3 from "../../assets/img/testimonial/testi-shape-4.png";

import testimonialImg1 from "../../assets/img/testimonial/testi-1.png";
const Ceo = () => {
  return (
    <div className=" ceo__plr grey-bg p-relative">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-7 col-xxl-9 wow animate__fadeInUp"
            data-wow-duration="1.1s"
          >
            <SectionTitle
              sectionClass=" text-center z-index pb-40 section-title-fixed-width"
              subTitleClass="section-subtitle section-white-bg"
              titleClass="section-title text-black"
              Title="Fundadores"
            />
          </div>
          <div className="ceo__list">
            <div
              className="z-index wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="ceo__item">
                <div className="ceo__main-img">
                  <img src={testimonialImg1} alt="Fundador 1" />
                  <div className="ceo__overlay">
                    <div className="ceo__social-box">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ceo__content">
                  <h5 className="ceo__author-name">Santiago Henao Monsalve</h5>
                  <p>
                    Desarrollador Senior de software con más de 5 años de
                    experiencia en la creación de soluciones innovadoras y
                    eficientes para diversas industrias.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="z-index wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="ceo__item">
                <div className="ceo__main-img">
                  <img src={testimonialImg1} alt="Fundador 2" />
                  <div className="ceo__overlay">
                    <div className="ceo__social-box">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ceo__content">
                  <h5 className="ceo__author-name">
                    Brayam Alexander Chica Betancur
                  </h5>
                  <p>
                    Ingeniero en sistemas apasionado por el desarrollo web y las
                    nuevas tecnologías.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="z-index wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="ceo__item">
                <div className="ceo__main-img">
                  <img src={testimonialImg1} alt="Fundador 1" />
                  <div className="ceo__overlay">
                    <div className="ceo__social-box">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ceo__content">
                  <h5 className="ceo__author-name">Julia Quintero Quintero</h5>
                  <p>
                    Especialista en innovación y emprendimiento tecnológico, con
                    amplia experiencia liderando equipos ágiles y proyectos de
                    desarrollo de software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ceo__shape-1">
        <img src={shapeImg1} alt="shape" />
      </div>
      <div className="ceo__shape-2">
        <img src={shapeImg2} alt="shape" />
      </div>
      <div className="ceo__shape-3">
        <img src={shapeImg3} alt="shape" />
      </div>
    </div>
  );
};
export default Ceo;
