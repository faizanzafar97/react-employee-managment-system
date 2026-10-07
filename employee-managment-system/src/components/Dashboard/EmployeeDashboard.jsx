import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Header from "../others/header";
import TaskList from "../others/tasklistno";
import TaskListCards from "../Tasklist/tasklist";

const EmployeeDashboard = (props) => {
  const { employees } = useContext(AuthContext);

  const employee = employees?.find(
    (item) => item.id === props.data?.id
  );

  if (!employee) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading employee data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header
        changeUser={props.changeUser}
        data={employee}
      />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold">
          Employee Dashboard
        </h1>

        <TaskList data={employee} />

        <div className="mt-8">
          <TaskListCards data={employee} />
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;