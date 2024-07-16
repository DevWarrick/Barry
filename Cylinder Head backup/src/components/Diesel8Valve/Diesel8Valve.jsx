import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Diesel8Valve.css";
import pricing from "./Diesel8ValvePricing.json";

const Diesel8Valve = () => {
  const navigate = useNavigate();

  // Getting the Fuel Type and Valves from the FuelType Component
  const [fitGuideValue, setFitGuideValue] = useState(0);
  const [weldvalue, setWeldValue] = useState(0);
  const [seatvalue, setseatvalue] = useState(0);
  // This will get the value of the Broken Bolt
  const [brokenBoltValue, setBrokenBoltValue] = useState(0);
  // This will get the value of the Helicoil
  const [HelicoilValue, setHelicoilValue] = useState(0);
  // This will get the value of the Remove Glow Plug
  const [plugvalue, setplugvalue] = useState(0);

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
  } = location.state || {};

  const Diesel8ValveSubmit = (event) => {
    event.preventDefault();

    // Collecting Form Data
    const data = new FormData(event.target);
    const cylinderHeadName = data.get("cylinderHeadName");
    const pressureTest = data.get("pressureTestForm");
    const skim = data.get("skim");
    const valvesAndSeats = data.get("ValvesAndSeats");
    const preTopValves = data.get("preTopValves");
    const setTappets = data.get("SetTappets");
    const fitPreCombustionChambers = data.get("CombustionChambers");
    const lineBore = data.get("LineBore");
    const fitValveStemSeals = data.get("ValveStemSeals");
    const fitGuides = data.get("FitGuides");
    const weld = data.get("Weld");
    const makeAndFitValveSeat = data.get("MakeAndFitValveSeat");

    // declaring pressureTestPrice before the if statement to avoid undefined
    let pressureTestPrice = 0;
    // Checks if Pressure Test is Yes then it will add the Price
    if (pressureTest === "yes") {
      pressureTestPrice = pricing.PressureTest;
    }

    let skimPrice = 0;
    // Checks if Skim is Yes then it will add the Price
    if (skim === "yes") {
      skimPrice = pricing.Skim;
    }

    let valvesAndSeatsPrice = 0;
    // Checks if Valves And Seats is Yes then it will add the Price
    if (valvesAndSeats === "yes") {
      valvesAndSeatsPrice = pricing.ValvesAndSeats;
    }

    let preTopValvesPrice = 0;
    // Checks if Pre Top Valves is Yes then it will add the Price
    if (preTopValves === "yes") {
      preTopValvesPrice = pricing.PreTopValves;
    }

    let setTappetsPrice = 0;
    // Checks if Set Tappets is Yes then it will add the Price
    if (setTappets === "yes") {
      setTappetsPrice = pricing.SetTappets;
    }

    let fitPreCombustionChambersPrice = 0;
    // Checks if Fit Pre Combustion Chambers is Yes then it will add the Price
    if (fitPreCombustionChambers === "yes") {
      fitPreCombustionChambersPrice = pricing.FitPreCombustionChambers;
    }

    let lineBorePrice = 0;
    // Checks if Line Bore is Yes then it will add the Price
    if (lineBore === "yes") {
      lineBorePrice = pricing.LineBore;
    }

    let fitValveStemSealsPrice = 0;
    // Checks if Fit Valve Stem Seals is Yes then it will add the Price
    if (fitValveStemSeals === "yes") {
      fitValveStemSealsPrice = pricing.FitValveStemSeals;
    }

    // Checks how many Fit Guides are there and then it will add the Price
    let fitGuidesPrice = pricing.FitGuides;
    fitGuidesPrice = fitGuides * fitGuidesPrice;

    // Checks how many Welds are there and then it will add the Price
    let weldPrice = pricing.Weld;
    weldPrice = weld * weldPrice;

    // Checks how many Make and Fit Valve Seats are there and then it will add the Price
    let makeAndFitValveSeatPrice = pricing.MakeAndFitValveSeat;
    makeAndFitValveSeatPrice = makeAndFitValveSeat * makeAndFitValveSeatPrice;

    // Checks how many Broken Bolts are there and then it will add the Price
    let brokenBoltPrice = pricing.BrokenBolt;
    brokenBoltPrice = brokenBoltValue * brokenBoltPrice;

    // Checks how many Helicoils are there and then it will add the Price
    let helicoilPrice = pricing.Helicoil;
    helicoilPrice = HelicoilValue * helicoilPrice;

    // Checks how many Glow Plugs are there and then it will add the Price
    let removeGlowPlugPrice = pricing.ReomoveGlowPlug;
    removeGlowPlugPrice = plugvalue * removeGlowPlugPrice;

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
    };

    setJobCard(updatedJobCard);

    console.log(updatedJobCard);

    // Navigate to Parts Needed Component and pass the updated jobCard state Data
    navigate("/diesel8valvepartsneeded", { state: updatedJobCard });
  };

  return (
    <div className="Diesel8Valve-Container">
      <form className="Diesel8Valve-Form" onSubmit={Diesel8ValveSubmit}>
        <h1 className="Diesel8Valve-H1">Diesel 8 Valve</h1>
        {/* Cylinder Head Name */}
        <h3>Cylinder Head Name</h3>
        <div className="Diesel8Valve-Cylinder-Head-Name">
          <input
            className="Diesel8Valve-Cylinder-Head-Name-Input"
            type="text"
            name="cylinderHeadName"
            placeholder="Cylinder Head Name"
          />
        </div>
        {/* Pressure Test */}
        <h3>Pressure Test</h3>
        <div className="Diesel8Valve-Pressure-Test">
          <label className="Diesel8Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="pressureTestForm"
            value="yes"
          />
          <label className="Diesel8Valve-Label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="pressureTestForm"
            value="No"
          />
        </div>
        {/* Skim */}
        <h3>Skim</h3>
        <div className="Diesel8Valve-Skim">
          <label className="Diesel8Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="skim"
            value="yes"
          />
          <label className="Diesel8Valve-Label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="skim"
            value="No"
          />
        </div>
        {/* Valves And Seats */}
        <h3>Valves And Seats</h3>
        <div className="Diesel8Valve-ValvesAndSeats">
          <label className="Diesel8Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="ValvesAndSeats"
            value="yes"
          />
          <label className="Diesel8Valve-Label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="ValvesAndSeats"
            value="no"
          />
        </div>
        {/* Pre Top Valves */}
        <h3>Pre Top Valves</h3>
        <div className="Diesel8Valve-PreTopValves">
          <label className="Diesel8Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="preTopValves"
            value="yes"
          />
          <label className="Diesel8Valve-Label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="preTopValves"
            value="no"
          />
        </div>
        {/* Set Tappets */}
        <h3>Set Tappets</h3>
        <div className="Diesel8Valve-Set-Tappets">
          <label className="Diesel8Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="SetTappets"
            value="yes"
          />
          <label className="Diesel8Valve-Label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="SetTappets"
            value="no"
          />
        </div>
        {/* Fit Pre Combustion Chambers */}
        <h3>Fit Pre Combustion Chambers</h3>
        <div className="Diesel8Valve-Combustion-Chambers">
          <label className="Diesel8Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="CombustionChambers"
            value="yes"
          />
          <label className="Diesel8Valve-Label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="CombustionChambers"
            value="no"
          />
        </div>
        {/* Line Bore */}
        <h3>Line Bore</h3>
        <div className="Diesel8Valve-Line-Bore">
          <label className="Diesel8Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="LineBore"
            value="yes"
          />
          <label className="Diesel8Valve-Label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="LineBore"
            value="no"
          />
        </div>
        {/* Fit Valve Stem Seals */}
        <h3>Fit Valve Stem Seals</h3>
        <div className="Diesel8Valve-Valve-Stem-Seals">
          <label className="Diesel8Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="ValveStemSeals"
            value="yes"
          />
          <label className="Diesel8Valve-Label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel8Valve-Input"
            type="radio"
            name="ValveStemSeals"
            value="no"
          />
        </div>

        {/* Fit Guides */}
        <h3>Fit Guides</h3>
        <div className="Diesel8Valve-Fit-Guides">
          <input
            type="range"
            name="FitGuides"
            min="0"
            max="8"
            value={fitGuideValue}
            onChange={(e) => setFitGuideValue(e.target.value)}
          />
          {/* Display the How many Guides Value */}
          <span>Guides: {fitGuideValue}</span>
        </div>
        {/* Weld */}
        <div className="Diesel8Valve-Weld">
          <h3>Weld</h3>
          <input
            type="range"
            name="Weld"
            min="0"
            max="30"
            value={weldvalue}
            onChange={(e) => setWeldValue(e.target.value)}
          />
          {/* Display How many Welds */}
          <span>Welds: {weldvalue}</span>
        </div>
        {/* Broken Bolt */}
        <div className="Diesel8Valve-Broken-Bolt">
          <h3>Broken Bolt</h3>
          <input
            type="range"
            name="BrokenBolt"
            min="0"
            max="30"
            value={brokenBoltValue}
            onChange={(e) => setBrokenBoltValue(e.target.value)}
          />
          {/* Display How many Broken Bolts */}
          <span>Broken Bolts: {brokenBoltValue}</span>
        </div>
        {/* Helicoil */}
        <div className="Diesel8Valve-Helicoil">
          <h3>Helicoil</h3>
          <input
            type="range"
            name="Helicoil"
            min="0"
            max="30"
            value={HelicoilValue}
            onChange={(e) => setHelicoilValue(e.target.value)}
          />
          {/* Display How many Helicoils */}
          <span>Helicoils: {HelicoilValue}</span>
        </div>
        {/* Make and fit Valve Seat */}
        <div className="Diesel8Valve-Make-And-Fit-Valve-Seat">
          <h3>Make and fit Valve Seat</h3>
          <input
            type="range"
            name="MakeAndFitValveSeat"
            min="0"
            max="8"
            value={seatvalue}
            onChange={(e) => setseatvalue(e.target.value)}
          />
          {/* Display the How many Make and fit Valve Seats */}
          <span>Seats: {seatvalue}</span>
        </div>
        {/* Remove Glow Plugs */}
        <div className="Diesel8Valve-RemoveGlowPlug">
          <h3>Remove Glow Plug</h3>
          <input
            type="range"
            name="RemoveGlowPlug"
            min="0"
            max="6"
            value={plugvalue}
            onChange={(e) => setplugvalue(e.target.value)}
          />
          {/* Display the How many Glow plugs need to be removed */}
          <span>Plugs: {plugvalue}</span>
        </div>
        {/* Submit Button */}
        <button className="Diesel8Valve-Button">Submit</button>
      </form>
    </div>
  );
};

export default Diesel8Valve;
