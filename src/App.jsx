import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.mainContainer}>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/services" index element={<Services />} />
        <Route path="/contact" index element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
