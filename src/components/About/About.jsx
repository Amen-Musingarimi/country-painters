import React from 'react';
import CurrentPage from '../helpers/CurrentPage';
import AboutHeader from './AboutHeader';
import AboutDetails from './AboutDetails';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.aboutDiv}>
      <CurrentPage />
      <AboutHeader />
      <div className={classes.detailsSection}>
        <AboutDetails />
      </div>
    </div>
  );
};

export default About;
