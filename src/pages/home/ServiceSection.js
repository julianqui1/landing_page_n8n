// import React from 'react';
// import SectionTitle from '../../components/SectionTitle';
// import SingleService from '../../components/Service';

// import shapeImg1 from '../../assets/img/service/sv-shape-1.png';
// import shapeImg2 from '../../assets/img/service/sv-shape-2.png';
// import serviceIconBg1 from '../../assets/img/service/sv-icon-shape-1.png';
// import serviceIconBg2 from '../../assets/img/service/sv-icon-shape-2.png';
// import serviceIconBg3 from '../../assets/img/service/sv-icon-shape-3.png';
// import serviceIconBg4 from '../../assets/img/service/sv-icon-shape-4.png';
// import serviceIconBg5 from '../../assets/img/service/sv-icon-shape-5.png';
// import serviceIconBg6 from '../../assets/img/service/sv-icon-shape-6.png';

// const Service = () => {
//   return (
//     <div className="service__area service__space service__mlr grey-bg pt-195 pb-70 p-relative">
//       <div className="service__shape-1">
//         <img src={shapeImg1} alt="" />
//       </div>
//       <div className="service__shape-2">
//         <img src={shapeImg2} alt="" />
//       </div>
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           <div
//             className="col-xl-6 col-lg-6 wow animate__fadeInUp"
//             data-wow-duration="1.1s"
//           >
//             <SectionTitle
//               sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
//               subTitle="Our Best Service"
//               Title="Experts in Every Aspect Service lifecycle"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div
//             className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
//             data-wow-duration=".9s"
//             data-wow-delay=".5s"
//           >
//             <SingleService
//               itemClass="service__item service__border-1 p-relative fix"
//               titleClass="service__title title-color-1"
//               btnClass="service__link service__link-color-1"
//               serviceIconBg={serviceIconBg1}
//               Title="Get Latest Updates"
//               Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
//               btnText="Read More"
//             />
//           </div>
//           <div
//             className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
//             data-wow-duration=".9s"
//             data-wow-delay=".7s"
//           >
//             <SingleService
//               itemClass="service__item service__border-2 p-relative fix"
//               titleClass="service__title title-color-2"
//               btnClass="service__link service__link-color-2"
//               serviceIconBg={serviceIconBg2}
//               Title="Get Latest Updates"
//               Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
//               btnText="Read More"
//             />
//           </div>
//           <div
//             className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
//             data-wow-duration=".9s"
//             data-wow-delay=".9s"
//           >
//             <SingleService
//               itemClass="service__item service__border-3 p-relative fix"
//               titleClass="service__title title-color-3"
//               btnClass="service__link service__link-color-3"
//               serviceIconBg={serviceIconBg3}
//               Title="Get Latest Updates"
//               Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
//               btnText="Read More"
//             />
//           </div>
//           <div
//             className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
//             data-wow-duration=".9s"
//             data-wow-delay="1s"
//           >
//             <SingleService
//               itemClass="service__item service__border-4 p-relative fix"
//               titleClass="service__title title-color-4"
//               btnClass="service__link service__link-color-4"
//               serviceIconBg={serviceIconBg4}
//               Title="Get Latest Updates"
//               Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
//               btnText="Read More"
//             />
//           </div>
//           <div
//             className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
//             data-wow-duration=".9s"
//             data-wow-delay="1.2s"
//           >
//             <SingleService
//               itemClass="service__item service__border-5 p-relative fix"
//               titleClass="service__title title-color-5"
//               btnClass="service__link service__link-color-5"
//               serviceIconBg={serviceIconBg5}
//               Title="Get Latest Updates"
//               Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
//               btnText="Read More"
//             />
//           </div>
//           <div
//             className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
//             data-wow-duration=".9s"
//             data-wow-delay="1.3s"
//           >
//             <SingleService
//               itemClass="service__item service__border-6 p-relative fix"
//               titleClass="service__title title-color-6"
//               btnClass="service__link service__link-color-6"
//               serviceIconBg={serviceIconBg6}
//               Title="Get Latest Updates"
//               Description="Business building it before the tab providet management, Payroll & Worksite Services full-fledged."
//               btnText="Read More"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

import React from "react";
import SectionTitle from "../../components/SectionTitle";
import SingleService from "../../components/Service"; // Seguiremos usando tu componente hijo

// Imágenes de fondo y formas
import shapeImg1 from "../../assets/img/service/sv-shape-1.png";
import shapeImg2 from "../../assets/img/service/sv-shape-2.png";

const Service = () => {
  // Array con la información de los servicios actualizada
  const servicesData = [
    {
      title: "Desarrollo Web Moderno",
      description:
        "Creamos sitios web visualmente atractivos y funcionales que reflejan la identidad de tu marca y atraen a tus clientes.",
      icon: "fas fa-laptop-code",
      colorClass: "1",
    },
    {
      title: "Diseño Adaptable (Responsive)",
      description:
        "Tu sitio web se verá y funcionará perfectamente en cualquier dispositivo: computadores, tabletas y teléfonos móviles.",
      icon: "fas fa-mobile-alt",
      colorClass: "2",
    },
    {
      title: "Integración de Inteligencia Artificial",
      description:
        "Potenciamos tu web con IA para ofrecer experiencias personalizadas, chatbots inteligentes o análisis de datos avanzados.",
      icon: "fas fa-brain", // <- ICONO Y TEXTO CAMBIADO
      colorClass: "3",
    },
    {
      title: "Automatización de Tareas",
      description:
        "Ahorra tiempo y reduce errores conectando tus aplicaciones. Ideal para gestionar formularios de contacto, clientes y más.",
      icon: "fas fa-cogs",
      colorClass: "4",
    },
    {
      title: "Integraciones con ERP/CRM",
      description:
        "Conectamos tu sitio web con tus sistemas de gestión interna para mantener toda la información de tu negocio sincronizada.",
      icon: "fas fa-sync-alt",
      colorClass: "5",
    },
    {
      title: "Soporte y Mantenimiento",
      description:
        "Mantenemos tu web actualizada, segura y funcionando sin problemas, para que tú solo te preocupes por tu negocio.",
      icon: "fas fa-headset",
      colorClass: "6",
    },
  ];

  return (
    <div className="service__area service__space service__mlr grey-bg pt-100 pb-70 p-relative">
      <div className="service__shape-1">
        <img src={shapeImg1} alt="" />
      </div>
      <div className="service__shape-2">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 col-lg-6 wow animate__fadeInUp"
            data-wow-duration="1.1s"
          >
            <SectionTitle
              sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
              subTitle="Nuestros Servicios"
              Title="Un Vistazo a lo que Podemos Hacer por Ti"
            />
          </div>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.5 + index * 0.2}s`}
            >
              <SingleService
                itemClass={`service__item service__border-${service.colorClass} p-relative fix`}
                titleClass={`service__title title-color-${service.colorClass}`}
                btnClass={`service__link service__link-color-${service.colorClass}`}
                icon={service.icon}
                Title={service.title}
                Description={service.description}
                colorClass={service.colorClass}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
