import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import companyImg from "../../assets/img/company/segunda_imagen_agricultura_company.png";
import tabImg1 from "../../assets/img/company/company-tab-1.png";
import tabImg2 from "../../assets/img/company/company-tab-1.png";
import tabImg3 from "../../assets/img/company/company-tab-1.png";

const Company = () => {
  /*let tab1 = "Our Mission",
    tab2 = "Team Support",
    tab3 = "Projects Job";*/
  const tabStyle = "nav nav-tab";

  return (
    <div className="bg-custom-blue-company company__area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 wow animate__fadeInLeft"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <div className="company__left-img text-center text-xl-start">
              <img src={companyImg} alt="" />
            </div>
          </div>
          <div
            className="col-xl-6 wow animate__fadeInRight"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <div className="company__section-box p-5">
              <h4 className="section-subtitle char-anim">
                Tecnología que hace crecer tu negocio
              </h4>
              <h3 className="section-title pb-10 char-anim">
                Impulsamos la digitalización del sector agrícola con
                herramientas simples y accesibles que mejoran la gestión sin
                elevar los costos.
              </h3>
              <p className="char-anim-2">
                En SoftIntelligent creemos que la tecnología debe simplificar el
                trabajo en el campo, no hacerlo más complejo. Somos una empresa
                colombiana dedicada a desarrollar herramientas digitales que
                apoyan a productores, asociaciones y empresas agrícolas en la
                gestión de sus procesos. Creamos soluciones como cuadernos
                digitales, trazabilidad, inventarios, automatizaciones y
                sistemas personalizados que facilitan el día a día
                administrativo y mejoran la toma de decisiones. Nuestro
                compromiso es acompañarte en cada etapa, con innovación
                accesible, eficiencia y un trato humano.
              </p>
            </div>
            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="company__tab-content-wrapper d-flex align-items-center">
                  <div className="company__tab-icon">
                    <span>
                      <img src={tabImg1} alt="" />
                    </span>
                  </div>
                  <div className="company__tab-text">
                    <h4>Online Agency Website Service</h4>
                    <span>App Design, Website</span>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="company__tab-content-wrapper d-flex align-items-center">
                  <div className="company__tab-icon">
                    <span>
                      <img src={tabImg2} alt="" />
                    </span>
                  </div>
                  <div className="company__tab-text">
                    <h4>Team Support Website Service</h4>
                    <span>App Design, Website</span>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="company__tab-content-wrapper d-flex align-items-center">
                  <div className="company__tab-icon">
                    <span>
                      <img src={tabImg3} alt="" />
                    </span>
                  </div>
                  <div className="company__tab-text">
                    <h4>Projects Job Website Service</h4>
                    <span>App Design, Website</span>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
          <div className="company__button"></div>
        </div>
      </div>
    </div>
  );
};

export default Company;

/*<Link
                to="/service-details"
                className="main-btn tp-btn-hover alt-color"
              >
                <span>Read More</span>
                <b></b>
              </Link>*/

/*<Tabs>
              <div className="company__service-tab">
                <TabList className={tabStyle}>
                  <Tab>
                    <button className="btn-color-1">
                      <span>{tab1}</span>
                    </button>
                  </Tab>
                  <Tab>
                    <button className="btn-color-2">
                      <span>{tab2}</span>
                    </button>
                  </Tab>
                  <Tab>
                    <button className="btn-color-3">
                      <span>{tab3}</span>
                    </button>
                  </Tab>
                </TabList>*/
