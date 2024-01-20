// CreateJobForm.jsx

import React, { useState } from "react";
import "./CreateJobForm.css"; // Import your CSS file for modal styling

const CreateJobForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // ... (same as before)
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="job-form-container">
        <div className="header-container">
          <h2>Create A Job</h2>
          <button className="close-btn btn" onClick={onClose}>
            <i class="fa-solid fa-xmark" style={{ fontSize: "2rem" }}></i>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <>
              <div id="job-s">
                <div id="job-s-1">
                  <button type="button" onClick={handleNext} className="btn ">
                    <p>
                      <i
                        class="fa-solid fa-clipboard-list"
                        style={{ fontSize: "6rem", color: "blue" }}
                      ></i>
                    </p>
                    Create Job With AI
                  </button>
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="job-s-container">
                <div className="jobs-2">
                  <p>
                    A job represents a new opening, an open position, or a
                    vacancy listing. Creating a job will allow you to add
                    candidates to that job and advertise it on your career page
                    and job boards.
                  </p>
                </div>
                <form action="" className="form-control">
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Position Name.
                      </label>
                      <input
                        type="text"
                        placeholder="Software Engineer"
                        className="form-control"
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="">Company Name.</label>
                      <input
                        type="text"
                        placeholder="Amir"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Job Pipline
                      </label>
                      <input
                        type="text"
                        placeholder="default job pipline"
                        className="form-control"
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="">Add Location.</label>
                      <input
                        type="text"
                        placeholder="Indore"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Cotract Deatils.
                      </label>
                      <input
                        type="text"
                        placeholder="Full Time"
                        className="form-control"
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="">Add Minimum Salary.</label>
                      <input
                        type="text"
                        placeholder="10000"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Add Maximum Salary.
                      </label>
                      <input
                        type="text"
                        placeholder="10000"
                        className="form-control"
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="">Currency.</label>
                      <input
                        type="text"
                        placeholder="RS"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Select Frequency.
                      </label>
                      <input
                        type="text"
                        placeholder="Monthly"
                        className="form-control"
                      />
                    </div>
                    <div className="inputsss"></div>
                  </div>
                </form>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-sm btn-dark mt-3"
                  onClick={handleNext}
                >
                  Save & Next
                </button>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="job-s-container">
                <div className="jobs-2">
                  <p>
                    A job represents a new opening, an open position, or a
                    vacancy listing. Creating a job will allow you to add
                    candidates to that job and advertise it on your career page
                    and job boards.
                  </p>
                </div>
                <form action="" className="form-control">
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Skill Required.{" "}
                        <button href="/" className="btn btn-sm btn-primary">
                          {" "}
                          Suggest with AI
                        </button>
                      </label>
                      <input
                        type="text"
                        placeholder="Software Engineer"
                        className="form-control"
                      />
                    </div>
                    <div className="inputs"></div>
                  </div>
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Intern Responsibilities.
                        <button href="/" className="btn btn-sm btn-primary">
                          suggest with AI
                        </button>
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="50"
                        rows="0"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="inputs"></div>
                  </div>
                </form>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-sm btn-dark mt-3"
                  onClick={handleNext}
                >
                  Save & Next
                </button>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <div className="job-s-container">
                <div className="jobs-2">
                  <p>
                    A job represents a new opening, an open position, or a
                    vacancy listing. Creating a job will allow you to add
                    candidates to that job and advertise it on your career page
                    and job boards.
                  </p>
                </div>
                <div className="test-rounds">
                  <div className="round">
                    <p> Round 1</p>
                    <input type="text" placeholder="Skill Assesment" disabled />
                  </div>
                  <div className="round">
                    <p> Round 1</p>
                    <input type="text" placeholder="Skill Assesment" disabled />
                  </div>
                  <div className="round">
                    <p> Round 1</p>
                    <input type="text" placeholder="Skill Assesment" disabled />
                  </div>
                  <div>
                    <button>Add Round </button>
                  </div>
                </div>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  className="btn btn-sm btn-dark mt-3"
                  onClick={handleNext}
                >
                  Save & Next
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateJobForm;
