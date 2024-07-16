import React, { useState } from "react"; // Step 1: Import useState
import { useNavigate } from "react-router-dom";
import "./OpenJob.css";

const OpenJob = () => {
  const navigate = useNavigate();
  // Step 2: Initialize jobCard state
  const [jobCard, setJobCard] = useState({
    dateAndTime: "",
    customerFirstName: "",
    customerLastName: "",
    phone: "",
    email: "",
  });

  const OpenJobSubmit = (event) => {
    event.preventDefault();

    // Collecting Form Data
    const formData = new FormData(event.target);
    const dateAndTime = formData.get("dateAndTime");
    const customerFirstName = formData.get("customerFirstName");
    const customerLastName = formData.get("customerLastName");
    const phone = formData.get("phone");
    const email = formData.get("email");

    // Step 3: Update jobCard state
    const updatedJobCard = {
      ...jobCard,
      dateAndTime: dateAndTime,
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      phone: phone,
      email: email,
    };
    setJobCard(updatedJobCard);

    console.log(updatedJobCard);

    // Navigate to JobType component and pass the updated jobCard state Data
    navigate("/jobtype", { state: updatedJobCard });
  };

  return (
    <div className="openjobcard">
      <form className="OpenJobForm" onSubmit={OpenJobSubmit}>
        <input
          type="hidden"
          name="dateAndTime"
          value={new Date().toLocaleString()}
        />
        <input
          type="name"
          name="customerFirstName"
          placeholder="First Name"
          required
          className="OpenJobInput"
        />
        <input
          type="name"
          name="customerLastName"
          placeholder="Last Name"
          className="OpenJobInput"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          className="OpenJobInput"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="OpenJobInput"
        />
        <button type="submit" className="OpenJobButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OpenJob;
