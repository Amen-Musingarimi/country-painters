import React from 'react';
import classes from './About.module.css';
import CurrentPage from '../helpers/CurrentPage';

const About = () => {
  return (
    <div className={classes.aboutDiv}>
      <CurrentPage />
    </div>
  );
};

export default About;
