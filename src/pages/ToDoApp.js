import React, { useState } from 'react'
import styles from '../components/ToDoApp.module.css'
import ToDoForm from '../components/ToDoForm'
import TodoList from '../components/TodoList';
function ToDoApp() {
  const [todo, setTodo] = useState("");
  const [duedate, setDuedate] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div >
      <h2 className={styles.header}>Todo Application</h2>
      <ToDoForm todo={todo} setTodo={setTodo} duedate={duedate} setDuedate={setDuedate} todoList={todoList} setTodoList={setTodoList}/>
      <TodoList setTodoList={setTodoList} todoList={todoList}/>
    </div>
  )
}

export default ToDoApp