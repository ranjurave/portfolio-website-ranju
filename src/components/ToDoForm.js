import React from 'react'
import styles from '../components/ToDoApp.module.css'
import shortid from 'shortid';
function ToDoForm({todo, setTodo, duedate, setDuedate, todoList, setTodoList}) {

  const handleChange=(event)=>{
    setTodo(event.target.value);
  }
  const handleDuedate=(event)=>{
    setDuedate(event.target.value);
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    setTodoList([...todoList, {name:todo, duedate:duedate, id:shortid.generate()}]);
    setTodo('');
    setDuedate('');
  }
  return (
    <div className={styles.todoform}>  
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} className={styles.todoinput} type='text' placeholder='add todo item'></input>
        <input value={duedate} onChange={handleDuedate} className={styles.todoinput} type='date' placeholder='date'></input>
        <button className={styles.todobutton} type='submit'>Add</button>
      </form>
    </div>
  )
}

export default ToDoForm