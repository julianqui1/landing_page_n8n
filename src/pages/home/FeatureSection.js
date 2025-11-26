import React from "react";

import featureImg1 from "../../assets/img/feature/icons8-website-100.png";
import featureImg2 from "../../assets/img/feature/icons8-landing-page-100.png";
import featureImg3 from "../../assets/img/feature/icons8-case-study-64.png";
import featureImg4 from "../../assets/img/feature/icons8-spiral-bound-booklet-64.png";
import featureImg5 from "../../assets/img/feature/icons8-graph-report-100.png";
import featureImg6 from "../../assets/img/feature/icons8-software-64.png";

const Feature = () => {
  const features = [
    {
      img: featureImg1,
      title: "Landing pages",
      description:
        "Diseñamos páginas enfocadas en resultados: rápidas, modernas y pensadas para convertir visitantes en clientes. Ideal para campañas, promociones o lanzamientos.",
      bgColor: "#dbeafe",
    },
    {
      img: featureImg2,
      title: "Aplicaciones web",
      description:
        "Creamos aplicaciones web personalizadas que te ayudan a gestionar tu negocio desde cualquier lugar. Todo lo que necesitas, en una sola plataforma online.",
      bgColor: "#f3e8ff",
    },
    {
      img: featureImg3,
      title: "Sistemas de trazabilidad",
      description:
        "Lleva el registro completo de tus productos desde la siembra hasta la venta. Nuestro sistema te muestra toda la historia del cultivo de forma clara y ordenada para garantizar calidad y cumplir con normas.",
      bgColor: "#d1fae5",
    },
    {
      img: featureImg4,
      title: "Cuaderno digital",
      description:
        "Un cuaderno digital donde registras todas las actividades de tu cultivo sin papeleo. Lleva el control de siembras, aplicaciones, gastos y tareas desde tu celular o computador de forma fácil y rápida.",
      bgColor: "#fef3c7",
    },
    {
      img: featureImg5,
      title: "Gestión y consulta de informes",
      description:
        "Obtén informes claros y completos sobre tus cultivos, costos y actividades. Consulta toda la información desde cualquier dispositivo y toma decisiones con datos reales y actualizados.",
      bgColor: "#cffafe",
    },
    {
      img: featureImg6,
      title: "Software a medida",
      description:
        "Desarrollamos soluciones hechas a la medida de tu empresa. Desde sistemas de gestión hasta herramientas internas, adaptadas exactamente a tus necesidades.",
      bgColor: "#e0e7ff",
    },
  ];

  return (
    <div
      className="py-5"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fa)" }}
    >
      <div className="container py-5">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="mb-3">
              <span
                className="badge rounded-pill px-4 py-2"
                style={{
                  backgroundColor: "#d1fae5",
                  color: "#047857",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Nuestros Servicios
              </span>
            </div>
            <h2 className="display-4 fw-bold mb-3" style={{ color: "#111827" }}>
              Soluciones digitales para tu negocio
            </h2>
            <p className="lead text-muted">
              Tecnología moderna y accesible para impulsar tu empresa
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "1.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div
                    className="rounded-4 mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: feature.bgColor,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <img
                      src={feature.img}
                      alt={feature.title}
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <h3 className="h4 fw-bold mb-3" style={{ color: "#111827" }}>
                    {feature.title}
                  </h3>

                  <p
                    className="text-muted flex-grow-1 mb-4"
                    style={{ lineHeight: "1.6" }}
                  >
                    {feature.description}
                  </p>

                  <a
                    href="/service-details"
                    className="text-decoration-none fw-semibold d-inline-flex align-items-center"
                    style={{
                      color: "#059669",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#047857";
                      e.currentTarget.querySelector("svg").style.transform =
                        "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#059669";
                      e.currentTarget.querySelector("svg").style.transform =
                        "translateX(0)";
                    }}
                  >
                    Ver más
                    <svg
                      className="ms-2"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ transition: "transform 0.2s ease" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
