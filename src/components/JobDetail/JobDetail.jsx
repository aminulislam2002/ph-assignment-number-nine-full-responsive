import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./JobDetail.css";
import { addToDb } from "../Utilites/fakedb";
import BgBanner from "../BgBanner/BgBanner";

const JobDetail = () => {
  const jobs = useLoaderData();
  const { featureId } = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    const job = jobs.find((job) => job.id == featureId);
    // console.log(job);
    setDetail(job);
  }, [jobs, featureId]);

  const handleAddToAppliedComponent = (detail) => {
    addToDb(detail.id);
  };

  const title = "Jobs Details";

  return (
    <div>
      <BgBanner title={title}></BgBanner>
      {detail ? (
        <div className="detail-container">
          <div className="detail-info">
            <p>
              <span>Job Description:</span> {detail.jobDescription}
            </p>
            <p>
              <span>Job Responsibility:</span> {detail.jobResponsibility}
            </p>
            <p>
              <span>Educational Requirements:</span> <br /> {detail.educationalRequirements}
            </p>
            <p>
              <span>Experiences:</span> <br /> {detail.experiences}
            </p>
          </div>
          <div className="detail-card">
            <h3>Job Details</h3>
            <hr />
            <p>
              <span>Salary:</span> {detail.salary}
            </p>
            <p>
              <span>Job Title:</span> {detail.jobTitle}
            </p>
            <h3>Contact Information</h3>
            <hr />
            <p>
              <span>Phone: </span>
              {detail.contactInformation.phone}
            </p>
            <p>
              <span>Email: </span>
              {detail.contactInformation.email}
            </p>
            <p>
              <span>Address: </span>
              {detail.contactInformation.address}
            </p>
            <button onClick={() => handleAddToAppliedComponent(detail)} className="btn-apply btn">
              <Link>Apply Now</Link>
            </button>
          </div>
        </div>
      ) : (
        <p>Data not found!</p>
      )}
    </div>
  );
};

export default JobDetail;
