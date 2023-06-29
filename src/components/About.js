import React from 'react';
import redt from '../images/about.jpg';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <div>
        <div>
          <p className= {styles.hello}>hello I am</p>
          <p className={styles.name}>Ranju Raveendran</p>
          <p className={styles.developer}>Web and Game Developer</p>
          <p className={styles.blob}>Experience in software development and 3D animation. Proficient in Web, Game, XR Development and 3D Graphics. Completed Master of Creative Technologies, Degree in Computer Science and Advanced Software Development courses.</p>
          <a href="/files/RanjuRaveendranCV.pdf" download>
            <button className={styles.downloadbutton}>Download CV</button>
          </a>
        </div>
        <div className={styles.socials}>
          <a className={styles.socialslink} href="https://www.linkedin.com/in/ranjurave/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a className={styles.socialslink} href="https://github.com/ranjurave" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a className={styles.socialslink} href="https://www.youtube.com/channel/UC3ORUfnTnu7bq_WGKcOTCJQ" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
          <a className={styles.socialslink} href="https://www.flickr.com/photos/97303816@N08/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-flickr"></i></a>
          <a className={styles.socialslink} href="https://ranjurave.itch.io/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-itch-io"></i></a>
        </div>
      </div>
      <img src={redt} alt="about"/>
    </div>
  )
}

export default About