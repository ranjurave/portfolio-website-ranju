import React from 'react'
import './Menu.css';
function Menu() {
  return (
    <div className='NavMenu'>
        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Experience</li></a>
          <a href="#"><li>Works</li></a>
          <a href="#"><li>Education</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
    </div>
  )
}

export default Menu