import './App.css'
import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom"
import Nav from './Components/Nav'
import Exercise from './Components/Exercise'
import Coding from './Components/Coding'
import Shopping from './Components/Shopping'
import Chores from './Components/Chores'
import Login from './Components/Login';
import NewTask from './Components/NewTask';
import Header from './Components/Header'

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/tasks/")
    .then(r => r.json())
    .then(tasks => setTasks(tasks))
  }, [])

  useEffect(() => {
    // auto-login
      fetch("/users/me").then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => setUser(user));
        }
      });
    }, []);

    function handleAddTask(newTask) {
      setTasks([...tasks, newTask])
    }
  
    const handleDeleteItem = (id) => {
      const finalTasks = tasks.filter(task => task.id !== id)
      setTasks(finalTasks)
    }
  
  function handleUpdateTask(updatedTaskObj) {
      const updatedTasks = tasks.map(task => {
          if (task.id === updatedTaskObj.id) {
          return updatedTaskObj;
          } else {
          return task;
          }
      });
      setTasks(updatedTasks);
  }
    if (!user) return <Login onLogin={setUser} />

  return (
   <div className="body">
    <Header />
      <Nav user={user} onLogout={setUser}/>
      <NewTask align='start' onAddTask={handleAddTask} user={user} />
      <Routes >
        <Route path="/" element={<Home updateTask={handleUpdateTask} tasks={tasks} onTaskDelete={handleDeleteItem} onAddTask={handleAddTask} user={user} />}/>
        <Route path="/exercise" element={<Exercise user={user} updateTask={handleUpdateTask} tasks={tasks} onTaskDelete={handleDeleteItem} onAddTask={handleAddTask} />}/>
        <Route path="/coding" element={<Coding user={user} updateTask={handleUpdateTask} tasks={tasks} onTaskDelete={handleDeleteItem} onAddTask={handleAddTask} />}/>
        <Route path="/chores" element={<Chores user={user} updateTask={handleUpdateTask} tasks={tasks} onTaskDelete={handleDeleteItem} onAddTask={handleAddTask} />}/>
        <Route path="/shopping" element={<Shopping user={user} updateTask={handleUpdateTask} tasks={tasks} onTaskDelete={handleDeleteItem} onAddTask={handleAddTask} />}/>
      </Routes>
     <br/><br/>
   </div>
  )
}

export default App;
