import React from 'react';
import { useRef } from "react";
import './App.css';
import Menu from './components/Menu'; 
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const resultRef = useRef(null);
  return (
    <div className='FullPage'>
      <Menu resultRef={resultRef}/>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Works ref={resultRef}/>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
}

export default App;
