
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTask,deleteTask,reset,editTask } from './store/todoSlice'
import './App.css'

function App() {
  const Tasks=useSelector((state)=>state.todo)
  
  const dispatch=useDispatch()
  const [task,setTask]=useState('')
  const [isEdit,setIsEdit]=useState(null)
  const [newTask,setNewTask] =useState('')

  const addTaskHandle=()=>{
    dispatch(addTask(task))
    setTask('')
  }
  const editTasks=(id)=>{
    dispatch(editTask({id,newTask}))
    setNewTask('')
    setIsEdit(null)

  }
  return (
    <>
    <h3 className="title">To-Do List</h3>
<input
  type="text"
  onChange={(e) => setTask(e.target.value)}
  value={task}
  className="input"
/>
<button onClick={addTaskHandle} className="btn add">Add Task</button>

{Tasks.length ? (
  <ul className="task-list">
    {Tasks.map((t) =>
      isEdit === t.id ? (
        <li key={t.id} className="task-item">
          <input
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            className="input edit-input"
          />
          <button onClick={() => editTasks(t.id)} className="btn save">Save</button>
        </li>
      ) : (
        <li key={t.id} className="task-item">
          {t.task}
          <button onClick={() => dispatch(deleteTask(t.id))} className="btn delete">Delete</button>
          <button
            onClick={() => {
              setIsEdit(t.id)
              setNewTask(t.task)
            }}
            className="btn edit"
          >
            Edit
          </button>
        </li>
      )
    )}
    <li><button onClick={() => dispatch(reset())} className="btn reset">Reset All</button></li>
  </ul>
) : (
  <p className="empty">List is empty</p>
)}
      
    </>
  )
}

export default App
