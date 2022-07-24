import React, {useState} from 'react';
import Task from './Task';

function TodoMain() {
  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);
  const onTaskChange = (event) => {
    setTask(event.target.value);
  }

  const addTask = () => {
    setTaskArray((prevTasks) => {
      return [...prevTasks, task]
    })
    setTask('');
  }

  const deleteItem = (id) => {
    // console.log(id);
    setTaskArray((prevTasks) => {
      return prevTasks.filter((arrEle, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={task} placeholder="Add your task"  onChange={onTaskChange}/>
      <button onClick={addTask}>Add Task</button>
      <ol>
        {
          taskArray.map((val, index) =>{
            return <Task text={val} id={index} onSelect={deleteItem}/>
          })
        }
      </ol>
    </div>
  )
}

export default TodoMain;