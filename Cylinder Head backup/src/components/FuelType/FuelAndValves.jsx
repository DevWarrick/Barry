import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FuelAndValves.css";

const FuelType = () => {
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

  // Destructure the state Data from JobType
  const location = useLocation();
  const {
    dateAndTime,
    customerFirstName,
    customerLastName,
    phone,
    email,
    jobtype,
  } = location.state || {};

  // FuelAndValvesSubmit Function
  const FuelAndValvesSubmit = (event) => {
    event.preventDefault();

    // Collecting Form Data
    const data = new FormData(event.target);
    const fueltype = data.get("fueltype");
    const valves = data.get("valves");

    // Update jobCard state
    const updatedJobCard = {
      ...jobCard,
      dateAndTime: dateAndTime,
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      phone: phone,
      email: email,
      jobtype: jobtype,
      fueltype: fueltype,
      valves: valves,
    };
    setJobCard(updatedJobCard);

    console.log(updatedJobCard);

    // Diesel 8 Valve will Fire only if the value is Diesel and 8 Valves is Submitted
    if (fueltype === "Diesel" && valves === "8") {
      navigate("/disel8valve", { state: updatedJobCard });
    }

    // Diesel 10 Valve will Fire if the value is Diesel and 10 Valves is Submitted
    if (fueltype === "Diesel" && valves === "10") {
      navigate("/disel10valve", { state: updatedJobCard });
    }

    // Diesel 12 Valve will Fire if the value is Diesel and 12 Valves is Submitted
    if (fueltype === "Diesel" && valves === "12") {
      navigate("/disel12valve", { state: updatedJobCard });
    }

    // Diesel 16 Valve will Fire if the value is Diesel and 16 Valves is Submitted
    if (fueltype === "Diesel" && valves === "16") {
      navigate("/disel16valve", { state: updatedJobCard });
    }

    // Diesel 20 Valve will Fire if the value is Diesel and 20 Valves is Submitted
    if (fueltype === "Diesel" && valves === "20") {
      navigate("/disel20valve", { state: updatedJobCard });
    }

    // Diesel 24 Valve will Fire if the value is Diesel and 24 Valves is Submitted
    if (fueltype === "Diesel" && valves === "24") {
      navigate("/disel24valve", { state: updatedJobCard });
    }
  };

  return (
    <div className="FuelAndValves-Container">
      <form className="FuelAndValves-Form" onSubmit={FuelAndValvesSubmit}>
        <select className="FuelAndValves-Select" name="fueltype">
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
        </select>
        <select className="FuelAndValves-Select" name="valves">
          <option value="6">6 Valves</option>
          <option value="8">8 Valves</option>
          <option value="10">10 Valves</option>
          <option value="12">12 Valves</option>
          <option value="16">16 Valves</option>
          <option value="20">20 Valves</option>
          <option value="24">24 Valves</option>
        </select>
        <button className="FuelAndValves-Button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FuelType;
