import React from 'react'

const Banner2 = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <div className='bg-amber-100 flex justify-between banner-section'>
          <div className='banner-text-box flex flex-col items-center justify-center mx-auto'>
              <h5 className='font-semibold'>Save 50% Spring Clearance</h5>
              <h1 className='font-bold text-center'>Summer Style Sensations</h1>
              <a href="#" className='border font-semibold'>Shop Now</a>
          </div>
          <div className='bannerimg-box'>
              <img src="images/banner/Herobanner.webp"/>
              <a href="#" className='border font-semibold'>Shop Now</a>
          </div>
      </div>
    </div>
  )
}

export default Banner2
