import React from "react";
import bannerimg from "../../assets/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-info">
        <h1>
          One Step Closer To Your <br /> <span className="dream-job">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all
          your job application from start to finish.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div>
        <img className="banner-img" src={bannerimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
