import React from 'react';
// import { useState } from "react";
import styles from './Menu.module.css';
import HamburgerMenu from './HamburgerMenu';

const Menu = ({resultRef}) =>{
  // const [name, setName] = useState("");
  const handleClick = () =>{
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.nav_menu}>
      <div className={styles.menu_initials}>
        RR
      </div>
      <ul className={styles.menu_full}>
        <div className={styles.menu_item}><li>Home</li></div>
        <div className={styles.menu_item}><li>About</li></div>
        <div className={styles.menu_item}><li>Experience</li></div>
        <div className={styles.menu_item}><li onClick={handleClick}>Works</li></div>
        {/* <div className={styles.menu_item}><li>Works</li></div> */}
        <div className={styles.menu_item}><li>Education</li></div>
        <div className={styles.menu_item}><li>Contact</li></div>
        <div className={styles.mobile_menu}>
          <HamburgerMenu></HamburgerMenu>
        </div>
      </ul>
    </div>
  )
}

export default Menu