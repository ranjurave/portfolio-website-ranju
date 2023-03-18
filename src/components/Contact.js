import React from 'react'
import './Contact.css'
import '../App.css'
function Contact() {
  return (
    <div className='Contact'>
      <h2 className='section-name'>Contact Me</h2>
      <form class="contact-form" action="#" method="post">
        <div className='name-email-subject'>
          <div className='label-text'>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required placeholder='Name'></input>
          </div>
          <div className='label-text'>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder='Email'></input>
          </div>
          <div className='label-text'>
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required placeholder='Subject'></input>
          </div>
        </div>
        <div className='message'>
          <label for="message">Message</label>
          <textarea id="message" name="message" required placeholder='message'></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact