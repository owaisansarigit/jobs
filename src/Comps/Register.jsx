// Register.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    experience: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();


    console.log("Username:", formData.email);
    console.log("Password:", formData.password);
    console.log("Name:", formData.name);
    console.log("Experience:", formData.experience);

    setFormData({
      email: "",
      password: "",
      name: "",
      experience: "",

    });
  };
  return (
    <div className="container mt-5 w-75">
      <h2>Register</h2>
      <div className="form-control px-5" style={{ backgroundColor: "#f3f6f9" }}>
        <form onSubmit={handleRegister}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          
          <div className="mb-3">
            <label htmlFor="experience" className="form-label">
              Experience
            </label>
            <input
              type="text"
              className="form-control"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-sm btn-primary">
            Register
          </button>
          <Link to={"/login"} className="btn btn-sm btn-success ms-5">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
