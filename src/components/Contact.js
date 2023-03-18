import React from 'react'
import { forwardRef } from 'react'
import './Contact.css'
import '../App.css'
function Contact (){
  return (
    <div className='Contact' >
      <h2 className='section-name'>Contact Me</h2>
      <form className="contact-form" action="#" method="post">
        <div className='name-email-subject'>
          <div className='label-text'>
            <label>Name</label>
            <input type="text" id="name" name="name" required placeholder='Name'></input>
          </div>
          <div className='label-text'>
            <label>Email</label>
            <input type="email" id="email" name="email" required placeholder='Email'></input>
          </div>
          <div className='label-text'>
            <label>Subject</label>
            <input type="text" id="subject" name="subject" required placeholder='Subject'></input>
          </div>
        </div>
        <div className='message'>
          <label>Message</label>
          <textarea id="message" name="message" required placeholder='message'></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
};

export default Contact