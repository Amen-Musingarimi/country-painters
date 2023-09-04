import React from 'react';
import classes from './HomeServiceSection.module.css';
import { servicesData } from './Data';
import { Link } from 'react-router-dom';

const HomeServiceSection = () => {
  const categories = Object.keys(servicesData);

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
        {categories.map((category) => {
          const firstService = servicesData[category][0];
          return (
            <div key={category} className={classes.serviceWrapper}>
              <img
                className={classes.homeServiceImage}
                src={firstService.image}
                alt={firstService.name}
              />
              <h3 className={classes.homeServiceName}>{firstService.name}</h3>
              <p className={classes.homeServiceDescription}>
                {firstService.description}
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
