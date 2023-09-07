import React from 'react';
import CurrentPage from '../helpers/CurrentPage';
import ServicesHeader from './ServicesHeader';
import classes from './Services.module.css';

const Services = () => {
  return (
    <div className={classes.servicesPage}>
      <CurrentPage />
      <ServicesHeader />
    </div>
  );
};

export default Services;
