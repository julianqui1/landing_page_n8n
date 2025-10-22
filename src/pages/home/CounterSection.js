import React from "react";

// Se mantienen las importaciones que necesitas para el fondo y el título
import SectionTitle from "../../components/SectionTitle";
import shapeImg1 from "../../assets/img/counter/counter-shape-1.png";
import shapeImg2 from "../../assets/img/counter/counter-shape-1.png";

const Counter = () => {
  const plan = {
    title: "Suscripción Básica", // Título ajustado para mayor claridad
    subtitle: "Soluciones digitales con pago mensual",
    price: 10,
    badge: "Inicia Aquí",
    features: [
      { text: "Diseño Web Profesional y Moderno", included: true },
      { text: "Sitio Web Adaptable a Móviles", included: true },
      { text: "Alojamiento de tu sitio web", included: true },
      { text: "Posicionamiento de tu sitio web", included: true },
      //{ text: "Certificado de Seguridad (SSL)", included: true },
      { text: "Mantenimiento 24/7", included: true },
      { text: "Integración con Redes Sociales", included: true },
      {
        text: "Automatización de Tareas (Ej: Formularios, cotizaciones, cuentas cobro y mucho mas.)",
        included: false,
      },
      { text: "Integración con CRM / ERP", included: false },
      { text: "Funcionalidades E-commerce", included: false },
      { text: "Soporte Prioritario", included: false },
      { text: "Gestión completa de tu sitio", included: false },
      { text: "Atención personalizada", included: false },
      { text: "Reportes de rendimiento", included: false },
      { text: "Tu marca visible en Internet", included: false },
    ],
  };

  return (
    <div className="counter_area counter_mlr mb-70 z-index">
      <div className="counter__shape-1">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="counter__shape-2">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="counter__black-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-8 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <SectionTitle
                sectionClass="counter__section-box text-center pb-35"
                subTitleClass="section-subtitle section-white-bg title-anim"
                titleClass="section-title text-black title-anim"
                subTitle="NUESTROS PLANES"
                Title="Invierte en tu Crecimiento Digital"
              />
            </div>
          </div>

          <div className="row justify-content-center">
            {/* 1. TARJETA MÁS ANCHA */}
            <div className="col-xl-9 col-lg-10 mb-4">
              <div className="card h-100 p-3 position-relative overflow-visible">
                <div
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="bg-primary-subtle text-primary fw-bold p-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "3px solid white",
                    }}
                  >
                    {plan.badge}
                  </div>
                </div>

                <div className="card-body">
                  <div className="text-center">
                    <h3 className="card-title">{plan.title}</h3>
                    <p className="text-muted">{plan.subtitle}</p>
                    <div className="my-4">
                      <span className="text-muted fs-5 me-2">Desde</span>
                      <span className="display-4 fw-bold">
                        ${plan.price} USD
                      </span>
                      <span className="fs-4 text-muted">/mes</span>
                    </div>
                  </div>

                  {/* 2. LAYOUT DE DOS COLUMNAS */}
                  <div className="row my-4">
                    {/* COLUMNA 1: INCLUIDO */}
                    <div className="col-md-6">
                      <h5 className="fw-bold mb-3 text-center text-md-start">
                        ¿Qué incluye?
                      </h5>
                      <ul className="list-unstyled">
                        {plan.features
                          .filter((feature) => feature.included)
                          .map((feature, idx) => (
                            <li
                              key={idx}
                              className="mb-3 d-flex align-items-center"
                            >
                              <span className="me-3 fs-5 text-success">✓</span>
                              {feature.text}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* COLUMNA 2: PERSONALIZADO */}
                    <div className="col-md-6 mt-4 mt-md-0 border-start-md">
                      <h5 className="fw-bold mb-3 text-center text-md-start">
                        ¿Necesitas más?
                      </h5>
                      <ul className="list-unstyled">
                        {plan.features
                          .filter((feature) => !feature.included)
                          .map((feature, idx) => (
                            <li
                              key={idx}
                              className="mb-3 d-flex align-items-center text-muted"
                            >
                              {/* 3. ICONOGRAFÍA MEJORADA */}
                              <span className="me-3 fs-5 text-primary">+</span>
                              {feature.text}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*<button className="btn btn-dark btn-lg w-100 fw-bold mt-auto">
  Cotizar Proyecto Personalizado
</button>;*/
export default Counter;
