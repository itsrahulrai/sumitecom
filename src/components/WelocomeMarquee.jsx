import React from 'react'

const WelocomeMarquee = () => {

  return (
    <div className='max-w-[1500px] mx-auto'>
        <div className='marqueebox py-[15px] md:py-[40px] bg-gray-100'>
            <marquee className="text-lg md:text-4xl font-bold">
                <ul className='flex gap-x-9'>
                    <li><h1>Welcome to our store</h1></li>
                    <li><h1>Welcome to our store</h1></li>
                    <li><h1>Welcome to our store</h1></li>
                    <li><h1>Welcome to our store</h1></li>
                    <li><h1>Welcome to our store</h1></li>
                    <li><h1>Welcome to our store</h1></li>
                    <li><h1>Welcome to our store</h1></li>
                    <li><h1>Welcome to our store</h1></li>
                    <li><h1>Welcome to our store</h1></li>
                </ul>
            </marquee>
        </div>
    </div>
  )
}

export default WelocomeMarquee;