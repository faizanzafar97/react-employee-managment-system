import React from "react";
import AccepetTask from "../Tasklist/AccepetTask";
import CompleteTask from "../Tasklist/CompleteTask";
import Failedtask from "../Tasklist/Failedtask";
import NewTask from "../Tasklist/NewTask";

const TaskList = ({ data }) => {
  return (
    <div className="w-full space-y-4">
      {data?.tasks?.map((task, index) => {
        if (task.active) {
          return (
            <AccepetTask
              key={index}
              data={task}
              taskIndex={index}
              employeeId={data.id}
            />
          );
        }

        if (task.newTask) {
          return (
            <NewTask
              key={index}
              data={task}
              taskIndex={index}
              employeeId={data.id}
            />
          );
        }

        if (task.completed) {
          return (
            <CompleteTask
              key={index}
              data={task}
              taskIndex={index}
              employeeId={data.id}
            />
          );
        }

        if (task.failed) {
          return (
            <Failedtask
              key={index}
              data={task}
              taskIndex={index}
              employeeId={data.id}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;