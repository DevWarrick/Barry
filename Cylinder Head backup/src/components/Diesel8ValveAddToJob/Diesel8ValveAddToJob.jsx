import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Diesel8ValveAddToJob.css";

const Diesel8ValveAddToJob = () => {
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
    fueltype,
    valves,
    cylinderHeadName,
    pressureTestPrice,
    skimPrice,
    valvesAndSeatsPrice,
    preTopValvesPrice,
    setTappetsPrice,
    fitPreCombustionChambersPrice,
    lineBorePrice,
    fitValveStemSealsPrice,
    fitGuidesPrice,
    weldPrice,
    makeAndFitValveSeatPrice,
    brokenBoltPrice,
    helicoilPrice,
    removeGlowPlugPrice,
    partsNeeded,
  } = location.state || {};

  const Diesel8ValveAddToJobSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const addToJob = formData.get("addToJob");
    console.log(addToJob);

    // Update jobCard state Data
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
      cylinderHeadName: cylinderHeadName,
      pressureTestPrice: pressureTestPrice,
      skimPrice: skimPrice,
      valvesAndSeatsPrice: valvesAndSeatsPrice,
      preTopValvesPrice: preTopValvesPrice,
      setTappetsPrice: setTappetsPrice,
      fitPreCombustionChambersPrice: fitPreCombustionChambersPrice,
      lineBorePrice: lineBorePrice,
      fitValveStemSealsPrice: fitValveStemSealsPrice,
      fitGuidesPrice: fitGuidesPrice,
      weldPrice: weldPrice,
      makeAndFitValveSeatPrice: makeAndFitValveSeatPrice,
      brokenBoltPrice: brokenBoltPrice,
      helicoilPrice: helicoilPrice,
      removeGlowPlugPrice: removeGlowPlugPrice,
      partsNeeded: partsNeeded,
    };

    setJobCard(updatedJobCard);

    // If No job is added navigate to Diesel8ValveQuote
    if (addToJob === "Dont add to job") {
      navigate("/disel8valvequote", { state: updatedJobCard });
      console.log(updatedJobCard);
    }

    // if (addToJob === "Dont add to job") navigate("/disel8valvequote");
  };

  return (
    <div className="addtojob-div">
      <form className="addtojob-form" onSubmit={Diesel8ValveAddToJobSubmit}>
        <label className="addtojob-label">Add to Job</label>
        <select className="addtojob-select" name="addToJob">
          <option className="addtojob-option" value="Dont add to job">
            Dont add to job
          </option>
          <option className="addtojob-option" value="Block">
            Block
          </option>
          <option className="addtojob-option" value="Crankshaft">
            Crankshaft
          </option>
          <option className="addtojob-option" value="Con Rods">
            Con Rods
          </option>
          <option className="addtojob-option" value="Other">
            Other
          </option>
        </select>
        <button className="addtojob-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Diesel8ValveAddToJob;
