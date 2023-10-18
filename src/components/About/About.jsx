import React from 'react';
import CurrentPage from '../helpers/CurrentPage';
import AboutHeader from './AboutHeader';
import AboutUsSection from './AboutUsSection';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.aboutDiv}>
      <CurrentPage />
      <AboutHeader />
      <AboutUsSection />
      <CallToAction />
      <Testimonials />
    </div>
  );
};

export default About;
