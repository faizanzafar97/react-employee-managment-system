// AdminDashboard.jsx

import React from 'react'
import Header from '../others/header'

const AdminDashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Task Created')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

    <Header/>
      {/* Main */}
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Admin Dashboard
          </h2>

          <p className="mt-2 text-slate-400">
            Create and assign tasks to your employees.
          </p>
        </section>

        {/* Dashboard Content */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">

          {/* Create Task */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

            <div className="mb-6">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  +
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Create Task
                  </h3>

                  <p className="text-sm text-slate-500">
                    Assign a new task to an employee
                  </p>
                </div>

              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Task Title */}
              <div>
                <label
                  htmlFor="taskTitle"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Task Title
                </label>

                <input
                  id="taskTitle"
                  type="text"
                  placeholder="Make a UI design"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  rows="5"
                  placeholder="Detailed description of task..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Date
                </label>

                <input
                  id="date"
                  type="date"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Assign To */}
              <div>
                <label
                  htmlFor="assignTo"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Assign To
                </label>

                <select
                  id="assignTo"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="" disabled>
                    Select Employee
                  </option>

                  <option value="faizan">Faizan</option>
                  <option value="azeem">Azeem</option>
                  <option value="ali">Ali</option>
                  <option value="ahmed">Ahmed</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Category
                </label>

                <select
                  id="category"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="" disabled>
                    Select Category
                  </option>

                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="testing">Testing</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                Create Task
              </button>

            </form>
          </section>

          {/* Admin Statistics */}
          <section>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">
                Overview
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Current employee and task statistics
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Employees */}
              <div className="rounded-2xl border border-blue-500/20 bg-slate-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-500/10">
                <p className="text-sm font-medium text-slate-400">
                  Total Employees
                </p>

                <h4 className="mt-3 text-4xl font-bold text-blue-400">
                  24
                </h4>
              </div>

              {/* New Tasks */}
              <div className="rounded-2xl border border-amber-500/20 bg-slate-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-amber-500/10">
                <p className="text-sm font-medium text-slate-400">
                  New Tasks
                </p>

                <h4 className="mt-3 text-4xl font-bold text-amber-400">
                  12
                </h4>
              </div>

              {/* Completed */}
              <div className="rounded-2xl border border-emerald-500/20 bg-slate-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/10">
                <p className="text-sm font-medium text-slate-400">
                  Completed
                </p>

                <h4 className="mt-3 text-4xl font-bold text-emerald-400">
                  36
                </h4>
              </div>

              {/* Failed */}
              <div className="rounded-2xl border border-red-500/20 bg-slate-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-red-500/10">
                <p className="text-sm font-medium text-slate-400">
                  Failed Tasks
                </p>

                <h4 className="mt-3 text-4xl font-bold text-red-400">
                  4
                </h4>
              </div>

            </div>

            {/* Recent Activity */}
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

              <h3 className="text-lg font-semibold text-white">
                Recent Activity
              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      New task assigned
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      UI Design Project
                    </p>
                  </div>

                  <span className="text-xs text-blue-400">
                    Today
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Employee completed task
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Dashboard Development
                    </p>
                  </div>

                  <span className="text-xs text-emerald-400">
                    Today
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Task marked as failed
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Testing & Bug Fixing
                    </p>
                  </div>

                  <span className="text-xs text-red-400">
                    Yesterday
                  </span>
                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}

export default AdminDashboard