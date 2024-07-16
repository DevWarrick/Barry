import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Diesel8ValveQuote.css";

const Diesel8ValveQuote = () => {
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

  const Diesel8ValveQuoteSubmit = (event) => {
    event.preventDefault();

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

    navigate("/diesel-8-valve-quote", { state: updatedJobCard });
  };

  // Sum up all the prices
  let totalBill =
    pressureTestPrice +
    skimPrice +
    valvesAndSeatsPrice +
    preTopValvesPrice +
    setTappetsPrice +
    fitPreCombustionChambersPrice +
    lineBorePrice +
    fitValveStemSealsPrice +
    fitGuidesPrice +
    weldPrice +
    makeAndFitValveSeatPrice +
    brokenBoltPrice +
    helicoilPrice +
    removeGlowPlugPrice;

  return (
    <div className="Diesel8ValveQuote-container">
      <form
        className="Diesel8ValveQuote-form"
        onSubmit={Diesel8ValveQuoteSubmit}
      >
        <h3>Barrys Cylinder Head Center</h3>
        <div className="Diesel8ValveQuote-header">
          {/* Date and Time */}
          <p>Date and Time: {dateAndTime}</p>
          {/* Customer First Name */}
          <p>First Name: {customerFirstName}</p>
          {/* Customer Last Name will only get displayed if not empty */}
          {customerLastName && <p>Last Name: {customerLastName}</p>}
          {/* Customer Phone number */}
          <p>phone Number: {phone}</p>
          {/* Customer Email will get displayed if not empty */}
          {email && <p>Email: {email}</p>}
          {/* Cylinder head name will get displayed if not empty */}
          {cylinderHeadName && <p>Make: {cylinderHeadName}</p>}
        </div>

        <div className="Diesel8ValveQuote-main">
          <h4>Needs to be Done</h4>
          {/* Pressure Test will get added to Quote if value is more than 0 */}
          {pressureTestPrice > 0 && <p>Pressure Test: {pressureTestPrice}</p>}
          {/* Skim will be added if the price is greater than 0 */}
          {skimPrice > 0 && <p>Skim: {skimPrice}</p>}
          {/* Valves and Seats will be added if the price is greater than 0 */}
          {valvesAndSeatsPrice > 0 && (
            <p>Valves and Seats: {valvesAndSeatsPrice}</p>
          )}
          {/* Pre Top Valves will be added if the price is greater than 0 */}
          {preTopValvesPrice > 0 && <p>Pre Top Valves: {preTopValvesPrice}</p>}
          {/* Set Tappets will be added if the price is greater than 0 */}
          {setTappetsPrice > 0 && <p>Set Tappets: {setTappetsPrice}</p>}
          {/* Fit Pre Combustion Chambers will be added if the price is greater than 0 */}
          {fitPreCombustionChambersPrice > 0 && (
            <p>Fit Pre Combustion Chambers: {fitPreCombustionChambersPrice}</p>
          )}
          {/* Line Bore will be added if the price is greater than 0 */}
          {lineBorePrice > 0 && <p>Line Bore: {lineBorePrice}</p>}
          {/* Works out if 0 Valve Stem Seals it wont get Displayed on Quote */}
          {fitValveStemSealsPrice > 0 && (
            <p>Fit Valve Stem Seals: {fitValveStemSealsPrice}</p>
          )}
          {/* Works out if 0 Guides it wont get Displayed on Quote */}
          {fitGuidesPrice > 0 && <p>Fit Guides: {fitGuidesPrice}</p>}
          {/* Works out if 0 Welds it wont get Displayed on Quote */}
          {weldPrice > 0 && <p>Weld: {weldPrice}</p>}
          {/* Works out if 0 Make and fit valve seat it wont get Displayed on Quote */}
          {makeAndFitValveSeatPrice > 0 && (
            <p>Make and Fit Valve Seat: {makeAndFitValveSeatPrice}</p>
          )}
          {/* Works out if 0 Broken Bolt it wont get Displayed on Quote */}
          {brokenBoltPrice > 0 && <p>Broken Bolt: {brokenBoltPrice}</p>}
          {/* Works out if 0 Helicoil it wont get Displayed on Quote */}
          {helicoilPrice > 0 && <p>Helicoil: {helicoilPrice}</p>}
          {/* Works out if 0 Remove Glow Plug it wont get Displayed on Quote */}
          {removeGlowPlugPrice > 0 && (
            <p>Remove Glow Plug: {removeGlowPlugPrice}</p>
          )}
          {/* Works out if 0 Parts Needed it wont get Displayed on Quote */}
          {partsNeeded && <p>Parts Needed: {partsNeeded}</p>}
        </div>
        {/* Quote Total */}
        <h3 className="Diesel8ValveQuote-bill">Total Bill: {totalBill}</h3>
        <button className="Diesel8ValveQuote-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Diesel8ValveQuote;
