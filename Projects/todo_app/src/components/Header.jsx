/* eslint-disable react/prop-types */
import React from "react";

const Header = ({addTask}) => {

    const [task, setTask] = React.useState("");
    const handleAdd = () => {
        addTask(task);
        setTask("");
        console.log("added")
    }
    return(
        <div className="header">
            <h1>To-Do App</h1>
            <div className="task-input">
                <input type="text" placeholder="Add a task..." value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button onClick={handleAdd}>Add Task</button>
            </div>
        </div>
    )
}

export default Header;