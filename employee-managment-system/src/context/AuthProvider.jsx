import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../uthils/localStorage.jsx";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const { employeesData, adminData } = getLocalStorage();

    setUserdata({
      employees: employeesData,
      admin: adminData,
    });
  }, []);

  const updateEmployees = (updatedEmployees) => {
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setUserdata((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));
  };

  const updateTaskStatus = (employeeId, taskIndex, status) => {
    setUserdata((prev) => {
      if (!prev) return prev;

      const updatedEmployees = prev.employees.map((employee) => {
        if (employee.id !== employeeId) {
          return employee;
        }

        const updatedTasks = employee.tasks.map((task, index) => {
          if (index !== taskIndex) {
            return task;
          }

          if (status === "active") {
            return {
              ...task,
              active: true,
              newTask: false,
              completed: false,
              failed: false,
            };
          }

          if (status === "completed") {
            return {
              ...task,
              active: false,
              newTask: false,
              completed: true,
              failed: false,
            };
          }

          if (status === "failed") {
            return {
              ...task,
              active: false,
              newTask: false,
              completed: false,
              failed: true,
            };
          }

          return task;
        });

        const newTaskCount = updatedTasks.filter(
          (task) => task.newTask
        ).length;

        const activeTaskCount = updatedTasks.filter(
          (task) => task.active
        ).length;

        const completedTaskCount = updatedTasks.filter(
          (task) => task.completed
        ).length;

        const failedTaskCount = updatedTasks.filter(
          (task) => task.failed
        ).length;

        return {
          ...employee,
          tasks: updatedTasks,
          taskCount: {
            newTask: newTaskCount,
            active: activeTaskCount,
            completed: completedTaskCount,
            failed: failedTaskCount,
          },
        };
      });

      localStorage.setItem(
        "employees",
        JSON.stringify(updatedEmployees)
      );

      return {
        ...prev,
        employees: updatedEmployees,
      };
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...userdata,
        updateEmployees,
        updateTaskStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;