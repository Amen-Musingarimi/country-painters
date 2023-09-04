import React from 'react';
import classes from './HomeServiceSection.module.css';

const HomeServiceSection = () => {
  return (
    <section className={classes.homeServicesWrapper}>
      <h2 className={classes.sectionHeading}>
        PROVIDING PAINTING, TILLING AND GLAZING SERVICES
      </h2>
      <div className={classes.borderTop}></div>
      <p className={classes.sectionDescription}>
        We have experience in delivering premium painting, tiling, and glazing
        services that elevate both residential and commercial interiors.
      </p>
    </section>
  );
};

export default HomeServiceSection;
