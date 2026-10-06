import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authdata = useContext(AuthContext);

  return (
    <div>
      {authdata?.employees?.map((elem, idx) => {
        return (
          <div key={idx}>
            <h2>faizan</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;