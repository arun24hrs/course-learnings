/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
const TodoList = ({tasks,toggleTask,deleteTask,updateTask}) => {
    console.log(tasks, "intdlist")
    return(
        <ul className="todo-list">
        {tasks.map((el) => (
        <TodoItem
          key={el.id}
          task={el}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          updateTask={updateTask}
        />
      ))}
        </ul>
    )
}

export default TodoList;