import React from 'react';
import CurrentPage from '../helpers/CurrentPage';
import ServicesHeader from './ServicesHeader';
import classes from './Services.module.css';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <div className={classes.servicesPage}>
      <CurrentPage />
      <ServicesHeader />
      <ServicesList />
    </div>
  );
};

export default Services;
