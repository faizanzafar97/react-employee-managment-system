import React from "react";
import Header from "../others/header";
import CreateTask from "../others/createtask";
import AllTasks from "../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;