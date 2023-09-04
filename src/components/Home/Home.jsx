import React from 'react';
import CardSlider from './UI/CardSlider';
import HomeServiceSection from './UI/HomeServiceSection';
import HomeAboutSummary from './UI/HomeAboutSummary';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.sliderWrapper}>
        <CardSlider />
      </div>
      <HomeServiceSection />
      <HomeAboutSummary />
    </div>
  );
};

export default Home;
