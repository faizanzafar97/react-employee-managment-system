import React from 'react'
import Header from '../others/header'
import TaskList from '../others/tasklistno'
import TaskListCards from '../Tasklist/tasklist'

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <h1 className="mb-6 text-3xl font-bold">
          Employee Dashboard
        </h1>

        <TaskList />

        <div className="mt-8">
          <TaskListCards />
        </div>

      </main>
    </div>
  )
}

export default EmployeeDashboard