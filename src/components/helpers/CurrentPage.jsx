import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './CurrentPage.module.css';

const CurrentPage = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className={classes.navContainer}>
      <h2 className={classes.pageHeading}>ABOUT</h2>
      <div className={classes.navText}>
        <p className={classes.text}>You Are Here:</p>
        <p className={classes.directionText}>
          HOME <span className={classes.currentPage}>{currentRoute}</span>
        </p>
      </div>
    </div>
  );
};

export default CurrentPage;
