import React from 'react';
import Menu from './components/Menu'; 
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Education from './components/Education';
import Contact from './components/Contact';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.full_page}>
      <Menu/>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Works/>
      <Education></Education> 
      <Contact></Contact>
    </div>
  );
}

export default App;
