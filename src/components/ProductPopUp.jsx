import React, { useState } from 'react'

const ProductPopUp = () => {

  const [quantity,setQuantity] = useState(1)

  return (
    <div className='max-w-1500px bg-amber-100 min-h-screen'>
        <div className='product-container w-10/12 h-160 bg-rose-100 mx-auto flex p-5 lg:overflow-hidden md:h-100%'>
            <div className='w-100 h-150'>
                <img src="images/cardproducts/product5.webp" className='w-100 h-150 object-cover overflow-hidden'/>
            </div>
            <div className='bg-rose-100 lg:w-[63%] md:w-[100%]'>
                <h2 className='text-3xl font-bold pl-[12%] py-[5%]'>Classic Button-Down Shirt</h2>
                <h3 className='text-xl font-semibold pl-[12%]'>Price:<span className='text-[#1A0683]'> ₹1500</span>
                  <span className='text-[red] pl-3 line-through'>1800</span>
                  <span className='bg-[red] ml-3 px-4 py-1 rounded-full text-white text-sm'>Sale</span>
                  <span className='bg-[black] ml-3 px-4 py-1 rounded-full text-white text-sm'>-17%</span>
                </h3>
                <div>
                  <h3 className='text-xm font-semibold pl-[12%] pt-5'>Color: <span className='text-xm font-normal'>Black</span></h3>
                  <div className='flex'>
                    <a href="#" className='ml-[12%] mt-5 w-[40px] h-[40px] bg-amber-200 rounded-full border-2'></a>
                    <a href="#" className='ml-[1%] mt-5 w-[40px] h-[40px] bg-rose-500 rounded-full border-2'></a>
                    <a href="#" className='ml-[1%] mt-5 w-[40px] h-[40px] bg-lime-400 rounded-full border-2'></a>
                  </div>
                </div>
                <div>
                  <h3 className='text-xm font-semibold pl-[12%] pt-5'>Size: <span className='text-xm font-normal'>Medium</span></h3>
                  <div className='mt-[4%]'>
                    <a href="#" className='ml-[12%] bg-white px-4 py-2 rounded border-1 hover:bg-black hover:text-white transition duration-700'>Medium</a>
                    <a href="#" className='ml-[1%] bg-white px-4 py-2 rounded border-1 hover:bg-black hover:text-white transition duration-700'>Large</a>
                    <a href="#" className='ml-[1%] bg-white px-4 py-2 rounded border-1 hover:bg-black hover:text-white transition duration-700'>Extra Large</a>
                  </div>
                </div>
                <div>
                  <div className='mt-[4%] flex'>
                    <h4 className='ml-[12%] border-1 w-fit px-4 py-2 border-black rounded'>
                      <a href="#" className='text-xl font-bold' onClick={()=>(setQuantity(quantity-1))}>-</a>
                      <span className='mx-8'>{quantity}</span>
                      <a href="#" className='text-xl font-bold' onClick={()=>(setQuantity(quantity+1))}>+</a>
                    </h4>
                    <a href="#" className='w-[280px] bg-[#1A0683] ml-[12%] text-white text-lg font-semibold flex items-center justify-center rounded-full hover:bg-white transition duration-700 shadow-xl hover:text-black'>
                      Add To Cart
                    </a>
                  </div>
                </div>
                <div className='mt-[4%]'>
                    <a href="#" className='xl:w-[490px] lg:w-[390px] md:w-[480px] py-3 bg-[#1A0683] ml-[12%] text-white text-lg font-semibold flex items-center justify-center rounded-full hover:bg-white transition duration-700 shadow-xl hover:text-black'>
                      Buy It Now
                    </a>
                </div>
                <div className='mt-[4%]'>
                    <a href="#" className='ml-[12%] text-black hover:underline transition duration-700'>
                      View full details ➡️
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPopUp
