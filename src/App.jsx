import classes from './App.module.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={classes.mainContainer}>
      <NavBar />
      <h1>Country Painters and Glazers Pvt Ltd</h1>
    </div>
  );
}

export default App;
