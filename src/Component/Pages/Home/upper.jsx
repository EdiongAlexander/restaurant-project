import React from "react";
import Header from '../../Navigation/Header/header'
import Sidebar from '../../Navigation/Sidebar/sidebar'

const Upper = () => {
    return (
      <div className="header-home">
        <div className="header-home-flex">
        <Sidebar />
        <Header />
        </div>
  
        <div className="container">
          <div className="healthy">
            <p className='big'>Healthy Eating is important part of lifestyle</p>
            <p className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='rotate'>Scroll..............................</div>
          </div>
          <div className="image">
            <img src="./Image-healthy.png" alt="food" className='main-img' />
            <div className="three">
              <img src="./spices1.png" alt="spice" className='spice-img' />
              <img src="./spices2.png" alt="spice" className='spice-img' />
              <img src="./spices3.png" alt="spice" className='spice-img' />
            </div>
          </div>
        </div>
  
        <div className="container-2">
          <div className="oyster">
            <img src="./Image-mush.png" alt="oyster soup" className='oyster-img' />
            <p className="larger">Start to plan your diet today</p>
            <p className='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
  
          <div className="grains">
            <p className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi </p>
            <img src="./Image-tube.png" alt="grains" className='grains-img' />
          </div>
        </div>
      </div>
    )
  }


  export default Upper;