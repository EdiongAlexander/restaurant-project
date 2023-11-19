import React from "react";
import "./header.css"

const Header = () => {
  return (
    <nav>
      <div className="group">
        <img src="./Logo.png" className="logo" alt="logo"/>
      </div>
      <div className="group2">
        <p className="number">+234123567890</p>
        <button>Reservations</button>
      </div>
    </nav>
  )
}

export default Header;