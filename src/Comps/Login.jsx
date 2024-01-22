import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  let url = "http://localhost:3000";
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      const data = await response.json();
      if (response.ok) {
        console.log(data.msg);
      } else {
        console.error(data.error || "Login failed");
      }
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="container mt-5 w-75 ">
      <h2>Login</h2>
      <div className="form-control px-5" style={{ backgroundColor: "#f3f6f9" }}>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email.
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
          <Link to={"/register"} className="btn btn-sm btn-success ms-5">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
