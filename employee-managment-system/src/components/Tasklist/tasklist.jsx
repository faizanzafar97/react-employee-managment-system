// TaskList.jsx

import React from 'react'

const TaskList = () => {
  return (
    <div className="w-full max-h-128 overflow-y-auto scrollbar-hide space-y-4">

      {/* Task 1 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl">

        <div className="mb-4 flex items-center justify-between gap-4">

          <h3 className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-400">
            High
          </h3>

          <h4 className="text-xs font-medium text-slate-500">
            20 Feb 2024
          </h4>

        </div>

        <h2 className="text-lg font-semibold text-white">
          Make a Project
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eius est expedita, modi sint fugiat cupiditate.
        </p>

      </div>


      {/* Task 2 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl">

        <div className="mb-4 flex items-center justify-between gap-4">

          <h3 className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-400">
            Medium
          </h3>

          <h4 className="text-xs font-medium text-slate-500">
            22 Feb 2024
          </h4>

        </div>

        <h2 className="text-lg font-semibold text-white">
          Update Employee Dashboard
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eius est expedita, modi sint fugiat cupiditate.
        </p>

      </div>


      {/* Task 3 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl">

        <div className="mb-4 flex items-center justify-between gap-4">

          <h3 className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-400">
            Normal
          </h3>

          <h4 className="text-xs font-medium text-slate-500">
            25 Feb 2024
          </h4>

        </div>

        <h2 className="text-lg font-semibold text-white">
          Complete React Practice
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eius est expedita, modi sint fugiat cupiditate.
        </p>

      </div>


      {/* Task 4 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl">

        <div className="mb-4 flex items-center justify-between gap-4">

          <h3 className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-400">
            High
          </h3>

          <h4 className="text-xs font-medium text-slate-500">
            28 Feb 2024
          </h4>

        </div>

        <h2 className="text-lg font-semibold text-white">
          Finish Employee Management System
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eius est expedita, modi sint fugiat cupiditate.
        </p>

      </div>

    </div>
  )
}

export default TaskList