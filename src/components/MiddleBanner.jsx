import React from "react";

const MiddleBanner = () => {

    const productimg = [
        {
            id:1,
            image:"images/banner/smallbanner2.jpg"
        },
        {
            id:2,
            image:"images/banner/samllbanner3.jpg"
        }
    ]
    
    return(
        <>
            <div className="max-w-[1500px] mx-auto">
                <div className="pt-4 pb-7 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3 lg:gap-6 lg:px-13 md:px-8 px-4"> 
                    {productimg.map((items)=>(
                        <img key={items.id} className="rounded" src={items.image}/>                    
                    ))}
                </div>
            </div>
        </>
    )
}

export default MiddleBanner;