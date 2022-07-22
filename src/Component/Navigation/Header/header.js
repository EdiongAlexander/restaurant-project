import React from "react";
import "./header.css"
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <nav>
      <div className="group">
        <p><Icon icon="icon-park-outline:hamburger-button" /></p>
        <h3>FoodZero</h3>
      </div>
      <div className="group2">
        <p className="number">+234123567890</p>
        <button>Reservations</button>
      </div>
    </nav>
  )
}

export default Header;