import React from "react";
import About from "./AboutSection";
import Blog from "./BlogSection";
import Brand from "../../components/Brand";
import Company from "./CompanySection";
import Counter from "./CounterSection";
import CTA from "./CtaSection";
import Feature from "./FeatureSection";
import Banner from "./HomeBanner";
import Project from "./ProjectSection";
import Service from "./ServiceSection";
import Testimonial from "./TestimonialSection";
import Social from "./SocialSection";
import Ceo from "./CeoSection";

const HomeMain = () => {
  return (
    <main>
      <Banner />

      <Feature />

      <About />

      <Counter />

      <Service />

      <Project />

      <Social />

      <Ceo />

      <Company />

      <Brand />

      <Testimonial />

      <Blog />

      <CTA />
    </main>
  );
};

export default HomeMain;
