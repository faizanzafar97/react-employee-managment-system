import React from 'react'

const Failedtask = () => {
  return (
    <div>
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

       <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-lg bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition-all duration-200 hover:bg-red-500/20 hover:text-red-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/40">
            Failed Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default Failedtask
