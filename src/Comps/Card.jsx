import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card p-3 ">
        <div className="card-title fs-5">Senior Product Designer</div>
        <div className="card-text">
          <i class="fa-solid fa-location-dot me-4"></i>Indore,MP India
        </div>
        <div className="card-text">
          <i class="fa-solid fa-tag me-4"></i>10000 - 20000
        </div>
        <div className="card-text">
          <i class="fa-solid fa-link me-4"></i>2 Years Experiance
        </div>
        <div className="d-flex justify-centent-center gap-2 mt-4">
          <button
            style={{ backgroundColor: "#5956e9" }}
            className="btn btn-sm btn-primary mybtn"
          >
            Application
          </button>
          <button
            style={{ backgroundColor: "#ff8600" }}
            className="btn btn-sm btn-primary mybtn"
          >
            12 In Process
          </button>
          <button
            style={{ backgroundColor: "#3cd856" }}
            className="btn btn-sm btn-primary mybtn"
          >
            05 Hired
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
