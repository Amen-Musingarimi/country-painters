import React, { useState } from 'react';
import { AboutUsDataArr } from '../Home/UI/Data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import classes from './AboutDetails.module.css';

const AboutDetails = () => {
  const [openCardIndex, setOpenCardIndex] = useState(-1);

  const toggleDetails = (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(-1);
    } else {
      setOpenCardIndex(index);
    }
  };

  return (
    <div className={classes.aboutDetailsContainer}>
      {AboutUsDataArr.map((card, index) => (
        <div className={classes.aboutCard} key={index}>
          <div
            className={classes.cardHeader}
            onClick={() => toggleDetails(index)}
          >
            <h3 className={classes.cardName}>{card.name}</h3>
            <div className={classes.cardButtons}>
              <button
                className={classes.toogleDetailsBtn}
                onClick={() => toggleDetails(index)}
              >
                {openCardIndex === index ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </button>
            </div>
          </div>
          {openCardIndex === index && (
            <div className={classes.detailsCont}>
              <img
                src={card.image}
                alt="AboutUsImage"
                className={classes.aboutImage}
              />
              <p className={classes.cardDescription}>{card.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutDetails;
