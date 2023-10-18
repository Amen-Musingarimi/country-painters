import React from 'react';
import { WhyUsDataArr } from '../Home/UI/Data';
import classes from './WhyUs.module.css';

const WhyUs = () => {
  return (
    <div className={classes.whyUsContainer}>
      {WhyUsDataArr.map((card) => (
        <div className={classes.whyUsCard} key={card.id}>
          <span className={classes.icon}>{card.icon}</span>
          <h3 className={classes.cardName}>{card.name}</h3>
          <p className={classes.cardDescription}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
