import React from "react";

const LeftNav = () => {
  return (
    <div className="bg-dark text-white h-100 ps-5">
      <h1 className="text-start pt-4 ps-5">
        <i class="fa-brands fa-figma me-5"></i>Logo
      </h1>
      <div className="d-flex flex-column gap-4 mt-4 px-2">
        <a href="/" className="px-5">
          <i class="fa-solid fa-briefcase me-5  "></i>
          Home<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-solid fa-message me-5"></i>
          Chat<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-solid fa-chart-line me-5"></i>
          Activities<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
      </div>
      <div className="d-flex flex-column gap-4 mt-4 px-2">
        <span className="anchead">RECRUITMENT</span>
        <a href="/" className="px-5">
          <i class="fa-brands fa-screenpal me-5"></i>
          Jobs<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-solid fa-crown me-5"></i>
          Interviews<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-brands fa-hire-a-helper me-5"></i>
          New Hires<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
      </div>
      <div className="d-flex flex-column gap-4 mt-4 px-2">
        <span className="anchead">ORGANIZATION</span>
        <a href="/" className="px-5">
          <i class="fa-regular fa-building me-5"></i>
          Company Profile<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-solid fa-church me-5"></i>
          Community<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-solid fa-people-group me-5"></i>
          Team<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-solid fa-toolbox me-5"></i>
          HR Tool Box<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-solid fa-chart-column me-5"></i>
          Report<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
        <a href="/" className="px-5">
          <i class="fa-solid fa-gear me-5"></i>
          Settings<i class="fa-solid fa-chevron-right ms-auto mr-3"></i>
        </a>
      </div>
    </div>
  );
};

export default LeftNav;
