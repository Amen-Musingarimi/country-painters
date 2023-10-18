import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ServicesHeader.module.css';

const ServicesHeader = () => {
  return (
    <div className={classes.servicesHeaderContainer}>
      <div className={classes.headerWrapper}>
        <h2 className={classes.sectionHeading}>
          Transforming Your Space: Services to Enhance Beauty and Comfort
        </h2>
        <div className={classes.borderTop}></div>
        <p className={classes.sectionDescription}>
          Learn more about services we offer and choose the appropriate one to
          resolve your issue.
        </p>
        <Link to="/contact" className={classes.appointmentBtn}>
          BOOK AN APPOINTMENT
        </Link>
      </div>
    </div>
  );
};

export default ServicesHeader;
