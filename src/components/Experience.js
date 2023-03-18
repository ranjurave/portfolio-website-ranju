import React from 'react';
import './Experience.css';
import '../App.css';
function Experience() {
  return (
    <div className='experience'>
      <h1 className='section-name'>Experience</h1>
      <div className='experiences'>
        <div className="content">
          <h3>Yoobee College</h3>
          <p>Lecturer</p>
        </div>
        <div className="content">
          <h3>Native Software</h3>
          <p>Developed WebAPI</p>
        </div>
        <div className="content">
          <h3>Huhu Studios</h3>
          <p>Senior Animator</p>
        </div>
        <div className="content">
          <h3>Toonz Animations</h3>
          <p>Character Animator</p>
        </div>
      </div>
    </div>
  )
}

export default Experience