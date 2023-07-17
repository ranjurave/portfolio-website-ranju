import React from 'react';
import redt from '../images/about.jpg';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <div>
        <div>
          <p className= {styles.hello}>hello I am,</p>
          <p className={styles.name}>Ranju Raveendran</p>
          <p className={styles.developer}>Software Developer</p>
          <p className={styles.blob}>
            A coding enthusiast and an admirer of the latest technologies, I have over a decade of experience working in a wide range of areas, including Web Development, Game Development, 
            XR Development, and Computer Graphics. Currently, I am a lecturer at Yoobee College, teaching Software Engineering, as well as working on freelance software projects. 
            I have completed a Master of Creative Technologies, a Degree in Computer Science, and an Advanced Software Development course.
            <br></br><br></br>
            Proficient in Full Stack Development and Game & App Development, and skilled in C++, C#, Python, .NET, React, HTML, CSS, JavaScript, SQL, and many more, 
            with a proven track record of picking up new technologies quickly and functioning well even under pressure.</p>
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