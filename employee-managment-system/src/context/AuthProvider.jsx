// AuthProvider.jsx

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

  return (
    <AuthContext.Provider
      value={{
        ...userdata,
        updateEmployees,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;