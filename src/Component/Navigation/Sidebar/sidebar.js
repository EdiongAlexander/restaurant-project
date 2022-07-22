import React from 'react'
import "./sidebar.css"
import { Icon } from '@iconify/react';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar-wrapper'>
        
        <nav className='nav-links'>
          <p><Icon icon="akar-icons:circle-x" /><Icon icon="icon-park-outline:hamburger-button" /></p>
          <ul>
            <li>
              <h1>Home</h1>
            </li>
            
            <li>
              <h1>Menu</h1>
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
        <section className='nav-contact'>
          <h3>Contact</h3>
          <span></span><br />
          <p> <span>+2348120000000</span><br />
            <span>info@foodzero.com</span><br />
          </p>
          <p>
            <span>29 Nkemba street</span><br />
            <span>Uyo, Nigeria.</span><br />
          </p>
          <p >
            <a className='social-icons' href='https://www.facebook.com'><Icon icon="ant-design:facebook-outlined" /></a>
            <a href='#' className='social-icons'><Icon icon="ant-design:instagram-outlined" /></a>
            <a href='#' className='social-icons'><Icon icon="gg:youtube" /></a>
            <a href='#' className='social-icons'><Icon icon="carbon:logo-twitter" /></a>
          </p>
        </section>
      </div>
    </>
  )
}

export default Sidebar