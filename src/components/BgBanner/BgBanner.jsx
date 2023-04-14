import React from "react";
import "./BgBanner.css";

const BgBanner = (props) => {
  return (
    <div className="background-image">
      <h1>{props.title}</h1>
    </div>
  );
};

export default BgBanner;
