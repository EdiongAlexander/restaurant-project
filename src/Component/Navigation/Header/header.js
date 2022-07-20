import React from "react";
import "./header.css"

const Header = () => {
  return (
    <nav>
      <div className="group">
        <p><i class="fa-solid fa-bars"></i></p>
        <h3>FoodZero</h3>
      </div>
      <p>+234123567890</p>
      <button>Reservations</button>
    </nav>
  )
}

export default Header;