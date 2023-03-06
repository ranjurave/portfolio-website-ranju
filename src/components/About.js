import React from 'react'
import redt from '../images/about.jpg'

function About() {
  return (
    <div>
      <div>
        <h6>hello I am</h6>
        <h1>Ranju Raveendran</h1>
        <h4>Web and Game Developer</h4>
        <button>Download my CV</button>
      </div>
      <div className='socials'>
        <a><i class="fa-brands fa-linkedin"></i></a>
        <a><i class="fa-brands fa-github"></i></a>
        <a><i class="fa-brands fa-youtube"></i></a>
        <a><i class="fa-brands fa-flickr"></i></a>
        {/* <a><FontAwesomeIcon icon="fa-brands fa-linkedin"/></a>
        <a><FontAwesomeIcon icon="fa-brands fa-github"/></a>
        <a><FontAwesomeIcon icon="fa-brands fa-youtube"/></a>
        <a><FontAwesomeIcon icon="fa-brands fa-flickr" /></a> */}
      </div>
      <img src={redt} alt="about" />
    </div>
  )
}

export default About