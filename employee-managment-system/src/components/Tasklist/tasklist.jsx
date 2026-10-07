import React from "react";

const TaskList = ({ data }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* New Tasks */}
      <div className="rounded-2xl border border-blue-500/20 bg-slate-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40">
        <h2 className="text-4xl font-bold text-blue-400">
          {data?.taskCount?.newTask || 0}
        </h2>

        <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
          New Tasks
        </h3>
      </div>

      {/* Accepted Tasks */}
      <div className="rounded-2xl border border-amber-500/20 bg-slate-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/40">
        <h2 className="text-4xl font-bold text-amber-400">
          {data?.taskCount?.active || 0}
        </h2>

        <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Accepted Tasks
        </h3>
      </div>

      {/* Completed Tasks */}
      <div className="rounded-2xl border border-emerald-500/20 bg-slate-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40">
        <h2 className="text-4xl font-bold text-emerald-400">
          {data?.taskCount?.completed || 0}
        </h2>

        <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Completed Tasks
        </h3>
      </div>

      {/* Failed Tasks */}
      <div className="rounded-2xl border border-red-500/20 bg-slate-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-red-500/40">
        <h2 className="text-4xl font-bold text-red-400">
          {data?.taskCount?.failed || 0}
        </h2>

        <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Failed Tasks
        </h3>
      </div>

    </div>
  );
};

export default TaskList;