import React, { useState } from "react"; // Step 1: Import useState
import { useNavigate, useLocation } from "react-router-dom";
import "./JobType.css";

const JobType = () => {
  const navigate = useNavigate();
  // Step 2: Initialize jobCard state
  const [jobCard, setJobCard] = useState({
    dateAndTime: "",
    customerFirstName: "",
    customerLastName: "",
    phone: "",
    email: "",
    jobtype: "",
  });

  // Destructure the state Data from OpenJob
  const location = useLocation();
  const { dateAndTime, customerFirstName, customerLastName, phone, email } =
    location.state || {}; // Destructure the state

  function JobTypeSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const jobtype = data.get("jobtype");

    // Step 3: Update jobCard state
    const updatedJobCard = {
      ...jobCard,
      dateAndTime: dateAndTime,
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      phone: phone,
      email: email,
      jobtype: jobtype,
    };
    setJobCard(updatedJobCard);

    console.log(updatedJobCard);

    // FuelType will Fire only if the value is Cylinder Head
    if (jobtype === "Cylinder Head") {
      navigate("/fueltype", { state: updatedJobCard });
    }
  }

  return (
    <div className="jobtypecontainer">
      <form className="JobTypeForm" onSubmit={JobTypeSubmit}>
        <label className="JobTypeLabel">Type of Job</label>
        <select className="JobTypeSelect" name="jobtype">
          <option value="Cylinder Head">Cylinder Head</option>
          <option value="v8">V8 Cylinder Head</option>
          <option value="v6">V6 Cylinder Head</option>
          <option value="Block">Block</option>
          <option value="Crankshaft">Crankshaft</option>
          <option value="Con Rods">Con Rods</option>
          <option value="Other">Other</option>
        </select>
        <button className="JobTypeButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobType;
