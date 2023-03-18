import React from 'react'
import {useState} from 'react';
import './Menu.css';
import '../App.css';

const Menu = ({ resultRef }) => {
  // const [name, setName] = useState("");
  const handleClick = () => {
    resultRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleContactClick = () => {
    resultRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className='NavMenu'>
      <div id='MenuInitials'>RR</div>
        <ul id="Menu">
          <div id='MenuItem'><li>Home</li></div>
          <div id='MenuItem'><li>About</li></div>
          <div id='MenuItem'><li>Experience</li></div>
          <div id='MenuItem'><li onClick={handleClick}>Works</li></div>
          <div id='MenuItem'><li>Education</li></div>
          <div id='MenuItem'><li onClick={handleContactClick}>Contact</li></div>
        </ul>
    </div>
  )
}

export default Menu