import React from 'react'
import './Menu.css';
function Menu() {
  return (
    <div className='NavMenu'>
        <ul id="menu">
          <div id='menu_item'><li>Home</li></div>
          <div id='menu_item'><li>About</li></div>
          <div id='menu_item'><li>Experience</li></div>
          <div id='menu_item'><li>Works</li></div>
          <div id='menu_item'><li>Education</li></div>
          <div id='menu_item'><li>Contact</li></div>
        </ul>
    </div>
  )
}

export default Menu