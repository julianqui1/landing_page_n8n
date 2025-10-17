// import React from "react";
// import { Link } from "react-router-dom";

// import Shape from "../../assets/img/service/sv-item-shape-1.png";
// import Image from "../../assets/img/service/sv-icon-shape-1.png";

// const SingleService = (props) => {
//   const {
//     itemClass,
//     titleClass,
//     descClass,
//     shapeImg,
//     serviceIcon,
//     serviceIconBg,
//     Title,
//     Description,
//     btnText,
//     btnURL,
//     btnClass,
//   } = props;
//   return (
//     <div
//       className={
//         itemClass
//           ? itemClass
//           : "service__item service__border-1  p-relative fix"
//       }
//     >
//       <div className="service__shape">
//         <img src={Shape ? Shape : shapeImg} alt="" />
//       </div>
//       <div className="service__icon-wrapper pb-25 p-relative">
//         <div className="service__icon-bg">
//           <img src={serviceIconBg ? serviceIconBg : Image} alt="" />
//         </div>
//         <div className="service__inner-icon">
//           <span>
//             <a href="#">
//               <i className={serviceIcon ? serviceIcon : "fal fa-plug"}></i>
//             </a>
//           </span>
//         </div>
//       </div>
//       <div className="service__content">
//         <h4
//           className={titleClass ? titleClass : "service__title title-color-1"}
//         >
//           <Link to={`/${btnURL ? btnURL : "service-details"}`}>
//             {Title ? Title : "Get Latest Updates"}{" "}
//           </Link>
//         </h4>
//         <p className={descClass ? descClass : ""}>
//           {Description
//             ? Description
//             : "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."}
//         </p>
//       </div>
//       <div
//         className={btnClass ? btnClass : "service__link service__link-color-1"}
//       ></div>
//     </div>
//   );
// };

// export default SingleService;

// /*<Link to={`/${btnURL ? btnURL : 'service-details'}`}>
//           {btnText ? btnText : 'Read More'}
//           <i className="fal fa-arrow-right"></i>
//         </Link>*/

import React from "react";
import Shape from "../../assets/img/service/sv-item-shape-1.png";

const SingleService = (props) => {
  const {
    itemClass,
    titleClass,
    descClass,
    icon,
    Title,
    Description,
    colorClass,
  } = props;

  const colorClasses = [
    "text-primary",
    "text-warning",
    "text-danger",
    "text-info",
    "text-success",
    "text-dark",
  ];

  return (
    <div
      className={
        `${itemClass || "service__item service__border-1 p-relative fix"} 
         h-100 d-flex flex-column text-center` // 1. CLASES CLAVE AÑADIDAS AQUÍ
      }
    >
      <div className="service__shape">
        <img src={Shape} alt="" />
      </div>

      <div className="service__icon mb-3">
        <i
          className={`${icon || "fas fa-question-circle"} 
             display-4 
             ${colorClasses[colorClass - 1] || "text-primary"}`}
        ></i>
      </div>

      {/* 2. HACEMOS QUE EL CONTENIDO CREZCA PARA EMPUJAR ELEMENTOS (SI LOS HUBIERA) */}
      <div className="service__content flex-grow-1">
        <h4
          className={titleClass ? titleClass : "service__title title-color-1"}
        >
          <a>{Title ? Title : "Get Latest Updates"}</a>
        </h4>
        <p className={descClass ? descClass : ""}>
          {Description
            ? Description
            : "Business building it before the tab providet management, Payroll & Worksite Services full-fledged."}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
