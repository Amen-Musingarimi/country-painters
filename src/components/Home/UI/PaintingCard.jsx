import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PaintingCard.module.css';

const PaintingCard = () => {
  return (
    <div className={classes.welcomeCard}>
      <div className={classes.borderTop}></div>
      <p className={classes.homeCardHeading}>PROVING INTERIOR AND EXTERIOR</p>
      <h1 className={classes.serviceHeading}>Painting Services</h1>
      <Link to="/contact-us" className={classes.aboutLink}>
        MORE ABOUT US
      </Link>
    </div>
  );
};

export default PaintingCard;
