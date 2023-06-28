import React from 'react';
import styles from './Experience.module.css';
import app_styles from '../App.module.css';

function Experience() {
  return (
    <div className={styles.experience}>
      <div></div>
      <h1 className={app_styles.section_name}>Experience</h1>
      <div className={styles.experiences}>
        <div className={styles.content}>
          <h3>Yoobee College</h3>
          <p>Lecturer</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <h3>Native Software</h3>
          <p>Software Developed</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <h3>Huhu Studios</h3>
          <p>Senior Animator</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <h3>Toonz Animations</h3>
          <p>Character Animator</p>
        </div>
      </div>
    </div>
  )
}

export default Experience