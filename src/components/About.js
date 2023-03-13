import React from 'react'
import redt from '../images/about.jpg'
import './About.css'
import '../App.css'

function About() {
  return (
    <div className='About'>
      <div>
        <div>
          <p className='hello'>hello I am</p>
          <p className='name'>Ranju Raveendran</p>
          <p className='developer'>Web and Game Developer</p>
          <button className='downloadbutton'>Download my CV</button>
        </div>
        <div className='Socials'>
          <a href="https://www.linkedin.com/in/ranjurave/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/ranjurave" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.youtube.com/channel/UC3ORUfnTnu7bq_WGKcOTCJQ" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.flickr.com/photos/97303816@N08/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-flickr"></i></a>
          <a href="https://ranjurave.itch.io/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-itch-io"></i></a>
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