import React from "react";
import "./JobCategory.css";

const JobCategory = ({ job }) => {
  const { id, name, image, available_jobs } = job;
  return (
    <div className="job-category">
      <div>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{available_jobs}</p>
      </div>
    </div>
  );
};

export default JobCategory;
