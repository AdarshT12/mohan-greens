import React from "react";
import '../css/navbar.css';
import Logo from "../../assets/mohangrrenslogo.png";
import 'remixicon/fonts/remixicon.css';


function Navbar({ onBrochureClick }) {
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
        <div className="nav-item"><i className="ri-home-9-line"></i> Home</div>
        <a href="#price"><div className="nav-item"><i className="ri-money-rupee-circle-line"></i> Price</div></a>
        <a href="#site-plan"><div className="nav-item"><i className="ri-building-line"></i> Site Plan</div></a>
        <a href="#amenities"><div className="nav-item"><i className="ri-wifi-line"></i> Amenities</div></a>
        <a href="#location"><div className="nav-item"><i className="ri-map-pin-2-line"></i> Location</div></a>
        <div className="nav-item" onClick={onBrochureClick}><i className="ri-download-2-line"></i> Brochure</div>
      </div>
      
    </nav>
  );
}

export default Navbar;
