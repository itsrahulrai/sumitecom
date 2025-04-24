import React from "react";

const ProvidedServices = () => {

    const providedservice=[
        {
            id:1,
            title:"Worldwide Shipping",
            subtitle:"World Wide Free Shipping",
            image:"images/provided-services/shipping1.png"
        },
        {
            id:2,
            title:"Secured Payment",
            subtitle:"Safe & Secured Payments",
            image:"images/provided-services/secure1.png"
        },
        {
            id:3,
            title:"30-Days Free Returns",
            subtitle:"Within 30 Days for an Exchange",
            image:"images/provided-services/return1.png"
        },
        {
            id:4,
            title:"Surprise Gift",
            subtitle:"Free gift cards & vouchers",
            image:"images/provided-services/gift1.png"
        }
    ]

    return(
        <>
        <div className="max-w-[1500px] mx-auto">
            <div className="providedservice-section py-3">
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    {providedservice.map((items)=>(
                        <div key={items.id} className="border border-gray-300 border-r-0 flex px-[10px] lg:py-[50px] md:py-[30px] py-[20px] items-center provided-content-section">
                            <div className="image-box">
                                <img src={items.image}/>
                            </div>
                            <div>
                                <h1>{items.title}</h1>
                                <h2>{items.subtitle}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default ProvidedServices;