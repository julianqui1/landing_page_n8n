import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SingleProjectFour from '../../components/Project/SingleProjectFour';

import projectImg1 from '../../assets/img/project/pro-14.jpg';
import projectImg2 from '../../assets/img/project/pro-15.jpg';
import projectImg3 from '../../assets/img/project/pro-16.jpg';

const Project = () => {
  let tab1 = 'All',
    tab2 = 'Development',
    tab3 = 'App Design',
    tab4 = 'Branding Design';
  const tabStyle = 'nav nav-pill justify-content-center mb-3';

  return (
    <div className="project-4__area project-4__space grey-bg-2">
      <div className="container-fluid">
        <Tabs>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-4__section-box text-center mb-30">
                <h5 className="section-subtitle title-anim">
                  Our Projects Work
                </h5>
                <h4 className="section-title title-anim">
                  We Are the Best Softwer <br />
                  Company Manage.
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="project-4__project-tab">
                <TabList className={tabStyle}>
                  <Tab>
                    <button>{tab1}</button>
                  </Tab>
                  <Tab>
                    <button>{tab2}</button>
                  </Tab>
                  <Tab>
                    <button>{tab3}</button>
                  </Tab>
                  <Tab>
                    <button>{tab4}</button>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>
          <TabPanel className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-1"
                TitleClass="project-4__title-sm title-color-1"
                btnClass="project-4__link link-color-1"
                Image={projectImg1}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-2"
                TitleClass="project-4__title-sm title-color-2"
                btnClass="project-4__link link-color-2"
                Image={projectImg2}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-3"
                TitleClass="project-4__title-sm title-color-3"
                btnClass="project-4__link link-color-3"
                Image={projectImg3}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-2"
                TitleClass="project-4__title-sm title-color-2"
                btnClass="project-4__link link-color-2"
                Image={projectImg2}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-3"
                TitleClass="project-4__title-sm title-color-3"
                btnClass="project-4__link link-color-3"
                Image={projectImg3}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-1"
                TitleClass="project-4__title-sm title-color-1"
                btnClass="project-4__link link-color-1"
                Image={projectImg1}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-2"
                TitleClass="project-4__title-sm title-color-2"
                btnClass="project-4__link link-color-2"
                Image={projectImg2}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-1"
                TitleClass="project-4__title-sm title-color-1"
                btnClass="project-4__link link-color-1"
                Image={projectImg1}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-3"
                TitleClass="project-4__title-sm title-color-3"
                btnClass="project-4__link link-color-3"
                Image={projectImg3}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-3"
                TitleClass="project-4__title-sm title-color-3"
                btnClass="project-4__link link-color-3"
                Image={projectImg3}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-1"
                TitleClass="project-4__title-sm title-color-1"
                btnClass="project-4__link link-color-1"
                Image={projectImg1}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-80 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <SingleProjectFour
                categoryClass="project-4__category category-color-2"
                TitleClass="project-4__title-sm title-color-2"
                btnClass="project-4__link link-color-2"
                Image={projectImg2}
                Category="Marketing"
                Title="Agency Best Projects"
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Project;
