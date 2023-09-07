import React, { useState, useEffect } from 'react';
import { testimonialData } from '../Home/UI/Data';
import classes from './Testimonials.module.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex(
        (prevIndex) => (prevIndex + 1) % testimonialData.length
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const previousCard = () => {
    setCurrentCardIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const nextCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + 1) % testimonialData.length
    );
  };

  const currentCard = testimonialData[currentCardIndex];

  return (
    <div className={classes.testimonialsContainer}>
      <h2 className={classes.sectionHeader}>What People Think About Us</h2>
      <div className={classes.borderTop}></div>
      <div className={classes.quoteContainer}>
        <button className={classes.quoteBtn} onClick={previousCard}>
          <GrPrevious className="icon" />
        </button>
        <div className={classes.quoteCard}>
          <img
            src={currentCard.image}
            alt="UserImage"
            className={classes.userImager}
          />
          <span className={classes.quoteSign}>
            <FaQuoteLeft />
          </span>
          <p className={classes.quote}>{currentCard.quote}</p>
          <div className={classes.nameCont}>
            <h3 className={classes.clientName}>{currentCard.name}</h3>
            <p className={classes.clientProfession}>{currentCard.profession}</p>
          </div>
        </div>
        <button className={classes.quoteBtn} onClick={nextCard}>
          <GrNext className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
