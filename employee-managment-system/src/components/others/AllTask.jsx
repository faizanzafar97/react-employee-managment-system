import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authdata = useContext(AuthContext);

  return (
    <div className="w-full space-y-4 pr-2">

      {/* Header */}
      <div className="grid grid-cols-5 gap-4 rounded-xl border border-slate-800 bg-slate-900 px-5 py-4">
        <h2 className="text-sm font-semibold text-slate-300">
          Employee Name
        </h2>

        <h3 className="text-sm font-semibold text-slate-300">
          New Tasks
        </h3>

        <h3 className="text-sm font-semibold text-slate-300">
          Active Tasks
        </h3>

        <h3 className="text-sm font-semibold text-slate-300">
          Completed
        </h3>

        <h3 className="text-sm font-semibold text-slate-300">
          Failed
        </h3>
      </div>

      {/* Employees */}
      <div className="w-full max-h-128 space-y-3 overflow-y-auto scrollbar-hide">
        {authdata?.employees?.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-5 gap-4 rounded-xl border border-slate-800 bg-slate-900 px-5 py-5 shadow-lg transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/80"
            >
              {/* Employee */}
              <div>
                <h2 className="font-semibold text-white">
                  {elem.name}
                </h2>
              </div>

              {/* New Tasks */}
              <div>
                <h3 className="font-semibold text-blue-400">
                  {elem.taskCount?.newTask || 0}
                </h3>
              </div>

              {/* Active Tasks */}
              <div>
                <h3 className="font-semibold text-yellow-400">
                  {elem.taskCount?.active || 0}
                </h3>
              </div>

              {/* Completed */}
              <div>
                <h3 className="font-semibold text-green-400">
                  {elem.taskCount?.completed || 0}
                </h3>
              </div>

              {/* Failed */}
              <div>
                <h3 className="font-semibold text-red-400">
                  {elem.taskCount?.failed || 0}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AllTask;