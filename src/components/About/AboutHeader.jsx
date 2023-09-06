import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AboutHeader.module.css';

const AboutHeader = () => {
  return (
    <div className={classes.pageWelcomeContainer}>
      <h2 className={classes.welcomText}>
        Welcome to our story, where passion meets craftsmanship.
      </h2>
      <div className={classes.borderTop}></div>
      <p className={classes.sectionDescription}>
        Contact our Customer Service representative to make an appointment and
        to answer all your questions!
      </p>
      <Link to="/contact" className={classes.appointmentBtn}>
        BOOK AN APPOINTMENT
      </Link>
    </div>
  );
};

export default AboutHeader;
