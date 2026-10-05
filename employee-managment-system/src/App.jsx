// App.jsx - COMPLETE FIXED CODE

import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  const authData = useContext(AuthContext);

  const [loggedInUser, setLoggedInUser] = React.useState(null);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    if (authData) {
      const storedUser = JSON.parse(
        localStorage.getItem("loggedInUser")
      );

      if (storedUser) {
        setUser(storedUser);
        setLoggedInUser(storedUser);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (!authData) return;

    // ADMIN LOGIN
    const admin = authData.admin?.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (admin) {
      console.log("Admin logged in");

      setUser(admin);
      setLoggedInUser(admin);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(admin)
      );

      return;
    }

    // EMPLOYEE LOGIN
    const employee = authData.employees?.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (employee) {
      console.log("Employee logged in");

      setUser(employee);
      setLoggedInUser(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(employee)
      );

      return;
    }

    alert("Invalid credentials");
  };

  if (!authData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard />
      ) : user.role === "employee" ? (
        <EmployeeDashboard data={loggedInUser} />
      ) : null}
    </div>
  );
};

export default App;