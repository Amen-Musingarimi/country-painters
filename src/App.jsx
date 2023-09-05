import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.mainContainer}>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
