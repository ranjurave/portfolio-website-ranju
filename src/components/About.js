import React from 'react'
import redt from '../images/about.jpg'
import './About.css'
import '../App.css'

function About() {
  return (
    <div className="About">
      <div>
        <div>
          <p className="hello">hello I am</p>
          <p className="name">Ranju Raveendran</p>
          <p className="developer">Web and Game Developer</p>
          <button className="downloadbutton">Download CV</button>
        </div>
        <div className="socials">
          <a className="socialslink" href="https://www.linkedin.com/in/ranjurave/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a className="socialslink" href="https://github.com/ranjurave" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a className="socialslink" href="https://www.youtube.com/channel/UC3ORUfnTnu7bq_WGKcOTCJQ" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
          <a className="socialslink" href="https://www.flickr.com/photos/97303816@N08/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-flickr"></i></a>
          <a className="socialslink" href="https://ranjurave.itch.io/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-itch-io"></i></a>
        </div>
      </div>
      <img src={redt} alt="about" />
    </div>
  )
}

export default About