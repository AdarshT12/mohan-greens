import React from "react";
import '../css/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/ Left: Logo and Title /}
      <div className="navbar-left">
        <img src="/mohangreenslogo.png" alt="Mohan Greens" className="logo" />
        <div className="text-info">
          <div className="project-name">Mohan <span className="green-text">Precious</span> Greens</div>
          <div className="location">Ambernath (East)</div>
        </div>
      </div>

      {/* Center: Menu Items */}
      <div className="navbar-center">
        <div className="nav-item active"><i className="fas fa-home"></i> Home</div>
        <div className="nav-item"><i className="fas fa-rupee-sign"></i> Price</div>
        <div className="nav-item"><i className="fas fa-building"></i> Site Plan</div>
        <div className="nav-item"><i className="fas fa-wifi"></i> Amenities</div>
        <div className="nav-item"><i className="fas fa-map-marker-alt"></i> Location</div>
        <div className="nav-item"><i className="fas fa-download"></i> Brochure</div>
      </div>

      {/* Right: Blox logo */}
      <div className="navbar-right">
        <img src="/blox-logo.png" alt="Blox" className="blox-logo" />
      </div>
    </nav>
  );
}

export default Navbar;
