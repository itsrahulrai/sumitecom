import React from 'react'

const OtpPage = () => {
  return (
    <>
        <div className='max-w-[1500px] max-auto'>
        <div className='bg-[url(images/banner/Herobanner2.webp)] bg-cover min-h-screen flex items-center justify-center animate__animated animate__fadeIn'>
            <div className='bg-white w-[450px] p-6 shadow-lg rounded-lg animate__animated animate__bounceInDown'>
                <img className='w-full h-[200px] animate__animated animate__pulse animate__infinite' src="images/svgimages/otp.svg"/>
                <h3 className='text-center font-semibold text-indigo-600 my-5 text-2xl'>Your OTP !</h3>
                <from className="flex flex-col gap-3 items-center">
                    <div className='flex gap-3'>
                        <input
                        type="text"
                        className='p-2 border border-gray-400 w-[45px] rounded outline-transparent'
                        required
                        />
                        <input
                        type="text"
                        className='p-2 border border-gray-400 w-[45px] rounded outline-transparent'
                        required
                        />
                        <input
                        type="text"
                        className='p-2 border border-gray-400 w-[45px] rounded outline-transparent'
                        required
                        />
                        <input
                        type="text"
                        className='p-2 border border-gray-400 w-[45px] rounded outline-transparent'
                        required
                        />
                    </div>
                    <button className='font-semibold px-10 py-2 bg-indigo-500 rounded text-white mt-3'>Proceed</button>
                </from>
                <div className='text-center my-[20px]'>
                    <h2 className='mb-2'>Don't have an Account ! <a href="#" className='font-semibold text-indigo-600'>Signup Now</a></h2>
                    <h2 className='mb-2'>Do You have an Account ! <a href="#" className='font-semibold text-indigo-600'>Login Now</a></h2>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default OtpPage
