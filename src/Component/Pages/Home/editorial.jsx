import React from "react";
import { Icon } from '@iconify/react';


const Editorial = () => {
  return (
    <div className="editorial">
      <div className="description mb-6">
        <div className='quality'>
          <div className='editorial-image'>
            <img src="Vector-fish.png" alt="fish" />
          </div>
          <h3 className="font-bold mb-6">Premium Quality</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur eius voluptates voluptatibus, aut aliquid natus in</p>
        </div>

        <div className='quality'>
          <div className='editorial-image'>
            <img src="Vector-carrot.png" alt="carrot" />
          </div>
          <h3 className="font-bold mb-6">Seasonal Vegetables</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur eius voluptates voluptatibus, aut aliquid natus in</p>
        </div>

        <div className='quality'>
          <div className='editorial-image'>
            <img src="Vector-lemon.png" alt="lemon" />
          </div>
          <h3 className="font-bold mb-6">Fresh Fruit</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur eius voluptates voluptatibus, aut aliquid natus in</p>
        </div>

      </div>

      <div className="article">
        <div className="articles">
          <div className="articles-image">
            <img src="./tinified/Feature Image-guava.png" alt="guava" />
            <span className="tag">Food</span>
          </div>

          <div className="content">
            <div className="post-details gap-2 justify-between">
              <img className="profile-pix" src='Avatar.png' alt="avatar" />
              <p className='creator'>Julie Christie</p>

              <ul className='time-details'>
                <li className='date'>October 17, 2021</li>
                <li className="time">3:33 pm</li>
                <li className='comments'>2 comments</li>
              </ul>
            </div>

            <div className="article-contents">
              <h2 className="article-title font-bold text-[24px] leading-[32px] mt-6">Fruits and vegetables and protection against diseases</h2>
              <p className='article-description small font-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className='read-more'>
                <p className="flex items-center">Read More <span span className="low"><Icon icon="zmdi:long-arrow-right" className="mt-[-15px]" /></span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="articles">
          <div className="articles-image">
            <img src="./tinified/Feature Image-guava.png" alt="guava" />
            <span className="tag">Food</span>
          </div>

          <div className="content">
            <div className="post-details gap-2 justify-between">
              <img className="profile-pix" src='Avatar.png' alt="avatar" />
              <p className='creator'>Julie Christie</p>

              <ul className='time-details'>
                <li className='date'>October 17, 2021</li>
                <li className="time">3:33 pm</li>
                <li className='comments'>2 comments</li>
              </ul>
            </div>

            <div className="article-contents">
              <h2 className="article-title font-bold text-[24px] leading-[32px] mt-6">Fruits and vegetables and protection against diseases</h2>
              <p className='article-description small font-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className='read-more'>
                <p className="flex items-center">Read More <span span className="low"><Icon icon="zmdi:long-arrow-right" className="mt-[-15px]" /></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Editorial;