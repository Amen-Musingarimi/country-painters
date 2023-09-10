import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toggleNav } from '../redux/navBarSlice';
import './NavBar.css';

const NavBar = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.nav.isOpen);

  const handleNav = () => {
    dispatch(toggleNav());
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
    borderRight: '0.5px solid #d3d3d3',
    gap: '2rem',
    backgroundColor: '#fff',
    transition: '1s',
    transform: isOpen ? 'none' : 'translate(-100vh)',
  };

  return (
    <header className="header">
      <h3 className="logo">
        COUNTRY PAINTERS <span className="redLogo">& GLAZERS</span>
      </h3>
      <nav style={isMobile ? navStyle : {}} className="nav">
        <NavLink
          to="/"
          exact={true}
          activeClassName="active"
          onClick={handleNav}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          exact={true}
          activeClassName="active"
          onClick={handleNav}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/services"
          exact={true}
          activeClassName="active"
          onClick={handleNav}
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/contact"
          exact={true}
          activeClassName="active"
          onClick={handleNav}
        >
          CONTACT US
        </NavLink>
        <button className="closeMobileNav" onClick={handleNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="openMobileNav" onClick={handleNav}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
