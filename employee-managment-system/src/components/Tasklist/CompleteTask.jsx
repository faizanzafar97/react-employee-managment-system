import React from 'react'

const CompleteTask = () => {
  return (
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

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 transition-all duration-200 hover:bg-emerald-500/20 hover:text-emerald-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500/40">
            Mark as Complete
          </button>
        </div>

      </div>
  )
}

export default CompleteTask
