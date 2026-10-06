// AdminDashboard.jsx

import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/createtask'
import AllTasks from '../others/AllTask'

const AdminDashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Task Created')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

    <Header/>
    <CreateTask handleSubmit={handleSubmit}/>
    <AllTasks/>

    </div>
  )
}

export default AdminDashboard