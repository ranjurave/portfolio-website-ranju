import React from 'react'
import styles from '../components/ToDoApp.module.css'
import ToDoForm from '../components/ToDoForm'
function ToDoApp() {
  return (
    <div >
      <h2 className={styles.header}>Todo Application</h2>
      <ToDoForm/>
    </div>
  )
}

export default ToDoApp