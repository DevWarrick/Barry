import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import OpenJob from "./components/OpenJob/OpenJob.jsx";
import JobType from "./components/JobType/JobType.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import FuelType from "./components/FuelType/FuelAndValves.jsx";
import Diesel8Valve from "./components/Diesel8Valve/Diesel8Valve.jsx";
import Diesel10Valve from "./components/Diesel10Valve/Diesel10Valve.jsx";
import Diesel12Valve from "./components/Diesel12Valve/Diesel12Valve.jsx";
import Diesel16Valve from "./components/Diesel16Valve/Diesel16Valve.jsx";
import Diesel20Valve from "./components/Diesel20Valve/Diesel20Valve.jsx";
import Diesel24Valve from "./components/Diesel24Valve/Diesel24Valve.jsx";
import PartsNeeded from "./components/Diesel8ValvePartsNeeded/Diesel8ValvePartsNeeded.jsx";
import Diesel8ValveAddToJob from "./components/Diesel8ValveAddToJob/Diesel8ValveAddToJob.jsx";
import Diesel8ValveQuote from "./components/Diesel8ValveQuote/Diesel8VelveQuote.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/openjob/" element={<OpenJob />} />
        <Route path="/jobtype" element={<JobType />} />
        <Route path="/fueltype" element={<FuelType />} />
        <Route path="/disel8valve" element={<Diesel8Valve />} />
        <Route path="/diesel8valvepartsneeded" element={<PartsNeeded />} />
        <Route path="/disel8valveaddtojob" element={<Diesel8ValveAddToJob />} />
        <Route path="/disel8valvequote" element={<Diesel8ValveQuote />} />
        <Route path="/disel10valve" element={<Diesel10Valve />} />
        <Route path="/disel12valve" element={<Diesel12Valve />} />
        <Route path="/disel16valve" element={<Diesel16Valve />} />
        <Route path="/disel20valve" element={<Diesel20Valve />} />
        <Route path="/disel24valve" element={<Diesel24Valve />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
