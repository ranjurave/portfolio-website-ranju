import React from 'react'
import styles from './Menu.module.css';
import app_styles from '../App.module.css';

function Menu(){
  // const [name, setName] = useState("");
  // const handleClick = () => {
  //   resultRef.current?.scrollIntoView({behavior: 'smooth'});
  // };
  // const handleContactClick = () => {
  //   resultRef.current?.scrollIntoView({behavior: 'smooth'});
  // };
  return (
    <div className={styles.NavMenu}>
      <div id={styles.MenuInitials}>RR</div>
        <ul id={styles.Menu}>
          <div id={styles.MenuItem}><li>Home</li></div>
          <div id={styles.MenuItem}><li>About</li></div>
          <div id={styles.MenuItem}><li>Experience</li></div>
          {/* <div id='MenuItem'><li onClick={handleClick}>Works</li></div> */}
          <div id={styles.MenuItem}><li>Works</li></div>
          <div id={styles.MenuItem}><li>Education</li></div>
          {/* <div id='MenuItem'><li onClick={handleContactClick}>Contact</li></div> */}
          <div id={styles.MenuItem}><li>Contact</li></div>
        </ul>
    </div>
  )
}

export default Menu