import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateJobForm.css";

const CreateJobForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    positionName: "",
    companyName: "",
    jobPipline: "",
    location: "",
    contractDetails: "",
    minSalary: "",
    maxSalary: "",
    currency: "",
    frequency: "",
    skillRequired: "",
    internResponsibilities: "",
    skillAssessment1: "",
    skillAssessment2: "",
    skillAssessment3: "",
    skillsToCheck: "",
    platformQualification: "",
  });
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/createjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    onClose();
    navigate("/");
  };

  return (
    <div className="modal-overlay">
      <div className="job-form-container">
        <div className="header-container">
          <h2>Create A Job</h2>
          <button className="close-btn btn" onClick={onClose}>
            <i className="fa-solid fa-xmark" style={{ fontSize: "2rem" }}></i>
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
                        className="fa-solid fa-clipboard-list"
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
                <span className="form-control">
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Position Name.
                      </label>
                      <input
                        type="text"
                        name="positionName"
                        placeholder="Software Engineer"
                        className="form-control"
                        value={formData.positionName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="">Company Name.</label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Amir"
                        className="form-control"
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Job Pipeline
                      </label>
                      <input
                        type="text"
                        name="jobPipline"
                        placeholder="default job pipeline"
                        className="form-control"
                        value={formData.jobPipline}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="">Add Location.</label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Indore"
                        className="form-control"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="inputs-out">
                    <div className="inputs">
                      <label htmlFor="" className="label">
                        Contract Details.
                      </label>
                      <input
                        type="text"
                        name="contractDetails"
                        placeholder="Full Time"
                        className="form-control"
                        value={formData.contractDetails}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="">Add Minimum Salary.</label>
                      <input
                        type="text"
                        name="minSalary"
                        placeholder="10000"
                        className="form-control"
                        value={formData.minSalary}
                        onChange={handleInputChange}
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
                        name="maxSalary"
                        placeholder="10000"
                        className="form-control"
                        value={formData.maxSalary}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="inputs">
                      <label htmlFor="">Currency.</label>
                      <input
                        type="text"
                        name="currency"
                        placeholder="RS"
                        className="form-control"
                        value={formData.currency}
                        onChange={handleInputChange}
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
                        name="frequency"
                        placeholder="Monthly"
                        className="form-control"
                        value={formData.frequency}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="inputsss"></div>
                  </div>
                </span>
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
                <span className="form-control">
                  <div className="inputs-out">
                    <div className="inputs ">
                      <label htmlFor="" className="label">
                        Skill Required.{" "}
                        <button href="/" className="btn btn-sm btn-primary">
                          {" "}
                          Suggest with AI
                        </button>
                      </label>
                      <input
                        type="text"
                        name="skillRequired"
                        placeholder="Software Engineer"
                        className="form-control "
                        value={formData.skillRequired}
                        onChange={handleInputChange}
                      />
                    </div>
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
                        name="internResponsibilities"
                        id=""
                        cols="50"
                        rows="0"
                        className="form-control"
                        value={formData.internResponsibilities}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </span>
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
                    <input
                      type="text"
                      name="skillAssessment1"
                      placeholder="Skill Assessment"
                      disabled
                      value={formData.skillAssessment1}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="round">
                    <p> Round 2</p>
                    <input
                      type="text"
                      name="skillAssessment2"
                      placeholder="Skill Assessment"
                      disabled
                      value={formData.skillAssessment2}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="round">
                    <p> Round 3</p>
                    <input
                      type="text"
                      name="skillAssessment3"
                      placeholder="Skill Assessment"
                      disabled
                      value={formData.skillAssessment3}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex addround">
                    <button
                      className="btn btn-sm btn-dark rounded-4 p-3"
                      onClick={handleNext}
                    >
                      Add Round
                    </button>
                  </div>
                </div>

                <div className="inputs-out">
                  <div className="inputs">
                    <label htmlFor="" className="label">
                      Kindly Check Skills.
                    </label>
                    <input
                      type="text"
                      name="skillsToCheck"
                      placeholder="SEO & SEM"
                      className="form-control"
                      value={formData.skillsToCheck}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Any Platform or Qualification.</label>
                    <input
                      type="text"
                      name="platformQualification"
                      placeholder="Yes"
                      className="form-control"
                      value={formData.platformQualification}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="button-container">
                <button type="submit" className="btn btn-sm btn-dark mt-3">
                  Submit
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
