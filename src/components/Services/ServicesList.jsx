import React, { useState } from 'react';
import { servicesData } from '../Home/UI/Data';
import classes from './ServicesList.module.css';

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className={classes.servicesListContainer}>
      <h2 className={classes.sectionHeading}>OUR SERVICES</h2>
      <div className={classes.borderTop}></div>
      <p className={classes.sectionDescription}>
        Discover the artistry of Country Painters as we specialize in painting,
        glazing, and tiling.
      </p>
      <div className={classes.listContainer}>
        <div className={classes.servicesList}>
          {Object.keys(servicesData).map((category) => (
            <>
              {servicesData[category].map((service) => (
                <div
                  key={service.id}
                  className={classes.serviceItemContainer}
                  onClick={() => handleServiceClick(service)}
                >
                  <img
                    src={service.image}
                    alt="ServiceImage"
                    className={classes.serviceImage}
                  />
                  <h3 className={classes.serviceName}>{service.name}</h3>
                </div>
              ))}
            </>
          ))}
        </div>
        <div className={classes.itemDetails}>
          {selectedService && (
            <>
              <img
                src={selectedService.image}
                alt="ServiceImage"
                className={classes.serviceImageLarge}
              />
              <h3 className={classes.serviceName}>{selectedService.name}</h3>
              <p className={classes.serviceDescription}>
                {selectedService.description}
              </p>
              <p className={classes.serviceOverview}>
                {selectedService.overview}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
