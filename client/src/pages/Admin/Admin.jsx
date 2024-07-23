import React from "react";
import ViewUsers from "./ViewUsers.jsx";
import VievPosts from "./VievPosts.jsx";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="main">
      <p>Welcome to the admin</p>
      <Link to="/viewUsers">View Users</Link>
      <Link to="/viewPosts">View Posts</Link>
    </div>
  );
}

export default Admin;
