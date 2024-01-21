import React, { useEffect, useState } from "react";
import Card from "./Card";

const Right = ({ onShowJobForm }) => {
  const [jobs, setJobs] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      let res = await fetch("http://localhost:3000/");
      let data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    }
  };

  return (
    <div>
      <div className="right-top d-flex p-1 align-items-center">
        <div className="info d-flex flex-column align-items-center p-2">
          <span className="yourorg">Your Organization</span>
          <span className="skill-genic">Skill Genic</span>
        </div>
        <div className="for-search ms-4 d-flex justify-content-center align-items-center  ">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="search" />
        </div>
        <div className="for-profile d-flex justify-content-end  w-50 gap-2 px-4">
          <div>
            <i className="fa-regular fa-bell fs-5 pe-4"></i>
          </div>
          <div>
            <i className="fa-regular fa-user fs-5 pe-4"></i>
          </div>
        </div>
      </div>
      <div className={`d-flex justify-content-between align-items-center p-4`}>
        <h1>Active Jobs</h1>
        <div className="form-check form-switch ms-auto me-2">
          <label className="form-check-label" htmlFor="toggleForJobs">
            Active Jobs
          </label>
          <input
            className="form-check-input fs-5"
            type="checkbox"
            role="switch"
            id="toggleForJobs"
            checked={isToggle}
            onChange={handleToggle}
          />

          <style>
            {`
              .form-switch input:checked {
                background-color: black !important;
              }

              .form-switch input:checked + .form-check-label::before {
                background-color: black !important;
              }
            `}
          </style>
        </div>

        <button className="btn btn-sm btn-dark p-2" onClick={onShowJobForm}>
          Create Jobs
        </button>
      </div>
      <div className="cards px-5 py-3 d-flex flex-wrap gap-3">
        {jobs.length > 0 ? (
          jobs.map((job) => <Card key={job._id} job={job} />)
        ) : (
          <h4>No jobs available</h4>
        )}
      </div>
    </div>
  );
};

export default Right;
