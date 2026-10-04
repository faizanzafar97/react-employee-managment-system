// ======================================================
// src/context/AuthProvider.jsx
// ======================================================

import React, { useEffect } from "react";
import { getLocalStorage } from "../uthils/localStorage.jsx";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = React.useState(null);

  useEffect(() => {
    const { employeesData, adminData } = getLocalStorage();

    setUserdata({
      employees: employeesData,
      admin: adminData,
    });
  }, []);

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;