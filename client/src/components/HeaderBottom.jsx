import React from "react";
import "./head.css";
import { Link } from "react-router-dom";

function HeaderBottom() {
  return (
    <div className="link-elements">
      <nav className="nav-list">
        <ol className="list-items">
          <li className="list-item-link">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item-link">
            <Link to="/explore">Explore</Link>
          </li>
          <li className="list-item-link">
            <Link to="/post">Posts</Link>
          </li>
          <li className="list-item-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="list-item-link">
            <Link to="/signup">Signup</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default HeaderBottom;
