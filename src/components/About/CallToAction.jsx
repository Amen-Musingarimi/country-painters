import React from 'react';
import classes from './CallToAction.module.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className={classes.callToActionContainer}>
      <h2 className={classes.setionHeading}>
        Count on our skilled team and make the most of your time!
      </h2>
      <div className={classes.borderTop}></div>
      <p className={classes.sectionDescription}>
        Leave Your Home Worries Behind!
      </p>
      <Link to="/contact" className={classes.appointmentBtn}>
        MAKE AN APPOINTMENT
      </Link>
    </div>
  );
};

export default CallToAction;
