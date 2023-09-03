import React from 'react';
import classes from './Home.module.css';
import PaintingCard from './UI/PaintingCard';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <PaintingCard />
    </div>
  );
};

export default Home;
