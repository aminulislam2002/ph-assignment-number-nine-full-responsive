import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css"

const Page404 = () => {
  return (
    <div className="page404-container">
      <div>
        <h1>404</h1>
        <h2>Page not Found!</h2>
        <h3>This url is not correct!</h3>
        <Link to="/">Go to home page.</Link>
      </div>
    </div>
  );
};

export default Page404;
