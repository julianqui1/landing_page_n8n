import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo/logo_letra_blanca_soft-paint_v2.png";
import footerBG from "../../assets/img/footer/footer-bg.jpg";

const Footer = (props) => {
  const { footerLogo, footerClass } = props;
  return (
    <footer>
      <div
        className={footerClass ? footerClass : "footer__area footer__plr"}
        style={{ backgroundImage: `url(${footerBG})` }}
      >
        <div className="container-fluid">
          <div className="row">
            <div
              className="mt-md-4 mt-lg-5 mt-xl-5 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-20 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="footer__widget footer-col-1">
                <div className="footer__logo logo_img_footer">
                  <Link to="/">
                    <img src={footerLogo ? footerLogo : Logo} alt="" />
                  </Link>
                </div>
                <div className="footer__content">
                  <div className="footer__text">
                    <p>
                      Nos diferenciamos porque sabemos qué estrategias generan
                      resultados y qué factores influyen en su éxito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-6 mb-70 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            ></div>
            <div
              className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-6 mb-70 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            ></div> */}
            <div
              className="mt-md-4 mt-lg-5 mt-xl-5 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-20 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="footer__widget footer-col-4">
                <div className="footer__number-wrapper d-flex align-items-center">
                  <div className="footer__number-icon">
                    <span>
                      <i className="fal fa-phone-alt"></i>
                    </span>
                  </div>
                  <div className="footer__number-info">
                    <span>Tienes alguna pregunta?</span>
                    <a href="tel:+230045647823">+230-045-647-823</a>
                  </div>

                  <div className="footer__number-icon">
                    <span>
                      <i className="fal fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <div className="footer__number-info">
                    <span>Ubicación</span>
                    <a href="#">Colombia</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-md-4 mt-lg-5 mt-xl-5 col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-20 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="footer__social-box">
                <span>Redes sociales</span>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area copyright__plr black-bg-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-md-6 wow animate__slideInUp"
              data-wow-duration="1.1s"
            >
              <div className="copyright__text">
                <span>
                  Copyright Softintelligent 2025, Todos los derechos reservados
                </span>
              </div>
            </div>
            <div
              className="col-md-6 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <div className="copyright__item text-start text-md-end">
                <span>
                  <a href="#">Inicio</a>
                </span>
                {/* <span>Cases </span> */}
                {/* <span>About</span> */}
                {/* <span>Privacidad y politica</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
<h4 className="footer__title">
                  <a href="#">Newslatter</a>
                </h4>
                <div className="footer__content">
                  <p>
                    Our approach to itis unique around know work an we know.
                  </p>
                </div>
                <div className="footer__input">
                  <form action="#">
                    <input type="email" placeholder="Your email" />
                    <button className="subscribe-btn">Subscribe </button>
                  </form>
                </div>*/

/*<div className="footer__widget footer-col-3">
                <h4 className="footer__title">
                  <a href="#">Support Link</a>
                </h4>
                <div className="footer__menu-list">
                  <ul>
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">WordPress</a>
                    </li>
                    <li>
                      <a href="#">Online Marketing</a>
                    </li>
                    <li>
                      <a href="#">Content</a>
                    </li>
                  </ul>
                </div>
              </div>*/

/*<div className="footer__widget footer-col-2">
                <h4 className="footer__title">
                  <Link to="/service">Service</Link>
                </h4>
                <div className="footer__menu-list">
                  <ul>
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">WordPress</a>
                    </li>
                    <li>
                      <a href="#">Online Marketing</a>
                    </li>
                    <li>
                      <a href="#">Content</a>
                    </li>
                  </ul>
                </div>
              </div>*/

/*footer__number-wrapper d-flex flex-column align-items-start*/

/*<div className="footer__social-box">
                  <span>Redes sociales</span>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp-square"></i>
                  </a>
                </div>*/
