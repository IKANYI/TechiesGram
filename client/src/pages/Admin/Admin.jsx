import React from "react";
import { Link } from "react-router-dom";
import VievPosts from "./VievPosts.jsx";
import ViewUsers from "./ViewUsers.jsx";

function Admin() {
  return (
    <div className="master">
      <div className="main">
        <div className="links">
          <p>Welcome to the admin</p>
          <Link to="/viewUsers">View Users</Link>
          <Link to="/viewPosts">View Posts</Link>
        </div>
      </div>
      <div className="components">
        <VievPosts />
      </div>
      <div className="components">
        <ViewUsers />
      </div>
    </div>
  );
}

export default Admin;
