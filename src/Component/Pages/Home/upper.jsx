import React from "react";
import Header from '../../Navigation/Header/header'
import Sidebar from '../../Navigation/Sidebar/sidebar'

const Upper = () => {

  return (
    <div className="header-home">
      <div className="flex w-[100%] h-[100px] justify-between items-center py-4 px-4 sm:px-16 h-fit">
        <Sidebar />
        <Header />
      </div>

      <div className="sm:px-16 px-4 py-8 sm:flex justify-center w-full">
        <div className="w-[50%] text-left z-[10]">
          <p className='text-[82px] leading-[84px] font-bold z-[10]'>Healthy Eating is important part of lifestyle</p>
          <p className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="h-[562px] hidden sm:block">
            <p className='mt-8 rotated-text ml-6 w-fit'> <span className="font-bold text-[24px] leading-[32px]">Scroll</span> -------------------------------------------------------------------------</p>
          </div>
        </div>
        <div className="w-[792px] h-[731px] sm:mt-16 ml-[-100px] z[-1]" >
          <img src="./tinified/Image-healthy.png" alt="food" className='h-full w-full z-[-3]' />
          <div className="flex gap-6 mt-[-75px] ml-[-200px]">
            <img src="./tinified/spices1.png" alt="spice" className='w-[150px] h-[150px]' />
            <img src="./tinified/spices2.png" alt="spice" className='w-[150px] h-[150px]' />
            <img src="./tinified/spices3.png" alt="spice-3" className='w-[150px] h-[150px]' />
          </div>
        </div>
      </div>

      <div className="flex justify-between sm:px-16 px-4 gap-36">
        <div className=" w-1/2">
          <img src="./tinified/Image-mush.png" alt="oyster soup" className='w-full h-[560px]' />
          <p className="font-bold text-[34px] leading-[42px] w-1/2 my-6">Start to plan your diet today</p>
          <p className='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <div className="w-1/2">
          <p className='small mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi </p>
          <img src="./tinified/Image-tube.png" alt="grains" className='w-full h-[710px]' />
        </div>
      </div>
    </div>
  )
}


export default Upper;