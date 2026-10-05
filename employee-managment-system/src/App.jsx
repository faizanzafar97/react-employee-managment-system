

import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  const authData = useContext(AuthContext);

  const [loggedInUserData, setLoggedInUserData] = React.useState(null);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const loggedinUser = localStorage.getItem("loggedInUser");

    if (loggedinUser) {
      const userdata = JSON.parse(loggedinUser);

      setLoggedInUserData(userdata);
      setUser(userdata);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!authData) return;

    // =========================
    // ADMIN LOGIN
    // =========================

    const admin = authData.admin?.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (admin) {
      console.log("Admin logged in");

      setUser(admin);
      setLoggedInUserData(admin);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(admin)
      );

      return;
    }

    // =========================
    // EMPLOYEE LOGIN
    // =========================

    const employee = authData.employees?.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (employee) {
      console.log("Employee logged in");

      setUser(employee);
      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(employee)
      );

      return;
    }

    alert("Invalid credentials");
  };

  // =========================
  // LOADING
  // =========================

  if (!authData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  // =========================
  // DASHBOARD
  // =========================

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard />
      ) : user.role === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </div>
  );
};

export default App;