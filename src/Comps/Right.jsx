import React from "react";
import Card from "./Card";

const Right = ({ onShowJobForm }) => {
  return (
    <div>
      <div className="right-top d-flex p-1 align-items-center">
        <div className="info d-flex flex-column p-2">
          <span className="yourorg">Your Organization</span>
          <span className="skill-genic ">Skill Genic</span>
        </div>
        <div className="for-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="h-50 my-3 mx-4">
        <h1>Active Jobs</h1>
        <button className="btn btn-sm btn-dark p-2" onClick={onShowJobForm}>
          Create Jobs
        </button>
      </div>
      <div className="cards px-5 py-3 d-flex flex-wrap gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Right;
