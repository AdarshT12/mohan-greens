import React from "react";
import '../css/navbar.css';
import Logo from "../../assests/mohangrrenslogo.png";
<<<<<<< HEAD
import 'remixicon/fonts/remixicon.css';

=======
>>>>>>> 316bf74a8de24866fbff52b8a9575848de469622


function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo and Title */}
      <div className="navbar-left">
<<<<<<< HEAD
        <img src={Logo} alt="Mohan Greens" className="logo" />        
=======
        <img src={Logo} alt="Mohan Greens" className="logo" />
>>>>>>> 316bf74a8de24866fbff52b8a9575848de469622
        <div className="text-info">
        </div>
      </div>
      {/* Center: Menu Items */}
      <div className="navbar-center">
        <div className="nav-item active"><i class="ri-home-9-line"></i> Home</div>
        <div className="nav-item"><i class="ri-money-rupee-circle-line"></i>Price</div> 
        <div className="nav-item"><i class="ri-building-line"></i> Site Plan</div>
        <div className="nav-item"><i class="ri-wifi-line"></i> Amenities</div>
        <div className="nav-item"><i class="ri-map-pin-2-line"></i> Location</div>
        <div className="nav-item"><i class="ri-download-2-line"></i> Brochure</div>
      </div>

      {/* Right: Blox logo */}
      <div className="navbar-right">
        
      </div>
    </nav>
  );
}

export default Navbar;
