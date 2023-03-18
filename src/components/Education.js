import React from 'react'
import './Education.css'
function Education() {
  return (
    <div className='Education'>      
      <h1 className='section-name'>Education</h1>
      <div className='educations'>
        <div className="content">
          <h3>Advanced Software Development</h3>
          {/* <h3>Cloud and AI Development</h3>
          <h3>Full Stack Developer</h3> */}
          <h4>2022</h4>
          <p>Mission Ready HQ</p>
          <p>Auckland, New Zealand</p>
        </div>
        <div className="content">
          <h3>Master of Creative Technologies</h3>
          <h4>2021</h4>
          <p>Auckland University of Technologies</p>
          <p>Auckland, New Zealand</p>
        </div>
        <div className="content">
          <h3>PG Diploma in Computer Graphic Design</h3>
          <h4>2010</h4>
          <p>Universal College of Learning</p>
          <p>Wanganui, New Zealand</p>
        </div>
        <div className="content">
          <h3>BSc Computer Science</h3>
          <h4>2001</h4>
          <p>Kerala University</p>
          <p>Kerala, India</p>
        </div>
      </div>
    </div>
  )
}

export default Education