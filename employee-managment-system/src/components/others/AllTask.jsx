// AllTask.jsx

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees } = useContext(AuthContext);

  return (
    <div className="w-full space-y-4 px-4 pb-8 sm:px-6 lg:px-8">

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

      {/* Employee List */}
      <div className="max-h-128 w-full space-y-3 overflow-y-auto">

        {employees?.map((employee) => {

          const tasks = employee.tasks || [];

          const newTasks = tasks.filter(
            (task) => task.newTask === true
          ).length;

          const activeTasks = tasks.filter(
            (task) => task.active === true
          ).length;

          const completedTasks = tasks.filter(
            (task) => task.completed === true
          ).length;

          const failedTasks = tasks.filter(
            (task) => task.failed === true
          ).length;

          return (
            <div
              key={employee.id}
              className="grid grid-cols-5 gap-4 rounded-xl border border-slate-800 bg-slate-900 px-5 py-5 shadow-lg transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/80"
            >

              {/* Employee Name */}
              <div>
                <h2 className="font-semibold text-white">
                  {employee.name}
                </h2>
              </div>

              {/* New Tasks */}
              <div>
                <h3 className="font-semibold text-blue-400">
                  {newTasks}
                </h3>
              </div>

              {/* Active Tasks */}
              <div>
                <h3 className="font-semibold text-yellow-400">
                  {activeTasks}
                </h3>
              </div>

              {/* Completed */}
              <div>
                <h3 className="font-semibold text-green-400">
                  {completedTasks}
                </h3>
              </div>

              {/* Failed */}
              <div>
                <h3 className="font-semibold text-red-400">
                  {failedTasks}
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