import React from 'react';
import { AboutUsDataArr } from '../Home/UI/Data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import classes from './AboutDetails.module.css';

const AboutDetails = () => {
  return (
    <div className={classes.aboutDetailsContainer}>
      {AboutUsDataArr.map((card) => (
        <div className={classes.aboutCard}>
          <div className={classes.cardHeader}>
            <h3 className={classes.cardName}>{card.name}</h3>
            <div className={classes.cardButtons}>
              <button className={classes.toogleDetailsBtn}>
                <AiOutlinePlus />
              </button>
              <button className={classes.toogleDetailsBtn}>
                <AiOutlineMinus />
              </button>
            </div>
          </div>
          <div className={classes.detailsCont}>
            <img
              src={card.image}
              alt="AboutUsImage"
              className={classes.aboutImage}
            />
            <p className={classes.cardDescrioption}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutDetails;
