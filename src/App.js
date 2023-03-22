import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import Menu from './components/Menu'; 
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  const resultRef = useRef(null);
  return (
    <div className={styles.full_page}>
      <Menu resultRef={resultRef} />
      <div className={styles.Banner}>
        <Canvas>
          <Banner/>
        </Canvas>
      </div>
      <About></About>
      <Experience></Experience>
      <Works ref={resultRef} />
      <Education></Education> 
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
