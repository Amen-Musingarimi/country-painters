import React from 'react';
import CurrentPage from '../helpers/CurrentPage';
import ContactForm from './ContactForm';
import { MdLocationPin } from 'react-icons/md';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes.contactPageContainer}>
      <CurrentPage />
      <div className={classes.iframMap}>
        <div style={{ width: '100%' }}>
          <iframe
            title="Country Painters"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=862%20Mabvazuva%20Harare+(Country%20Painters%20&amp;%20Glazers)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>
        </div>
      </div>
      <div className={classes.contactSection}>
        <ContactForm />
        <div className={classes.addressContainer}>
          <div className={classes.addressDivHeader}>
            <h4 className={classes.sectionHeading}>Main Office</h4>
            <span className={classes.locationIcon}>
              <MdLocationPin />
            </span>
          </div>
          <div className={classes.textWrapper}>
            <p className={classes.address}>862 Mabvazuva, Rusape, Zimbabwe</p>
            <p className={classes.phoneNumber}>Phone: +263 77-913-7069</p>
            <p className={classes.emailWraper}>
              Email:{' '}
              <a
                href="mailto:zvikoh.matewa@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={classes.emailAddress}
              >
                zvikoh.matewa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
