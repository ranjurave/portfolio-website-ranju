import React from 'react'
import './Menu.css';
function Menu() {
  return (
    <div className='NavMenu'>
      <div id='MenuInitials'>RR</div>
        <ul id="Menu">
          <div id='MenuItem'><li>Home</li></div>
          <div id='MenuItem'><li>About</li></div>
          <div id='MenuItem'><li>Experience</li></div>
          <div id='MenuItem'><li>Works</li></div>
          <div id='MenuItem'><li>Education</li></div>
          <div id='MenuItem'><li>Contact</li></div>
        </ul>
    </div>
  )
}

export default Menu