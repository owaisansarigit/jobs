import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftNav from "./Comps/LeftNav";
import Right from "./Comps/Right";
import CreateJobForm from "./Comps/CreateJobForm";
import "./App.css";

const App = () => {
  const [showJobForm, setShowJobForm] = useState(false);

  const toggleJobForm = () => {
    setShowJobForm(!showJobForm);
  };

  return (
    <>
      <Router>
        <div className="full">
          <div className="left">
            <LeftNav />
          </div>
          <div className="right">
            <Right onShowJobForm={toggleJobForm} />
            {showJobForm && <CreateJobForm onClose={toggleJobForm} />}
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
