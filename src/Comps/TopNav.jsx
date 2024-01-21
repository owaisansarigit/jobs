import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div className="right-top d-flex p-1 align-items-center">
        <div className="info d-flex flex-column align-items-center p-2">
          <span className="yourorg">Your Organization</span>
          <span className="skill-genic">Skill Genic</span>
        </div>
        <div className="for-search ms-4 d-flex justify-content-center align-items-center  ">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="search" />
        </div>
        <div className="d-flex justify-content-end  w-100 gap-2">
          <Link className="btn btn-sm btn-outline-primary" to={"/"}>
            Home
          </Link>
          <Link className="btn btn-sm btn-outline-info" to={"/login"}>
            Login/SignUp
          </Link>
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
    </>
  );
};

export default TopNav;
