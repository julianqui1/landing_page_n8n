import React from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleFeature from "../../components/Feature";

import featureImg1 from "../../assets/img/feature/icons8-website-100.png";
import featureImg2 from "../../assets/img/feature/icons8-landing-page-100.png";
import featureImg3 from "../../assets/img/feature/icons8-case-study-64.png";
import featureImg4 from "../../assets/img/feature/icons8-spiral-bound-booklet-64.png";
import featureImg5 from "../../assets/img/feature/icons8-graph-report-100.png";
import featureImg6 from "../../assets/img/feature/icons8-software-64.png";

const Feature = () => {
  return (
    <div className="feature__area feature__mlr pt-100 pb-70">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 wow animate__fadeInUp"
            data-wow-duration="1.1s"
          >
            <SectionTitle />
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-2 text-center"
              Image={featureImg1}
              Title="Hola mundo"
              Description="Diseñamos páginas enfocadas en resultados: rápidas, modernas y pensadas para convertir visitantes en clientes. Ideal para campañas, promociones o lanzamientos."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".7s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-2 text-center"
              Image={featureImg2}
              Title="Aplicaciones web"
              Description="Creamos aplicaciones web personalizadas que te ayudan a gestionar tu negocio desde cualquier lugar. Todo lo que necesitas, en una sola plataforma online."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".9s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-2 text-center"
              Image={featureImg3}
              Title="Sistemas de trazabilidad"
              Description="Lleva el registro completo de tus productos desde la siembra hasta la venta.
              nuestro sistema te muestra toda la historia del cultivo de forma clara y ordenada para garantizar calidad y cumplir con normas."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".5s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-2 text-center"
              Image={featureImg4}
              Title="Cuaderno digital"
              Description="Un cuaderno digital donde registras todas las actividades de tu cultivo sin papeleo.
              lleva el control de siembras, aplicaciones, gastos y tareas desde tu celular o computador de forma fácil y rápida."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".7s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-2 text-center"
              Image={featureImg5}
              Title="Gestión y consulta de informes"
              Description="Obtén informes claros y completos sobre tus cultivos, costos y actividades.
              consulta toda la información desde cualquier dispositivo y toma decisiones con datos reales y actualizados."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".9s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-2 text-center"
              Image={featureImg6}
              Title="Software a medida"
              Description="Desarrollamos soluciones hechas a la medida de tu empresa. Desde sistemas de gestión hasta herramientas internas, adaptadas exactamente a tus necesidades."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
