import React, { useState } from "react";
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
      <div className="full">
        <div className="left">
          <LeftNav />
        </div>
        <div className="right">
          <Right onShowJobForm={toggleJobForm} />
          {showJobForm && <CreateJobForm onClose={toggleJobForm} />}
          {!showJobForm && (
            <button onClick={toggleJobForm}>Show Job Form</button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
