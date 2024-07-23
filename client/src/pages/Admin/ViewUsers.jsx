import React from "react";
import { useState, useEffect } from "react";
import "./admin.css";

function ViewUsers() {
  const [names, setName] = useState([]);
  const handleViewusers = async (req, res) => {
    try {
      const response = await fetch(`http://localhost:3000/user/all`, {
        credentials: "include",
      });
      // console.log(response)
      const data = await response.json();
      // console.log(data)
      setName(data);
      console.log(names);
    } catch (e) {
      res.status(500).json({ success: false, message: "error getting users" });
    }
  };
  useEffect(() => {
    handleViewusers();
  }, []);

  return (
    <div className="viewUers-main">
      <h2>Hey there! Admin here are our Users.</h2>
      {names.map((name) => (
        <div className="users-container" key={name.id}>
          <h2>
            {name.firstName} {name.lastName}
          </h2>
          <p>{name.email}</p>
          <p>{name.phoneNumber} </p>
          <p>{name.role} </p>
        </div>
      ))}
    </div>
  );
}

export default ViewUsers;
