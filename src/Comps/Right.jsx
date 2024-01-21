import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Card from "./Card";
import Login from "./Login";
import TopNav from "./TopNav";
import Register from "./Register";
// require("dotenv").config();
// import dotenv from 'dotenv';
// dotenv.config();

const Right = ({ onShowJobForm }) => {
  const [jobs, setJobs] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      let res = await fetch("https://jobwebsite-ejbh.onrender.com/");
      // let res = await fetch(process.env.REACT_APP_API);
      let data = await res.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    }
  };

  return (
    <div>
      <div>
        <TopNav onShowJobForm={onShowJobForm} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div
                className={`d-flex justify-content-between align-items-center p-4`}
              >
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

                <button
                  className="btn btn-sm btn-dark p-2"
                  onClick={onShowJobForm}
                >
                  Create Jobs
                </button>
              </div>
              <div className="cards px-5 py-3 d-flex flex-wrap gap-3">
                {loading ? (
                  <div>
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : jobs.length > 0 ? (
                  jobs.map((job) => <Card key={job._id} job={job} />)
                ) : (
                  <h4>No jobs available</h4>
                )}
              </div>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Right;
