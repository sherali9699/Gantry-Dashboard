import React from "react";
import logo from "../assets/Dawlance_logo.png"; // if you don't have logo yet, comment this line

function Header() {
  return (
    <div className="app-header header-sticky">
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* Left: Logo */}
          <div className="col-3">
            <div className="header-inner header-left">
              <div className="header-logo">
                {/* If you don't have a logo file yet, replace img with "G" */}
                <img src={logo} alt="Gantry Logo" />
              </div>
            </div>
          </div>

          {/* Center: Title */}
          <div className="col-6">
            <div className="header-title">Gantry Control Dashboard</div>
            <div className="header-subtitle">Pick & Place</div>
          </div>

          {/* Right: empty for now */}
          <div className="col-3"></div>

        </div>
      </div>
    </div>
  );
}

export default Header;