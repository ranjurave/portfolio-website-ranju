// import React, { useState } from 'react';
// import styles from './HamburgerMenu.module.css';

// const HamburgerMenu = ({selectedMenuItem}) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleMenu = () => {
//       console.log(isOpen);
//     setIsOpen(!isOpen);
//   }
//   const [menu, setMenu] = useState("home");
//   console.log(menu);
//   const selectedMenuItem = (menu) => {
//     setMenu(menu);
//   };

//   return (
//     <div className={styles.hamburger_menu} onClick={toggleMenu}>
//       <div className={styles.hamburger}>
//         <div className={isOpen?styles.top_bar:styles.top_bar_closed}></div>
//         <div className={isOpen?styles.middle_bar:styles.middle_bar_closed}></div>
//         <div className={isOpen?styles.bottom_bar:styles.bottom_bar_closed}></div>
//       </div>
//       <div className={isOpen?styles.mobile_menu_closed:styles.mobile_menu}>
//         <ul>
//           <li onClick={() => selectedMenuItem("home")}>Home</li>
//           <li onClick={() => selectedMenuItem("about")}>About</li>
//           <li onClick={() => selectedMenuItem("experience")}>Experience</li>
//           <li onClick={() => selectedMenuItem("work")}>Work</li>
//           <li onClick={() => selectedMenuItem("education")}>Education</li>
//           <li onClick={() => selectedMenuItem("contact")}>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// export default HamburgerMenu;