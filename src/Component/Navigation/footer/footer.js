import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <>
      <div className='footer-wrapper'>
        <section className='footer-content'>
          <div className='footer-title'>
            <h1>
              <span>Food</span><br />
              <span> Zero.</span>
            </h1>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <span>+2348120000000</span><br />
              <span>foodzero@gmail.com</span>
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
          <p>
            <span className='social-icons'>Twitter</span>
            <span className='social-icons'>Facebook</span>
            <span className='social-icons'>Youtube</span>
            <span>instagram</span>
          </p>
        </section>
      </div>
    </>
  )
}

export default footer