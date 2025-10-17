import React from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleFeature from "../../components/Feature";

import featureImg1 from "../../assets/img/feature/icons8-web-96.png";
import featureImg2 from "../../assets/img/feature/icons8-aplicaciones-96.png";
import featureImg3 from "../../assets/img/feature/icons8-charla-96.png";
import featureImg4 from "../../assets/img/feature/icons8-automatización-96.png";
import featureImg5 from "../../assets/img/feature/icons8-marketing-de-medios-sociales-96.png";
import featureImg6 from "../../assets/img/feature/icons8-caja-de-software-96.png";

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
              itemClass="feature__item feature__color-1 text-center"
              Image={featureImg1}
              Title="Landing pages"
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
              itemClass="feature__item feature__color-3 text-center"
              Image={featureImg3}
              Title="Chat Bots"
              Description="Automatiza tus conversaciones con clientes las 24 horas. Responde preguntas, agenda citas o vende más sin necesidad de estar conectado."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".11s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-1 text-center"
              Image={featureImg4}
              Title="Automatizaciones"
              Description="Eliminamos tareas repetitivas con procesos automáticos que ahorran tiempo y reducen errores. Enfócate en crecer, la tecnología hace el resto."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".13s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-2 text-center"
              Image={featureImg5}
              Title="Marketing Digital"
              Description="Te ayudamos a atraer más clientes con estrategias digitales efectivas. Publicidad, redes sociales y posicionamiento que generan resultados reales."
              btnText="See More"
              btnURL="/service-details"
            />
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
            data-wow-duration="1.1s"
            data-wow-delay=".15s"
          >
            <SingleFeature
              itemClass="feature__item feature__color-3 text-center"
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
