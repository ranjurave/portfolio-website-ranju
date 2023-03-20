import React from 'react'
import styles from './Contact.module.css'
import app_styles from '../App.module.css'
function Contact (){
  return (
    <div className={styles.Contact} >
      <h1 className={app_styles.section_name}>Contact Me</h1>
      <form className={styles.contact_form} action="#" method="post">
        <div className={styles.name_email_subject}>
          <div className={styles.label_text}>
            <label>Name</label>
            <input type="text" id="name" name="name" required placeholder='Name'></input>
          </div>
          <div className={styles.label_text}>
            <label>Email</label>
            <input type="email" id="email" name="email" required placeholder='Email'></input>
          </div>
          <div className={styles.label_text}>
            <label>Subject</label>
            <input type="text" id="subject" name="subject" required placeholder='Subject'></input>
          </div>
        </div>
        <div className={styles.message}>
          <label>Message</label>
          <textarea id="message" name="message" required placeholder='message'></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact