import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
        <div className='footerContentSection ptb--50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            <div className='footbox py-[40px] md:px-[60px] px-[20px]'>  
                <h1 className='text-2xl font-semibold mb-5'>Contact Info</h1>
                <ul>
                    <li>
                        <h1 className='font-semibold mb-1'>Phone No:</h1>
                        <a href="#">+91 9999999999</a>
                    </li>
                    <li>
                        <h1 className='font-semibold mb-1'>Email:</h1>
                        <a href="#">example@gmail.com</a>
                    </li>
                    <li>
                        <h1 className='font-semibold mb-1'>Address:</h1>
                        <a href="#">Ghar Ke bahr wlai gali me</a>
                    </li>
                </ul>
            </div>

            <div className='footbox py-[40px] md:px-[60px] px-[20px]'>  
                <h1 className='text-2xl font-semibold mb-5'>Quick Links</h1>
                <ul className='flex flex-col gap-3'>
                    <li>
                        <a href="#">My Account</a>
                    </li>
                    <li>
                        <a href="#">Cart</a>
                    </li>
                    <li>
                        <a href="#">Wishlist</a>
                    </li>
                    <li>
                        <a href="#">Product Compare</a>
                    </li>
                </ul>
            </div>

            <div className='footbox py-[40px] md:px-[60px] px-[20px]'>  
                <h1 className='text-2xl font-semibold mb-5'>Information</h1>
                <ul className='flex flex-col gap-3'>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Refund Policy</a>
                    </li>
                    <li>
                        <a href="#">Shipping & Return</a>
                    </li>
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                </ul>
            </div>

            <div className='footbox py-[40px] md:px-[60px] px-[20px]'>  
                <h1 className='text-2xl font-semibold mb-5'>Let's Get In Touch</h1>
                <ul className='flex flex-col gap-3'>
                    <li>
                        <h1 className='font-semibold mb-1'>Subscribe to our newsletter to receive news on update.</h1>
                    </li>
                    <li>
                        <input placeholder='Enter your Email' type='text' className='border border-dark outline-0 rounded p-2 bg-white w-full'/>
                    </li>
                </ul>
            </div>            
        </div>  
        <div style={{background:"#EFECFF"}} className='copyright-section grid md:grid-cols-2 grid-cols-1 gap-y-4 items-center md:px-[60px] px-[20px] py-5'>
            <h1 className='font-semibold'>Copyright © 2025 HBS all rights reserved.</h1>
            <div className='flex justify-end'>
                <img src="images/copyright/payment.png"/>
            </div>
        </div>
    </div>
  )
}

export default Footer
