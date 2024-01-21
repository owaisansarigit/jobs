import React from "react";

const LeftNav = () => {
  return (
    <div className="leftnav bg-dark text-white h-100 ps-4">
      <h1 className="text-start pt-3">
        <i class="fa-brands fa-figma me-4"></i>Logo
      </h1>
      <div className="d-flex flex-column gap-1 mt-3 pe-4">
        <a href="/" className="pe-5">
          <i class="fa-solid fa-briefcase me-3"></i>
          Home<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-solid fa-message me-3"></i>
          Chat<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-solid fa-chart-line me-3"></i>
          Activities<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
      </div>
      <div className="d-flex flex-column gap-4 mt-3 pe-4">
        <span className="anchead">RECRUITMENT</span>
        <a href="/" className="pe-5">
          <i class="fa-brands fa-screenpal me-3"></i>
          Jobs<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-solid fa-crown me-3"></i>
          Interviews<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-brands fa-hire-a-helper me-3"></i>
          New Hires<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
      </div>
      <div className="d-flex flex-column gap-4 mt-3 pe-4">
        <span className="anchead">ORGANIZATION</span>
        <a href="/" className="pe-5">
          <i class="fa-regular fa-building me-3"></i>
          Company Profile<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-solid fa-church me-3"></i>
          Community<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-solid fa-people-group me-3"></i>
          Team<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-solid fa-toolbox me-3"></i>
          HR Tool Box<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-solid fa-chart-column me-3"></i>
          Report<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="pe-5">
          <i class="fa-solid fa-gear me-3"></i>
          Settings<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
      </div>
    </div>
  );
};

export default LeftNav;
