import React, { useState } from 'react'

const ProductDetailPage = () => {

  return (
    <div className='max-w-1500px bg-amber-100 min-h-screen'>
      <div className='bg-[#1a0683] w-100% h-[300px] flex flex-col justify-center'>
        <h1 className='text-white text-center text-4xl font-semibold'>Classic Button-Down Shirt</h1>
        <div className='flex justify-center my-4'>
          <a href="#" className='text-white text-center text-xl'>Home</a>&nbsp;&nbsp;
          <span className='text-white'> // </span>&nbsp;&nbsp;
          <p className='text-white text-center text-xl'>Classic Button-Down Shirt</p>
        </div>
      </div>

      <div className='w-100%'>
        <div className='overflow-hidden mx-5 flex bg-amber-500 py-[6%]'>
          <div className='w-[700px]'>
            <img src="images/cardproducts/product5.webp" className='rounded-2xl'/>
          </div>
          <div className='bg-rose-300 w-[100%]'>
            <h1 className='ml-[14%] text-4xl font-bold'>Classic Button-Down Shirt</h1>
            <h3 className='text-xl font-semibold pl-[14%] mt-[2%]'>Price:<span className='text-[#1A0683]'> ₹1500</span>
              <span className='text-[red] pl-3 line-through'>1800</span>
              <span className='bg-[red] ml-3 px-4 py-1 rounded-full text-white text-sm'>Sale</span>
              <span className='bg-[black] ml-3 px-4 py-1 rounded-full text-white text-sm'>-17%</span>
            </h3>
            <div>
              <h6 className='ml-[14%] pt-[2%]'><span className='font-bold'>Color :</span> Black</h6>
            </div>
            <div>
              <div className='w-[50px] h-[50px]'>
                <img src="images/cardproducts/product5.webp"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
