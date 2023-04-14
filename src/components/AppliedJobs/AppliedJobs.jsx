import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../Utilites/fakedb";
import { Link, useLoaderData } from "react-router-dom";
import "./AppliedJobs.css";
import BgBanner from "../BgBanner/BgBanner";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];

    for (const srtId in storedCart) {
      const id = parseInt(srtId);
      const addedJob = jobs.find((job) => job.id === id);
      if (addedJob) {
        const quantity = storedCart[id];
        addedJob.quantity = quantity;

        saveCart.push(addedJob);
      }
    }

    setAppliedJobs(saveCart);
  }, []);

  const title = "Applied Jobs";

  return (
    <div>
      <BgBanner title={title}></BgBanner>
      {appliedJobs.map((appliedJob) => (
        <div key={appliedJob.id}>
          <div className="cart-container">
            <img src={appliedJob.logo} alt="" />
            <div>
              <h3>{appliedJob.jobTitle}</h3>
              <p>{appliedJob.companyName}</p>
              <div className="btn-flex">
                <button className="btn-job-type">{appliedJob.remoteOrOnsite}</button>
                <button className="btn-job-type">{appliedJob.fulltimeOrPartTime}</button>
              </div>
              <div>
                <p>{appliedJob.location}</p>
                <p>{appliedJob.salary}</p>
              </div>
            </div>
            <button className="btn">
              <Link to={`/details/${appliedJob.id}`}>View Details</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
