import React from "react";

const SectionTitle = (props) => {
  const { sectionClass, subTitleClass, titleClass, subTitle, Title } = props;

  return (
    <div
      className={
        sectionClass ? sectionClass : "feature__section-box text-center pb-40"
      }
    >
      <h3 className={titleClass ? titleClass : "section-title title-anim"}>
        {Title ? Title : "Lo que Hacemos por Tu Crecimiento"}
      </h3>
    </div>
  );
};

export default SectionTitle;

/*<h4
        className={
          subTitleClass ? subTitleClass : "section-subtitle title-anim"
        }
      >
        {subTitle ? subTitle : "We Best Features"}
      </h4>*/
