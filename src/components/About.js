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
          <p className={styles.blob}>I am a coding enthusiast and an admirer of the latest technologies. Over the past years, I have worked in a wide range of areas, including Game Development, Web Development, 3D Animation, XR Development, and Graphics Design. Currently, I'm a lecturer at Yoobee College teaching Web Development and Game Development. To sharpen my research skills, I studied a Master of Creative Technologies at AUT (while working) and developed an Augmented Reality application for interior design. I have also completed an Advanced Software Developer course with Mission Ready HQ and developed a web API for ticket tracking in an industry internship at Native Software. Proficient in Full Stack Development and Game Development and skilled in C++, C#, Python, .NET, React, HTML, CSS, JavaScript and SQL with a proven track record of picking up new technologies fast and functioning well under pressure.</p>
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