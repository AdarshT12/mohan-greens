import React from "react";
import '../css/navbar.css';
import Logo from "../../assests/mohangrrenslogo.png";


function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo and Title */}
      <div className="navbar-left">
        <img src={Logo} alt="Mohan Greens" className="logo" />
        <div className="text-info">
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
        
      </div>
    </nav>
  );
}

export default Navbar;
