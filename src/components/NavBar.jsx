import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toggleNav } from '../redux/navBarSlice';
import { BiChevronDown } from 'react-icons/bi';
import classes from './NavBar.module.css';

const NavBar = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.nav.isOpen);

  const handleNav = () => {
    dispatch(toggleNav());
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2rem',
    backgroundColor: '#fff',
    transition: '1s',
    transform: isOpen ? 'none' : 'translate(-100vh)',
  };

  return (
    <header className={classes.header}>
      <h3 className={classes.logo}>
        COUNTRY <span className={classes.redLogo}>PAINTERS</span>
      </h3>
      <nav style={isMobile ? navStyle : {}} className={classes.nav}>
        <NavLink
          to="/"
          exact={true}
          activeClassName={classes.active}
          onClick={handleNav}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          exact={true}
          activeClassName={classes.active}
          onClick={handleNav}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/services"
          exact={true}
          activeClassName={classes.active}
          onClick={handleNav}
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/contact-us"
          exact={true}
          activeClassName={classes.active}
          onClick={handleNav}
        >
          CONTACT US
        </NavLink>
        <button className={classes.closeMobileNav} onClick={handleNav}>
          <FaTimes />
        </button>
      </nav>
      <button className={classes.openMobileNav} onClick={handleNav}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
