import React from "react";

const LeftNav = () => {
  return (
    <div className="bg-dark text-white h-100 ps-5">
      <h1 className="text-start pt-3">Logo</h1>
      <div className="d-flex flex-column gap-4 mt-4 px-2">
        <a href="/">Home</a>
        <a href="/">Chat</a>
        <a href="/">Activities</a>
      </div>
      <div className="d-flex flex-column gap-4 mt-4 px-2">
        <span className="anchead">RECRUITMENT</span>
        <a href="/">Jobs</a>
        <a href="/">Interviews</a>
        <a href="/">New Hires</a>
      </div>
      <div className="d-flex flex-column gap-4 mt-4 px-2">
        <span className="anchead">ORGANIZATION</span>
        <a href="/">Company Profile</a>
        <a href="/">Community</a>
        <a href="/">Team</a>
        <a href="/">HR Tool Box</a>
        <a href="/">Report</a>
        <a href="/">Settings</a>
      </div>
    </div>
  );
};

export default LeftNav;
