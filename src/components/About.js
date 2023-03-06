import React from 'react'
import redt from '../images/about.jpg'
import './About.css'

function About() {
  return (
    <div className='About'>
      <div>
      <div>
        <h6>hello I am</h6>
        <h1>Ranju Raveendran</h1>
        <h4>Web and Game Developer</h4>
        <button>Download my CV</button>
      </div>
      <div className='Socials'>
        <a href="https://www.linkedin.com/in/ranjurave/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ranjurave"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.youtube.com/channel/UC3ORUfnTnu7bq_WGKcOTCJQ"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.flickr.com/photos/97303816@N08/"><i class="fa-brands fa-flickr"></i></a>
        {/* <a><FontAwesomeIcon icon="fa-brands fa-linkedin"/></a>
        <a><FontAwesomeIcon icon="fa-brands fa-github"/></a>
        <a><FontAwesomeIcon icon="fa-brands fa-youtube"/></a>
        <a><FontAwesomeIcon icon="fa-brands fa-flickr" /></a> */}
      </div>
      </div>
      <img src={redt} alt="about" />
    </div>
  )
}

export default About