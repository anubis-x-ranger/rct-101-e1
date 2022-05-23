import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({todos,input}) => {
  // sample values to be replaced
  let totalTask = todos.length;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
     <div className={styles.title}> {input} </div>
     <div className={styles.subtitle}> You have <b data-cy="header-remaining-task">{unCompletedTask}</b> of <b data-cy="header-total-task">{totalTask}</b> tasks remaining.</div>
    </div>
  );
};

export default TaskHeader;
