import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="leftnav bg-dark text-white h-100 ps-4">
      <h1 className="text-start pt-3">
        <i className="fa-brands fa-figma me-4"></i>Logo
      </h1>
      <div className="d-flex flex-column gap-1 mt-3 pe-4">
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-briefcase me-3"></i>
          Home<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-message me-3"></i>
          Chat<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-chart-line me-3"></i>
          Activities<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
      </div>
      <div className="d-flex flex-column mt-3 pe-4">
        <span className="anchead">RECRUITMENT</span>
        <Link to="/" className="pe-5">
          <i className="fa-brands fa-screenpal me-3"></i>
          Jobs<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-crown me-3"></i>
          Interviews<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-brands fa-hire-a-helper me-3"></i>
          New Hires<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
      </div>
      <div className="d-flex flex-column mt-3 pe-4">
        <span className="anchead">ORGANIZATION</span>
        <Link to="/" className="pe-5">
          <i className="fa-regular fa-building me-3"></i>
          Company Profile<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-church me-3"></i>
          Community<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-people-group me-3"></i>
          Team<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-toolbox me-3"></i>
          HR Tool Box<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-chart-column me-3"></i>
          Report<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
        <Link to="/" className="pe-5">
          <i className="fa-solid fa-gear me-3"></i>
          Settings<i className="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </Link>
      </div>
    </div>
  );
};

export default LeftNav;
