import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({todos,setTodos,inputText,setInputText}) => {
  // NOTE: do not delete `data-cy` key value pair
  const inputHandler=(e)=>{
    // console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitHandler=()=>{
    var newTodo={
      id:Math.random()*100000,
      text: inputText,
      done: false,
      count: 1
    }
    if(newTodo.text && newTodo.text!=={...todos}){
    setTodos([...todos,newTodo]);
  }
    console.log(todos)
  }

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={inputText} onChange={inputHandler}/>
      <button data-cy="add-task-button" onClick={submitHandler}>+</button>
    </div>
  );
};

export default AddTask;
