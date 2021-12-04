import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-link">
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <div className="nav-link">
        <Link to="project">
          <h3>Projects</h3>
        </Link>
      </div>
      <div className="nav-link">
        <Link to="contact">
          <h3>Contact</h3>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
