import React from 'react'
import './Menu.css';
function Menu() {
  return (
    <div className='NavMenu'>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" className='checkboxformenu'/>
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Experience</li></a>
            <a href="#"><li>Works</li></a>
            <a href="#"><li>Education</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menu