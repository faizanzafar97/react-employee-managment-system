import React from "react";

const Failedtask = ({ data }) => {
  return (
    <div className="rounded-2xl border border-red-500/20 bg-slate-900 p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="rounded-full bg-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-300">
          {data.category}
        </h3>

        <h4 className="text-xs font-medium text-slate-500">
          {data.taskDate}
        </h4>
      </div>

      <h2 className="text-lg font-semibold text-white">
        {data.taskTitle}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {data.taskDescription}
      </p>

      <div className="mt-5">
        <button
          type="button"
          disabled
          className="cursor-default rounded-lg bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400"
        >
          Failed Task
        </button>
      </div>
    </div>
  );
};

export default Failedtask;