import { React, useState } from "react";
import "./Diesel12Valve.css";

const Diesel12Valve = () => {
  // This will get the value of the Fit Guides
  const [fitGuideValue, setFitGuideValue] = useState(0);
  // This will get the value of the Weld
  const [weldvalue, setWeldValue] = useState(0);
  // This will get the value of the Make and Fit Valve Seat
  const [seatvalue, setseatvalue] = useState(0);

  // This will get the value of the Broken Bolt
  const [brokenBoltValue, setBrokenBoltValue] = useState(0);

  // This will get the value of the Helicoil
  const [HelicoilValue, setHelicoilValue] = useState(0);

  // This will get the value of the Remove Glow Plug
  const [plugvalue, setplugvalue] = useState(0);

  return (
    <div className="Diesel12Valve-container">
      <form className="Diesel12Valve-form">
        <h1 className="Diesel12Valve-h1">Diesel 12 Valve</h1>
        {/* Cylinder Head Name */}
        <h3>Cylinder Head Name</h3>
        <div className="Diesel12Valve-Cylinder-Head-Name">
          <input
            className="Diesel12Valve-Cylinder-Head-Name-Input"
            type="text"
            name="cylinderHeadName"
            placeholder="Cylinder Head Name"
          />
        </div>
        {/* Pressure Test */}
        <h3>Pressure Test</h3>
        <div className="Diesel12Valve-Pressure-Test">
          <label className="Diesel12Valve-label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="pressureTestForm"
            value="yes"
          />
          <label className="Diesel12Valve-label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="pressureTestForm"
            value="No"
          />
        </div>
        {/* Skim */}
        <h3>Skim</h3>
        <div className="Diesel12Valve-Skim">
          <label className="Diesel12Valve-label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="skim"
            value="yes"
          />
          <label className="Diesel12Valve-label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="skim"
            value="No"
          />
        </div>
        {/* Valves And Seats */}
        <h3>Valves And Seats</h3>
        <div className="Diesel12Valve-ValvesAndSeats">
          <label className="Diesel12Valve-label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="ValvesAndSeats"
            value="yes"
          />
          <label className="Diesel12Valve-label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="ValvesAndSeats"
            value="no"
          />
        </div>
        {/* Pre Top Valves */}
        <h3>Pre Top Valves</h3>
        <div className="Diesel12Valve-PreTopValves">
          <label className="Diesel12Valve-label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="preTopValves"
            value="yes"
          />
          <label className="Diesel12Valve-label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="preTopValves"
            value="no"
          />
        </div>
        {/* Fit Pre Combustion Chambers */}
        <h3>Fit Pre Combustion Chambers</h3>
        <div className="Diesel12Valve-Combustion-Chambers">
          <label className="Diesel12Valve-label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="CombustionChambers"
            value="yes"
          />
          <label className="Diesel12Valve-label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="CombustionChambers"
            value="no"
          />
        </div>
        {/* Line Bore */}
        <h3>Line Bore</h3>
        <div className="Diesel12Valve-Line-Bore">
          <label className="Diesel12Valve-label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="LineBore"
            value="yes"
          />
          <label className="Diesel12Valve-label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="LineBore"
            value="no"
          />
        </div>
        {/* Fit Valve Stem Seals */}
        <h3>Fit Valve Stem Seals</h3>
        <div className="Diesel12Valve-Valve-Stem-Seals">
          <label className="Diesel12Valve-label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="ValveStemSeals"
            value="yes"
          />
          <label className="Diesel12Valve-label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel12Valve-Input"
            type="radio"
            name="ValveStemSeals"
            value="no"
          />
        </div>
        {/* Fit Guides */}
        <h3>Fit Guides</h3>
        <div className="Diesel12Valve-Fit-Guides">
          <input
            type="range"
            name="FitGuides"
            min="0"
            max="12"
            value={fitGuideValue}
            onChange={(e) => setFitGuideValue(e.target.value)}
          />
          {/* Display the How many Guides Value */}
          <span>Guides: {fitGuideValue}</span>
        </div>
        {/* Weld */}
        <div className="Diesel12Valve-Weld">
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
        {/* Make and fit Valve Seat */}
        <div className="Diesel8Valve-Make-And-Fit-Valve-Seat">
          <h3>Make and fit Valve Seat</h3>
          <input
            type="range"
            name="MakeAndFitValveSeat"
            min="0"
            max="12"
            value={seatvalue}
            onChange={(e) => setseatvalue(e.target.value)}
          />
          {/* Display the How many Make and fit Valve Seats */}
          <span>Seats: {seatvalue}</span>
        </div>
        {/* Broken Bolt */}
        <div className="Diesel12Valve-Broken-Bolt">
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
        <div className="Diesel12Valve-Helicoil">
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
        {/* Remove Glow Plugs */}
        <div className="Diesel12Valve-RemoveGlowPlug">
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
        <button className="Diesel12Valve-Button">Submit</button>
      </form>
    </div>
  );
};

export default Diesel12Valve;
