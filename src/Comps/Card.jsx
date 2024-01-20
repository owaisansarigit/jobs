import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card p-3 ">
        <div className="card-title fs-5">Senior Product Designer</div>
        <div className="card-text">Indore,MP India</div>
        <div className="card-text">10000 - 20000</div>
        <div className="card-text">2 Years Experiance</div>
        <div className="d-flex justify-centent-center gap-2 mt-4">
          <button style={{backgroundColor:"blue"}} className="btn btn-sm btn-primary mybtn">Application</button>
          <button style={{backgroundColor:"orange"}} className="btn btn-sm btn-primary mybtn">12 In Process</button>
          <button style={{backgroundColor:"green"}} className="btn btn-sm btn-primary mybtn">05 Hired</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
