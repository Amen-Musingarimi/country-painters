import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footerText}>
        Copyright © 2023, COUNTRY PAINTERS AND GLAZERS (PVT) LTD. All rights
        reserved.
      </p>
      <div className={classes.socialLinksCont}>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </footer>
  );
};

export default Footer;
