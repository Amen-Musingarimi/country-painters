import React from 'react';
import AboutDetails from './AboutDetails';
import WhyUs from './WhyUs';
import classes from './AboutUsSection.module.css';

const AboutUsSection = () => {
  return (
    <div className={classes.detailsSection}>
      <h2 className={classes.setionHeading}>Why Country Painters!</h2>
      <div className={classes.borderTop}></div>
      <div className={classes.detailsTextContainers}>
        <AboutDetails />
        <WhyUs />
      </div>
    </div>
  );
};

export default AboutUsSection;
