import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";
 
const initialTasks = [
    {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false,
  },
];
 
const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const [completedTasks, setCompletedTasks] = useState(0)


  const toggleTaskDone = (id) => {

    const newTasks = tasks.map(task => {
        if (task._id === id) {
            task.isDone = !task.isDone

            if(task.isDone) {
                setCompletedTasks(completedTasks + 1)
            }else {
                setCompletedTasks(completedTasks - 1)
            }

            return task
        }
        return task
    })

    setTasks(newTasks)

  }

 
  return (
    <div>
      <Summary completedTasks={completedTasks}/>
      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} toggleTaskDone={toggleTaskDone} /> )}
      </div>
    </div>
  );
}
 
export default ToDoList;