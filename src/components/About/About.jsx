import React from 'react';
import CurrentPage from '../helpers/CurrentPage';
import AboutHeader from './AboutHeader';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.aboutDiv}>
      <CurrentPage />
      <AboutHeader />
    </div>
  );
};

export default About;
