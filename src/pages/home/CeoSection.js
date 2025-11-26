import React from "react";

import SectionTitle from "../../components/SectionTitle";

import shapeImg1 from "../../assets/img/testimonial/testi-shape-2.png";
import shapeImg2 from "../../assets/img/testimonial/testi-shape-3.png";
import shapeImg3 from "../../assets/img/testimonial/testi-shape-4.png";

import testimonialImg1 from "../../assets/img/testimonial/Alex B.jpg";
// import testimonialImg2 from "../../assets/img/testimonial/Santiago Henao.jpg";
import testimonialImg3 from "../../assets/img/testimonial/foto.jpg";
const Ceo = () => {
  return (
    <div className=" ceo__plr p-relative">
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
                </div>
                <div className="ceo__content">
                  <h5 className="ceo__author-name">
                    Brayam Alexander Chica Betancur
                  </h5>
                  <p>Lider de QA-Cofundador</p>
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
                </div>
                <div className="ceo__content">
                  <h5 className="ceo__author-name">Santiago Henao Monsalve</h5>
                  <p>Cofundador CTO - CEO</p>
                </div>
              </div>
            </div>
            <div
              className="z-index wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="ceo__item">
                <div className="ceo__main-img">
                  <img src={testimonialImg3} alt="Fundador 1" />
                </div>
                <div className="ceo__content">
                  <h5 className="ceo__author-name">Julian Quintero Quintero</h5>
                  <p>Lider de desarrollo-Cofundador</p>
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

//Redes sociales de los fundadores
/*<div className="ceo__overlay">
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
                  </div>*/
