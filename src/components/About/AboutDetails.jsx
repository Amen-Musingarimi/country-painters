import React, { useState } from 'react';
import { AboutUsDataArr } from '../Home/UI/Data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import classes from './AboutDetails.module.css';

const AboutDetails = () => {
  // Initialize state to track whether details are visible for each card
  const [isDetailsVisible, setIsDetailsVisible] = useState(
    AboutUsDataArr.map(() => false)
  );

  // Function to toggle the details visibility for a specific card
  const toggleDetails = (index) => {
    const updatedVisibility = [...isDetailsVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsDetailsVisible(updatedVisibility);
  };

  return (
    <div className={classes.aboutDetailsContainer}>
      {AboutUsDataArr.map((card, index) => (
        <div className={classes.aboutCard} key={index}>
          <div className={classes.cardHeader}>
            <h3 className={classes.cardName}>{card.name}</h3>
            <div className={classes.cardButtons}>
              <button
                className={classes.toogleDetailsBtn}
                onClick={() => toggleDetails(index)} // Toggle details visibility
              >
                {isDetailsVisible[index] ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </button>
            </div>
          </div>
          {isDetailsVisible[index] && ( // Only render details if visibility is true
            <div className={classes.detailsCont}>
              <img
                src={card.image}
                alt="AboutUsImage"
                className={classes.aboutImage}
              />
              <p className={classes.cardDescrioption}>{card.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutDetails;
