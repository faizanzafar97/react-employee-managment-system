// App.jsx

import React, { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  const authData = useContext(AuthContext);

  const [user, setUser] = React.useState(null);

  const handleLogin = (email, password) => {
    if (!authData) return;

    const admin = authData.admin?.find(
      (user) => user.email === email && user.password === password
    );

    if (admin) {
      console.log("Admin logged in");
      setUser(admin);
      return;
    }

    const employee = authData.employees?.find(
      (user) => user.email === email && user.password === password
    );

    if (employee) {
      console.log("Employee logged in");
      setUser(employee);
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
      ) : (
        <EmployeeDashboard />
      )}
    </div>
  );
};

export default App;