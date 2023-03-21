import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
      console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.hamburger_menu} onClick={toggleMenu}>
      <div className={styles.hamburger}>
        <div className={isOpen?styles.top_bar:styles.top_bar_closed}></div>
        <div className={isOpen?styles.middle_bar:styles.middle_bar_closed}></div>
        <div className={isOpen?styles.bottom_bar:styles.bottom_bar_closed}></div>
      </div>
      <div className={isOpen?styles.mobile_menu_closed:styles.mobile_menu}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Education</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;