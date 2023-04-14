import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-container">
      <div>
        <h3>Jobs Hunter</h3>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="applied">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div>
        <button className="btn">Star Applying</button>
      </div>
    </div>
  );
};

export default Header;
