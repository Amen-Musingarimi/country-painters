import React from 'react';
import CardSlider from './UI/CardSlider';
import HomeServiceSection from './UI/HomeServiceSection';
import HomeAboutSummary from './UI/HomeAboutSummary';
import HomeContactCard from './UI/HomeContactCard';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.sliderWrapper}>
        <CardSlider />
      </div>
      <HomeServiceSection />
      <HomeContactCard />
      <HomeAboutSummary />
    </div>
  );
};

export default Home;
