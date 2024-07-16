import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Diesel8ValvePartsNeeded.css";

const Diesel8ValvePartsNeeded = () => {
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
  } = location.state || {};

  const PartsNeededSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const partsNeeded = formData.get("partsNeeded");

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

    console.log(updatedJobCard);

    console.log(partsNeeded);
    navigate("/disel8valveaddtojob", { state: updatedJobCard });
  };
  return (
    <div className="PartsNeeded-container">
      <h1>Parts Needed</h1>
      <form className="PartsNeeded-form" onSubmit={PartsNeededSubmit}>
        <textarea className="PartsNeeded-textarea" name="partsNeeded" />
        <button className="PartsNeeded-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Diesel8ValvePartsNeeded;
