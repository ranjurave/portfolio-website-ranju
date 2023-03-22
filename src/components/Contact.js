import React, {useRef} from 'react'
import styles from './Contact.module.css'
import app_styles from '../App.module.css'
import emailjs from '@emailjs/browser';

function Contact (){
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0dnmkrl', 'template_86r7zha', form.current, 'cZjcV4r5os2vIMWtU')
      .then((result) => {
          console.log(result.text);
          console.log("success");
          e.target.reset();
          alert("Email sent. Thank you for contacting.")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className={styles.Contact} >
      <h1 className={app_styles.section_name}>Contact Me</h1>
      <div className={styles.details_and_form}>
`      <div className={styles.details}>
        <p>Phone : 02102467215</p>
        <p>Email : ranjurave@gmail.com</p>
      </div>
      <form ref={form} className={styles.contact_form} onSubmit={sendEmail}>
        <div className={styles.name_email}>
          <div className={styles.label_text}>
            <label>Name</label>
            <input type="text" name="from_name" required placeholder='Name'/>
          </div>
          <div className={styles.label_text}>
            <label>Email</label>
            <input type="email" name="user_email" required placeholder='Email'/>
          </div>
        </div>
        <div className={styles.label_text}>
          <label>Message</label>
        </div>
        <textarea name="message" required placeholder='Message'/>
        <button type="submit" value="Send">Send</button>
      </form>`
      </div>
    </div>
  )
}

export default Contact