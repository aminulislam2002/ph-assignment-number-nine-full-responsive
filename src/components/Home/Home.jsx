import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";
import Feature from "../Feature/Feature";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("job-category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const features = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <section className="job-category-section">
        <div className="job-category-title">
          <h1>Job Category List</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>

        <div className="job-category-container">
          {category.map((job) => (
            <JobCategory key={job.id} job={job}></JobCategory>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-title">
          <h1>Featured Jobs</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>

        <div className="feature-category-container">
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature}></Feature>
          ))}
        </div>

        <div className="see-all-jobs">
          <button className="btn">See All Jobs</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
