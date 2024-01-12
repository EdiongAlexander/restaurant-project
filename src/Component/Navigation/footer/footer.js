import React from 'react'
import './footer.css'
import { Icon } from '@iconify/react';

const footer = () => {
  return (
    <>
      <div className='footer-wrapper'>
        <section className='footer-content'>
          <div className='footer-title'>
            <h1>
              <span className='text-[34px] leading-[41px]'>Food</span><br />
              <span className='text-[34px] leading-[41px]'> Zero.</span>
            </h1>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <span>+2348120000000</span><br />
              <span>info@foodzero.com</span>
            </p>
            <p>
              <span>29 Nkemba street</span><br />
              <span>Uyo, Nigeria.</span>
            </p>
          </div>
          <div>
            <h4>Never Miss a Recipe</h4>
            <div className='email-subscription'>
              <input type="email" className='email-box' placeholder="Email Address" />
              <button className='subscription-btn'>Subcribe</button>
            </div>
            <div className='subscription-detail'> <small>Join our subscribers and get the best recipes delivered each week!</small></div>
          </div>
        </section>
        <section className='footer-line'></section>
        <section className='footer-media'>
          <p>&copy; 2022 Zero inc. All right reserved </p>
          
          <p className='flex'>
            <a className='social-icons' href='https://www.facebook.com'><Icon icon="ant-design:facebook-outlined" /></a>
            <a href='instagram.com' className='social-icons'><Icon icon="ant-design:instagram-outlined" /></a>
            <a href='youtube.com' className='social-icons'><Icon icon="gg:youtube" /></a>
            <a href='twitter.com' className='social-icons'><Icon icon="carbon:logo-twitter" /></a>
          </p>
        </section>
      </div>
    </>
  )
}

export default footer