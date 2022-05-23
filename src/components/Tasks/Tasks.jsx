import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({todos,setTodos}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>{!todos ? <div data-cy="tasks-empty" className={styles.empty}>
    {/* Show when No Tasks are present */}
    
  </div> :<ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <Task todos={todos} setTodos={setTodos}/>
      </ul> }
    </>
  );
};

export default Tasks;
