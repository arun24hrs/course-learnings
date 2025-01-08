/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import React from "react";

const TodoItem = ({task,toggleTask,deleteTask,updateTask}) => {
    const [newTask, setNewTask] = React.useState('');
    const [isEditing, setIsEditing] = React.useState(false);

    const handleUpdate = () => {
      if(isEditing){
        updateTask(task.id, newTask);
      }
      setIsEditing(!isEditing);
    }

    

    return(
        <li className={`todo-item ${task.isDone ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          placeholder="Edit Task..."
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{task.isDone?task.task+"✔":task.task}</span>
      )}
      <div className="actions">
        <button onClick={()=>toggleTask(task.id)}>{task.isDone?"Mark Pending":"Mark Complete"}</button>
        <button onClick={handleUpdate}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
    )
}

export default TodoItem;