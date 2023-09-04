import React from 'react';
import { ReasonsDataArr } from './Data';
import { BsCheck2All } from 'react-icons/bs';
import classes from './HomeAboutSummary.module.css';

const HomeAboutSummary = () => {
  return (
    <section className={classes.homeAboutContainer}>
      <div className={classes.sectionHeader}>
        <h2 className={classes.sectionHeading}>WHY CHOOSE US</h2>
        <div className={classes.borderTop}></div>
        <p className={classes.sectionDescription}>
          When you are in search of unwavering dependability, there's no denying
          the indisputable strengths of our business. At Country Painters and
          Glazers, we stand by three core principles that set us apart
        </p>
      </div>
      <div className={classes.reasonsContainer}>
        {ReasonsDataArr.map((reason) => (
          <div className={classes.reasonCard} key={reason.id}>
            <div className={classes.checkMark}>
              <BsCheck2All />
            </div>
            <div className={classes.reasonText}>
              <h3 className={classes.reasonName}>{reason.name}</h3>
              <p className={classes.reasonDescription}>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeAboutSummary;
