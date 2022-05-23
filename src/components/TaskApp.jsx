import React, { useState } from "react";

import styles from "./taskApp.module.css";
import tasks from "../data/tasks.json"
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = () => {

  const [todos,setTodos]=useState(tasks);
  const [inputText,setInputText]=useState("");
  const [filteredTodos,setFilteredTodos]=useState([]);
  const heading= "Todo App";
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader todos={todos} input={heading}/>
      {/* Add Task */}
      <AddTask inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      {/* Tasks */}
      <Tasks todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default TaskApp;
