import React from 'react';
import classes from './HomeServiceSection.module.css';
import { servicesDataArr } from './Data';
import { Link } from 'react-router-dom';

const HomeServiceSection = () => {
  return (
    <section className={classes.homeServicesWrapper}>
      <h2 className={classes.sectionHeading}>
        PROVIDING PAINTING, TILING, AND GLAZING SERVICES
      </h2>
      <div className={classes.borderTop}></div>
      <p className={classes.sectionDescription}>
        We have experience in delivering premium painting, tiling, and glazing
        services that elevate both residential and commercial interiors.
      </p>
      <div className={classes.servicesContainer}>
        {Object.keys(servicesDataArr).map((section) => {
          return (
            <div key={section} className={classes.serviceWrapper}>
              <img
                className={classes.homeServiceImage}
                src={servicesDataArr[section].image}
                alt="ServiceImage"
              />
              <h3 className={classes.homeServiceName}>{section}</h3>
              <p className={classes.homeServiceDescription}>
                {servicesDataArr[section].description}
              </p>
            </div>
          );
        })}
      </div>
      <Link to="/services" className={classes.toServicesButton}>
        SEE ALL SERVICES
      </Link>
    </section>
  );
};

export default HomeServiceSection;
