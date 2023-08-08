import React, { useState } from 'react';
import styles from './ScrollToTop.module.css';

const ScrollToTop= () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    // <div className={isVisible ? styles.scrolltotop : ''} onClick={scrollToTop}>
    // {/* <div className={styles.uparrow}> */}
    // <div className={styles.upchevron}>
    //     {/* <p> > </p> */}
    // </div>
    //   {/* <i className="fa fa-chevron-up" aria-hidden="true"></i> */}
    // </div>
    <div className={isVisible ? styles.scrolltotop : ''} onClick={scrollToTop}>
        <div className={styles.chevronup}></div>
    </div>
  );
};

export default ScrollToTop;
