import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const Navbar = () => { 
    
    const [openMenu,setMenuOpen] = useState(false)
    
    return(
        <>
        <div className="max-w-[1500px] mx-auto">
            <nav className="flex justify-between items-center shadow">
                <div className="logo-box">
                    <img src="images/logo/logo.png"/>
                </div>
                <div className={`menutab ${openMenu ? "showMenu" : ""}`}>
                    <ul className="flex">
                        <li><a href="#" className="font-semibold uppercase">Home</a></li>
                        <li><a href="#" className="font-semibold uppercase">Men</a></li>
                        <li><a href="#" className="font-semibold uppercase">Women</a></li>
                        <li><a href="#" className="font-semibold uppercase">Kids</a></li>
                        <li><a href="#" className="font-semibold uppercase">Products <sup className="text-rose-600">NEW</sup></a></li>
                    </ul>
                </div>
                <div className="flex gap-[30px] me-5 icon-box">
                    <a href="#" className="flex flex-col items-center">
                        <i className="ri-user-3-line"></i>
                        <h5>Profile</h5>
                    </a>
                    <a href="#" className="flex flex-col items-center">
                        <i className="ri-heart-3-line"></i>
                        <h5>Wishlist</h5>
                    </a>
                    <a href="#" className="flex flex-col items-center">
                        <i className="ri-shopping-bag-3-line"></i>
                        <h5>Bag</h5>
                    </a>
                </div>
                <div className="bar-box">
                    <a href="#" onClick={()=>setMenuOpen(!openMenu)}>
                        {openMenu ? <i class="ri-close-line ri-lg font-bold"></i> : <i className="ri-menu-line ri-lg font-bold"></i>}
                    </a>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Navbar;