import React, { useId } from 'react'
import './Contact.css'

function Contact() {
  const subject = useId();
  return (
    <div className='Contact'>
      <h1>Contact</h1>
      <form>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

        <label htmlFor="country">Country</label>
         <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea
        id={subject}
        name="subject "

      />

        <input type="submit" value="Submit"/> 
      </form>
    </div>
  )
}

export default Contact