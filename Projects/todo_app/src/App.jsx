import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, {id: Date.now( ), task, isDone: false}]);
  }

  const toggleTask = (id) => {
    console.log("first")
    console.log(id)
    setTaskList(taskList.map((el)=>el.id == id ? {...el, isDone: !el.isDone} : el));
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter((el)=>el.id != id));
  }

  const updateTask = (id, newTask) => {
    setTaskList(taskList.map((el)=>el.id == id ? {...el, task: newTask} : el))
  }

  return (
    <>
    <Header addTask={addTask}/>
    <TodoList tasks={taskList} toggleTask = {toggleTask} deleteTask= {deleteTask} updateTask = {updateTask} />
    </>
  )
}

export default App
