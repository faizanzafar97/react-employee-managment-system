import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { employees, updateEmployees } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription: description,
      taskDate: date,
      category,
    };

    const updatedEmployees = employees.map((employee) => {
      if (employee.id === Number(assignTo)) {
        return {
          ...employee,

          tasks: [
            ...(employee.tasks || []),
            newTask,
          ],

          taskCount: {
            ...employee.taskCount,
            newTask:
              (employee.taskCount?.newTask || 0) + 1,
          },
        };
      }

      return employee;
    });

    updateEmployees(updatedEmployees);

    console.log("Task Created:", newTask);

    setTaskTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="w-full bg-slate-950 text-white">
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">

        <section className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Admin Dashboard
          </h2>

          <p className="mt-2 text-slate-400">
            Create and assign tasks to your employees.
          </p>
        </section>

        <section className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

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
                required
                value={taskTitle}
                onChange={(e) =>
                  setTaskTitle(e.target.value)
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

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
                placeholder="Detailed description..."
                required
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

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
                required
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="assignTo"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Assign To
              </label>

              <select
                id="assignTo"
                required
                value={assignTo}
                onChange={(e) =>
                  setAssignTo(e.target.value)
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-300 outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Employee
                </option>

                {employees?.map((employee) => (
                  <option
                    key={employee.id}
                    value={employee.id}
                  >
                    {employee.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Category
              </label>

              <select
                id="category"
                required
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-300 outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Category
                </option>

                <option value="Design">
                  Design
                </option>

                <option value="Development">
                  Development
                </option>

                <option value="Testing">
                  Testing
                </option>

                <option value="Marketing">
                  Marketing
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Create Task
            </button>

          </form>
        </section>
      </main>
    </div>
  );
};

export default CreateTask;