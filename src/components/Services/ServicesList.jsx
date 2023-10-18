import React, { useState } from 'react';
import { servicesDataArr } from '../Home/UI/Data';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import classes from './ServicesList.module.css';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  const [selectedSection, setSelectedSection] = useState('painting');

  const [openCardIndex, setOpenCardIndex] = useState(-1);

  const toggleDetails = (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(-1);
    } else {
      setOpenCardIndex(index);
    }
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
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
          {Object.keys(servicesDataArr).map((section) => (
            <div
              key={section}
              className={classes.serviceItemContainer}
              onClick={() => handleSectionClick(section)}
            >
              <img
                src={servicesDataArr[section].image}
                alt="MainServiceCategoryImage"
                className={classes.serviceImage}
              />
              <h3 className={classes.serviceName}>{section.toUpperCase()}</h3>
            </div>
          ))}
        </div>
        <div className={classes.serviceDetails}>
          {selectedSection && (
            <>
              <div className={classes.mainServiceHeader}>
                <img
                  src={servicesDataArr[selectedSection].image}
                  alt="SectionImage"
                  className={classes.sectionImage}
                />
                <h3 className={classes.serviceOverviewHeading}>
                  Service Overview
                </h3>
                <p className={classes.sectionOverview}>
                  {servicesDataArr[selectedSection].overview}
                </p>
              </div>
              <div className={classes.subSectionsContainer}>
                {servicesDataArr[selectedSection].subSections.map(
                  (subSection, index) => (
                    <div className={classes.subServiceCard} key={subSection.id}>
                      <div
                        className={classes.cardHeader}
                        onClick={() => toggleDetails(index)}
                      >
                        <h3 className={classes.cardName}>{subSection.name}</h3>
                        <div className={classes.cardButtons}>
                          <button
                            className={classes.toogleDetailsBtn}
                            onClick={() => toggleDetails(index)}
                          >
                            {openCardIndex === index ? (
                              <AiOutlineUp />
                            ) : (
                              <AiOutlineDown />
                            )}
                          </button>
                        </div>
                      </div>
                      {openCardIndex === index && (
                        <div className={classes.subServiceDetailsCont}>
                          <img
                            src={subSection.image}
                            alt="ServiceImage"
                            className={classes.subServiceImage}
                          />
                          <div className={classes.subServiceCaerdTextCont}>
                            <h4 className={classes.cardTextHeading}>
                              Brief Service Overview
                            </h4>
                            <p className={classes.cardDescrioption}>
                              {subSection.overview}
                            </p>
                            <Link
                              to="/contact"
                              className={classes.bookServiceBtn}
                            >
                              BOOK NOW
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
