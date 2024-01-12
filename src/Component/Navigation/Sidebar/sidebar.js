import React from 'react'
import "./sidebar.css"
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const openToggle = () => {
    setOpen(false);
  }
  const closeToggle = () => {
    setOpen(true);
  };
  
  return (
    <>
      <div className="side-container z-[10000000000000] m-0 p-0">
        {open ? (
          <img src='./open-menu.svg' alt='menu-icon' onClick={openToggle} className='w-[52px] h-[52px] cursor-pointer'/>
        ) : (
          <div className="nav-wrapper">
            <div className="sidebar-wrapper">
              <nav className="nav-links">
                <p className="toggle-nav">
                  <span className="close-nav" onClick={closeToggle}>
                    <Icon icon="akar-icons:circle-x" />
                  </span>
                </p>
                <ul>
                  <li className='cursor-pointer'>
                    <Link to="/"><h1>Home</h1></Link>
                  </li>

                  <li className='cursor-pointer'>
                  <Link to="/menu"><h1>Menu</h1></Link>
                  </li>
                  <li>
                    <h1>Blogs</h1>
                    <ul>
                      <li>1 Column</li>
                      <li>2 Column</li>
                      <li>Sidebar Post</li>
                    </ul>
                  </li>
                  <li>
                    <h1>About</h1>
                  </li>
                  <li>
                    <h1>Contact</h1>
                  </li>
                </ul>
              </nav>
              <section className="nav-contact">
                <h3>Contact</h3>
                <span>--------------</span>
                <p>
                  <span>+2348120000000</span>
                  <br />
                  <span>info@foodzero.com</span>
                  <br />
                </p>
                <p>
                  <span>29 Nkemba street</span>
                  <br />
                  <span>Uyo, Nigeria.</span>
                  <br />
                </p>
                <p>
                  <a className="social-icons" href="https://www.facebook.com">
                    <Icon icon="ant-design:facebook-outlined" />
                  </a>
                  <a href="instagram.com" className="social-icons">
                    <Icon icon="ant-design:instagram-outlined" />
                  </a>
                  <a href="youtube.com" className="social-icons">
                    <Icon icon="gg:youtube" />
                  </a>
                  <a href="titter.com" className="social-icons">
                    <Icon icon="carbon:logo-twitter" />
                  </a>
                </p>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar