import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({todos,setTodos}) => {
  // NOTE: do not delete `data-cy` key value pair
  const deleteHandler=()=>{

  }
  return (
    <>
    {todos.map((todo)=>(
      <li data-cy="task" key={todo.id} className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{todo.text}</div>
      {/* Counter here */}
      <Counter count={todo.count}/>
      <button data-cy="task-remove-button" onClick={deleteHandler}>x</button>
    </li>
    ))}
  
    </>
  );
};

export default Task;
