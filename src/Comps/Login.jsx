import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);
    

    
    setFormData({ username: "", password: "" });
  };

  return (
    <div className="container mt-5 w-75 ">
      <h2>Login</h2>
      <div className="form-control px-5" style={{backgroundColor:"#f3f6f9"}}>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
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
          Login
        </button>
        <Link to={'/register'} className="btn btn-sm btn-success ms-5">Signup</Link>
      </form></div>
    </div>
  );
};

export default Login;
