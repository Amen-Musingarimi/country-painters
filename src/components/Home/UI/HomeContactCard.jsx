import React from 'react';
import classes from './HomeContactCard.module.css';
import { Link } from 'react-router-dom';

const HomeContactCard = () => {
  return (
    <section className={classes.contactSection}>
      <div className={classes.sectionText}>
        <h2 className={classes.sectionHeading}>
          We deliver on time and within budget, meeting your needs and
          expectations.
        </h2>
        <p className={classes.sectionDescription}>
          From your residential, commercial, industrial, and public buildings
          and any other forms of infrastructure.
        </p>
      </div>
      <Link to="/contact-us" className={classes.contactButton}>
        CONTACT US
      </Link>
    </section>
  );
};

export default HomeContactCard;
