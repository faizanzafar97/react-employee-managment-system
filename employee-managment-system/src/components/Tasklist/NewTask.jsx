import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, taskIndex, employeeId }) => {
  const { updateTaskStatus } = useContext(AuthContext);

  const handleAccept = () => {
    updateTaskStatus(employeeId, taskIndex, "active");
  };

  const handleDecline = () => {
    updateTaskStatus(employeeId, taskIndex, "failed");
  };

  return (
    <div className="rounded-2xl border border-blue-500/20 bg-slate-900 p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-400">
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

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleAccept}
          className="rounded-lg bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          Accept Task
        </button>

        <button
          type="button"
          onClick={handleDecline}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-500/40"
        >
          Decline Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;