import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({todos,setTodos}) => {
  // NOTE: do not delete `data-cy` key value pair
  const handleUpdate=(todo)=>{
    setTodos(todos.map((item)=>{
      if(item.id==todo.id){
        return{
          ...item,done:true
        }

      }
      return item;
    }))
  }
  const deleteHandler=(todo)=>{
    setTodos(todos.filter((e)=> e.id !== todo.id))
  }
  return (
    <>
    {todos.map((todo)=>(
      <li data-cy="task" key={todo.id} className={styles.task}>
        <input type="checkbox" data-cy="task-checkbox" className={styles.checkbox} onClick={()=>handleUpdate(todo)}/>
        <div data-cy="task-text" className={todo.done==true ? styles.completed:styles.incompleted}>{todo.text}</div>
        {/* Counter here */}
        <Counter count={todo.count}/>
        <button data-cy="task-remove-button" onClick={()=>deleteHandler(todo)}>x</button>
    </li>
    ))}
  
    </>
  );
};

export default Task;
