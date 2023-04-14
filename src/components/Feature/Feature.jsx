import "./Feature.css";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  const { id, jobTitle, logo, companyName, salary, remoteOrOnsite, location } = feature;

  return (
    <div className="feature">
      <div className="feature-info">
        <img src={logo} alt="" />
        <h1>{jobTitle}</h1>
        <h3>{companyName}</h3>
        <h4>
          <span>Job_Type:</span> {remoteOrOnsite}
        </h4>
        <p>
          <span>Location:</span> {location}
        </p>
        <p>
          <span>Salary:</span> {salary}
        </p>
        <button className="btn">
          <Link to={`/details/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Feature;
