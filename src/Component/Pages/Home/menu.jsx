import React from "react";
import Dishes from '../../../static'

const Menu = () => {
    return (
      <div className='menu-menu'>
        <div className='menu-flex'>
          <div className="flexy">
            <h1 className="font-bold">Our Menu</h1>
            <p className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <img src="Image-leaf-1.png" alt="decor" />
        </div>
  
        <div className="menu-list">
          <div className="menu-listing">
  
            {Dishes.home_display.map((item, key) => {
              return (
                <div className="menu-listings" key={key}>
                  <p className="price">{item.price}</p>
                  <p className="food-name font-bold">{item.dish}</p>
                  <p className="food-desc small">{item.description}</p>
                </div>
              )
            })}
  
          </div>
        </div>
      </div>
    )
  }

  export default Menu;