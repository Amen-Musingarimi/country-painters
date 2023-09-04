import React from 'react';
import CardSlider from './UI/CardSlider';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <CardSlider />
    </div>
  );
};

export default Home;
