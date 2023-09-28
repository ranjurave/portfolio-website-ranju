import React from 'react'
import styles from '../components/ToDoApp.module.css'
function ToDoForm() {
  return (
    <div className={styles.todoform}>
      <form>
        <input className={styles.todoinput} type='text' placeholder='add todo item'></input>
        <button className={styles.todobutton} type='submit'>Add</button>
      </form>
    </div>
  )
}

export default ToDoForm