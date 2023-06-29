import React from 'react';
import styles from './Menu.module.css';
import HamburgerMenu from './HamburgerMenu';

const Menu = ({selectedMenuItem}) =>{
  return (
    <div className={styles.nav_menu}>
      <div className={styles.menu_initials}>
        <a href='#'>RR</a>
      </div>
      <ul className={styles.menu_full}>
        <div className={styles.menu_item}><li onClick={() => selectedMenuItem("about")}>Home</li></div>
        <div className={styles.menu_item}><li onClick={() => selectedMenuItem("about")}>About</li></div>
        <div className={styles.menu_item}><li onClick={() => selectedMenuItem("experience")}>Experience</li></div>
        <div className={styles.menu_item}><li onClick={() => selectedMenuItem("works")}>Works</li></div>
        <div className={styles.menu_item}><li onClick={() => selectedMenuItem("education")}>Education</li></div>
        <div className={styles.menu_item}><li onClick={() => selectedMenuItem("contact")}>Contact</li></div>
      </ul>
        <div className={styles.mobile_menu}>
          <HamburgerMenu selectedMenuItem={selectedMenuItem}></HamburgerMenu>
        </div>
    </div>
  )
}
export default Menu