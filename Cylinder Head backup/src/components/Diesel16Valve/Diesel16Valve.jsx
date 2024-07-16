import { React, useState } from "react";
import "./Diesel16Valve.css";

const Diesel16Valve = () => {
  // This will get the value of the Fit Guides
  const [fitGuideValue, setFitGuideValue] = useState(0);
  // This will get the value of the Weld
  const [weldvalue, setWeldValue] = useState(0);
  // This will get the value of the Broken Bolt
  const [brokenBoltValue, setBrokenBoltValue] = useState(0);
  // This will get the value of the Helicoil
  const [HelicoilValue, setHelicoilValue] = useState(0);
  // This will get the value of the Make and Fit Valve Seat
  const [seatvalue, setseatvalue] = useState(0);
  // This will get the value of the Remove Glow Plug
  const [plugvalue, setplugvalue] = useState(0);

  return (
    <div className="Diesel16Valve-container">
      <form className="Diesel16Valve-form">
        <h1>DIESEL 16 VALVE</h1>
        {/* Cylinder Head Name */}
        <h3>Cylinder Head Name</h3>
        <div className="Diesel16Valve-Cylinder-Head-Name">
          <input
            className="Diesel16Valve-Cylinder-Head-Name-Input"
            type="text"
            name="cylinderHeadName"
            placeholder="Cylinder Head Name"
          />
        </div>
        {/* Pressure Test */}
        <h3>Pressure Test</h3>
        <div className="Diesel16Valve-Pressure-Test">
          <label className="Diesel16Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="pressureTestForm"
            value="yes"
          />
          <label className="Diesel16Valve-Label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="pressureTestForm"
            value="No"
          />
        </div>
        {/* Skim */}
        <h3>Skim</h3>
        <div className="Diesel16Valve-Skim">
          <label className="Diesel16Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="skim"
            value="yes"
          />
          <label className="Diesel16Valve-Label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="skim"
            value="No"
          />
        </div>
        {/* Valves And Seats */}
        <h3>Valves And Seats</h3>
        <div className="Diesel16Valve-ValvesAndSeats">
          <label className="Diesel16Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="ValvesAndSeats"
            value="yes"
          />
          <label className="Diesel16Valve-Label" htmlFor="no">
            No
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="ValvesAndSeats"
            value="no"
          />
        </div>
        {/* Pre Top Valves */}
        <h3>Pre Top Valves</h3>
        <div className="Diesel16Valve-PreTopValves">
          <label className="Diesel16Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="preTopValves"
            value="yes"
          />
          <label className="Diesel16Valve-Label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="preTopValves"
            value="no"
          />
        </div>
        {/* Set Tappets */}
        <h3>Set Tappets</h3>
        <div className="Diesel16Valve-Set-Tappets">
          <label className="Diesel16Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="SetTappets"
            value="yes"
          />
          <label className="Diesel16Valve-Label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="SetTappets"
            value="no"
          />
        </div>
        {/* Fit Valve Stem Seals */}
        <h3>Fit Valve Stem Seals</h3>
        <div className="Diesel16Valve-Valve-Stem-Seals">
          <label className="Diesel16Valve-Label" htmlFor="yes">
            Yes
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="ValveStemSeals"
            value="yes"
          />
          <label className="Diesel16Valve-Label" htmlFor="yes">
            No
          </label>
          <input
            className="Diesel16Valve-Input"
            type="radio"
            name="ValveStemSeals"
            value="no"
          />
        </div>
        {/* Line Bore */}
        <h3>Line Bore</h3>
        <div className="Diesel16Valve-Line-Bore">
          <select className="Diesel16Valve-Select" name="LineBore">
            <option value="no">No</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        {/* Fit Guides */}
        <h3>Fit Guides</h3>
        <div className="Diesel16Valve-Fit-Guides">
          <input
            type="range"
            name="FitGuides"
            min="0"
            max="16"
            value={fitGuideValue}
            onChange={(e) => setFitGuideValue(e.target.value)}
          />
          {/* Display the How many Guides Value */}
          <span>Guides: {fitGuideValue}</span>
        </div>
        {/* Weld */}
        <div className="Diesel16Valve-Weld">
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
        <div className="Diesel16Valve-Broken-Bolt">
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
        <div className="Diesel16Valve-Helicoil">
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
        <div className="Diesel16Valve-Make-And-Fit-Valve-Seat">
          <h3>Make and fit Valve Seat</h3>
          <input
            type="range"
            name="MakeAndFitValveSeat"
            min="0"
            max="16"
            value={seatvalue}
            onChange={(e) => setseatvalue(e.target.value)}
          />
          {/* Display the How many Make and fit Valve Seats */}
          <span>Seats: {seatvalue}</span>
        </div>
        {/* Remove Glow Plugs */}
        <div className="Diesel16Valve-RemoveGlowPlug">
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
        <button className="Diesel16Valve-Button">Submit</button>
      </form>
    </div>
  );
};

export default Diesel16Valve;
