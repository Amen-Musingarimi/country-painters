import React from 'react';
import image from '../../../assets/agreement.jpg';
import classes from './HomeWhoWeAre.module.css';

const HomeWhoWeAre = () => {
  return (
    <div className={classes.aboutcontainer}>
      <div className={classes.textContainer}>
        <h2 className={classes.sectionHeading}>COUNTRY PAINTERS & GLAZERS</h2>
        <div className={classes.borderTop}></div>
        <p className={classes.sectionDescription}>
          <span className={classes.firstParagraph}>
            Country Painters & Glazers Pvt Ltd is a fully registered company in
            Zimbabwe. We provide painting, glazing, and tiling services,
            analyzing and determining the best cost-effective and regulatory
            design to suit your needs. We have developed and maintained strong
            relationships with our partners, ensuring that you, our valued
            client, receive the best possible service.
          </span>
          <span>
            Country Painters is customer driven accomplished by listening to our
            clients' needs and concerns and addressing them in a timely and
            effective fashion through our interactive digital platforms and
            welcoming personnel. We believe in making the creation of your
            dreams an enjoyable experience
          </span>
        </p>
      </div>
      <img src={image} alt="ImageWorkers" className={classes.sectionImage} />
    </div>
  );
};

export default HomeWhoWeAre;
