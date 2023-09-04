import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeCardsDataArr } from './Data';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import classes from './Cards.module.css';

const CardSlider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex(
        (prevIndex) => (prevIndex + 1) % HomeCardsDataArr.length
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const previousCard = () => {
    setCurrentCardIndex(
      (prevIndex) =>
        (prevIndex - 1 + HomeCardsDataArr.length) % HomeCardsDataArr.length
    );
  };

  const nextCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + 1) % HomeCardsDataArr.length
    );
  };

  const currentCard = HomeCardsDataArr[currentCardIndex];

  return (
    <section className={classes.wrappingDiv}>
      <button onClick={previousCard} className={classes.cardBtn}>
        <FaLessThan />
      </button>
      <div className={classes.welcomeCard}>
        <div className={classes.borderTop}></div>
        <p className={classes.homeCardHeading}>{currentCard.description}</p>
        <h1 className={classes.serviceHeading}>{currentCard.service}</h1>
        <Link to={currentCard.route_path} className={classes.aboutLink}>
          {currentCard.button}
        </Link>
      </div>
      <button onClick={nextCard} className={classes.cardBtn}>
        <FaGreaterThan />
      </button>
    </section>
  );
};

export default CardSlider;
