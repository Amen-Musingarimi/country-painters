import React from 'react';
import CardSlider from './UI/CardSlider';
import HomeServiceSection from './UI/HomeServiceSection';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.sliderWrapper}>
        <CardSlider />
      </div>
      <HomeServiceSection />
    </div>
  );
};

export default Home;
