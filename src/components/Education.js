import React from 'react'
import styles from './Education.module.css'
import app_styles from '../App.module.css'

function Education() {
  return (
    <div className={styles.education}>      
      <h1 className={app_styles.section_name}>Education</h1>
      <div className={styles.educations}>
        <div className={styles.contents}>
          <h3>Advanced Software Development</h3>
          <h4>2022</h4>
          <p>Mission Ready HQ</p>
          <p>Auckland, New Zealand</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <h3>Master of Creative Technologies</h3>
          <h4>2021</h4>
          <p>Auckland University of Technologies</p>
          <p>Auckland, New Zealand</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <h3>PG Diploma in Computer Graphic Design</h3>
          <h4>2010</h4>
          <p>Universal College of Learning</p>
          <p>Wanganui, New Zealand</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <h3>BSc Computer Science</h3>
          <h4>2001</h4>
          <p>Kerala University</p>
          <p>Kerala, India</p>
        </div>
      </div>
    </div>
  )
}

export default Education