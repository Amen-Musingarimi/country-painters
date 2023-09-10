import React from 'react';
import CardSlider from './UI/CardSlider';
import HomeWhoWeAre from './UI/HomeWhoWeAre';
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
      <HomeWhoWeAre />
      <HomeServiceSection />
      <HomeContactCard />
      <HomeAboutSummary />
    </div>
  );
};

export default Home;
