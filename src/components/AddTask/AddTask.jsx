import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({todos,setTodos,inputText,setInputText}) => {
  // NOTE: do not delete `data-cy` key value pair
  const inputHandler=(e)=>{
    // console.log(e.target.value);
    setInputText(e.target.value);
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={inputText} onChange={inputHandler}/>
      <button data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
