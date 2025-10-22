import React from "react";

import socialImg1 from "../../assets/img/social/social-1.png";
import socialImg2 from "../../assets/img/social/icons8-instagram-logo-96.png";
import socialImg3 from "../../assets/img/social/social-3.png";
import socialImg4 from "../../assets/img/social/social-4.png";
import socialImg5 from "../../assets/img/social/icons8-aplicación-telegrama-96.png";
import socialImg6 from "../../assets/img/social/icons8-whatsapp-96.png";
import socialImg7 from "../../assets/img/social/icons8-gmail-nuevo-96.png";

const SocialFeed = (props) => {
  return (
    <div className="row">
      <div
        className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow animate__fadeInUp"
        data-wow-duration=".9s"
        data-wow-delay=".7s"
      >
        <div className="social__item social__border-color-2 d-flex align-items-center justify-content-between">
          <div className="social__content-box d-flex align-items-center">
            <div className="social__icon">
              <img src={socialImg2} alt="" />
            </div>
            <div className="social__text">
              <h4 className="social__title">
                <a href="#">Instagram</a>
              </h4>
              <span>MESSAGING</span>
            </div>
          </div>
          <div className="social__link social__color-2">
            <a href="#">
              <span>
                <i className="fal fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow animate__fadeInUp"
        data-wow-duration=".9s"
        data-wow-delay="1.1s"
      >
        <div className="social__item social__border-color-4 d-flex align-items-center justify-content-between">
          <div className="social__content-box d-flex align-items-center">
            <div className="social__icon">
              <img src={socialImg5} alt="" />
            </div>
            <div className="social__text">
              <h4 className="social__title">
                <a href="#">Telegram</a>
              </h4>
              <span>MESSAGING</span>
            </div>
          </div>
          <div className="social__link social__color-2">
            <a href="#">
              <span>
                <i className="fal fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow animate__fadeInUp"
        data-wow-duration=".9s"
        data-wow-delay="1.1s"
      >
        <div className="social__item social__border-color-4 d-flex align-items-center justify-content-between">
          <div className="social__content-box d-flex align-items-center">
            <div className="social__icon">
              <img src={socialImg6} alt="" />
            </div>
            <div className="social__text">
              <h4 className="social__title">
                <a href="#">WhatsApp</a>
              </h4>
              <span>MESSAGING</span>
            </div>
          </div>
          <div className="social__link social__color-2">
            <a href="#">
              <span>
                <i className="fal fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 mb-30 wow animate__fadeInUp"
        data-wow-duration=".9s"
        data-wow-delay="1.1s"
      >
        <div className="social__item social__border-color-4 d-flex align-items-center justify-content-between">
          <div className="social__content-box d-flex align-items-center">
            <div className="social__icon">
              <img src={socialImg7} alt="" />
            </div>
            <div className="social__text">
              <h4 className="social__title">
                <a href="#">Gmail</a>
              </h4>
              <span>MESSAGING</span>
            </div>
          </div>
          <div className="social__link social__color-2">
            <a href="#">
              <span>
                <i className="fal fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;
