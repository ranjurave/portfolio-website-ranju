import React, {useRef, useState} from 'react';
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
  const homeref = useRef(<Banner/>);
  const aboutref = useRef(<About/>);  
  const expref = useRef(<Experience/>);
  const workref = useRef(<Works/>);
  const eduref = useRef(<Education/>);
  const contactref = useRef(<Contact/>);

  const [menu, setMenu] = useState("home");
  console.log(menu);
  const selectedMenuItem = (menu) => {
    setMenu(menu);
    switch(menu){
      case"home":{
        homeref.current.scrollIntoView({ behavior: 'smooth' , block: "center"});
        return;
      }
      case"about":{
        aboutref.current.scrollIntoView({ behavior: 'smooth' , block: "center"});
        return;
      }
      case"experience":{
        expref.current.scrollIntoView({ behavior: 'smooth' , block: "center"});
        return;
      }
      case"works":{
        workref.current.scrollIntoView({ behavior: 'smooth' , block: "center"});
        return;
      }
      case"education":{
        eduref.current.scrollIntoView({ behavior: 'smooth' , block: "center"});
        return;
      }
      case"contact":{
        contactref.current.scrollIntoView({ behavior: 'smooth' , block: "center"});
        return;
      }
      default:
        break;
      }
  };
  
  return (
    <div className={styles.full_page}>
      <Menu selectedMenuItem={selectedMenuItem}/>
      {/* <div ref={homeref} className={styles.Banner}>
        <Canvas><Banner/></Canvas>
      </div> */}
      <div ref={aboutref}><About/></div>
      <div ref={expref}><Experience/></div>
      <div ref={workref}><Works/></div>
      <div ref={eduref}><Education/> </div>
      <div ref={contactref}><Contact/></div>
      <Footer/>
    </div>
  );
}

export default App;
