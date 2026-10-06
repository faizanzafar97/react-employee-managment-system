// createtask.jsx

import React from "react";

const CreateTask = ({ handleSubmit }) => {
  return (
    <div>
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

            {/* Card Header */}
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

            {/* Form */}
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
                  name="taskTitle"
                  type="text"
                  placeholder="Make a UI design"
                  required
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
                  name="description"
                  rows="5"
                  placeholder="Detailed description of task..."
                  required
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
                  name="date"
                  type="date"
                  required
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
                  name="assignTo"
                  defaultValue=""
                  required
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
                  name="category"
                  defaultValue=""
                  required
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

        </div>
      </main>
    </div>
  );
};

export default CreateTask;