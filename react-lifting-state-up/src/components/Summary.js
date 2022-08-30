// src/components/Summary.js
 
import React from "react";
 
const Summary = (props) => {
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{props.completedTasks}</p>
    </div>
  );
}
 
export default Summary;