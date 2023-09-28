import styles from '../components/ToDoApp.module.css'

const Todo = ({setTodoList, todoItem, todoList })=>{
    const deleteTodo = () =>{
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));
    };
    return(
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{todoItem.name}</h3>
                <h3 className={styles.todoname}>{todoItem.duedate}</h3>
                <button onClick={deleteTodo} className={styles.deletebutton}>Delete</button>
            </div>
        </div>
    )
}
export default Todo;