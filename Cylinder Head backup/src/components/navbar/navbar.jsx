import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav>
        <a href="/">
          <h1>Cylinder Head</h1>
        </a>
        <div className="navbar-links">
          <div className="Hide-links">
            <a href="/">Home</a>
            <a href="/openjob/">Open Job</a>
          </div>
          <a onClick={toggleDropdown}>
            <i className="bi bi-list"></i>
          </a>
          {isOpen && (
            <div className="dropdownMenu">
              {
                <div className="mobile-menu">
                  <a href="/">Home</a>
                  <a href="/openjob/">Open Job</a>
                </div>
              }
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
