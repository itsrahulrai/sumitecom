import React, { useState } from 'react'

const Card = ({cardtitle, cardsubtitle }) => {
  
  const productcard = [
    {
      id:1,
      image:'images/cardproducts/product1.webp',
      textsub:"Womens",
      textrating:"Rating",
      textspanrating:(5),
      productname:"White Shirt",
      price:"900",
      oldprice:"700",
      available:"In Stock",
      discount:20     
    },
    {
      id:1,
      image:'images/cardproducts/product2.webp',
      textsub:"Girls",
      textrating:"Rating",
      textspanrating:(4.5),
      productname:"White Short Top",
      price:"1100",
      oldprice:"1300",
      available:"In Stock",
      discount:24        
    },
    {
      id:1,
      image:'images/cardproducts/product3.webp',
      textsub:"Womens",
      textrating:"Rating",
      textspanrating:(4.1),
      productname:"Red Check Shirt",
      price:"800",
      oldprice:"1000",
      available:"In Stock",
      discount:17        
    },
    {
      id:1,
      image:'images/cardproducts/product4.webp',
      textsub:"Girls",
      textrating:"Rating",
      textspanrating:(4.6),
      productname:"Blue Check Shirt",
      price:"1200",
      oldprice:"1400",
      available:"In Stock",
      discount:22      
    },
    {
      id:1,
      image:'images/cardproducts/product5.webp',
      textsub:"Mens",
      textrating:"Rating",
      textspanrating:(5),
      productname:"Fully Black Shirt",
      price:"900",
      oldprice:"1100",
      available:"In Stock",
      discount:28      
    },
    {
      id:1,
      image:'images/cardproducts/product6.webp',
      textsub:"Womens",
      textrating:"Rating",
      textspanrating:(4.8),
      productname:"Red Deep Suit",
      price:"1500",
      oldprice:"1800",
      available:"In Stock",
      discount:19    
    },
    {
      id:1,
      image:'images/cardproducts/product7.webp',
      textsub:"Girls",
      textrating:"Rating",
      textspanrating:(3.9),
      productname:"Faded Denim Jacket",
      price:"1300",
      oldprice:"1600",
      available:"In Stock",
      discount:23     
    },
    {
      id:1,
      image:'images/cardproducts/product8.webp',
      textsub:"Womens",
      textrating:"Rating",
      textspanrating:(5),
      productname:"Yellow 2pic Suit",
      price:"2000",
      oldprice:"2500",
      available:"In Stock",
      discount:20      
    }
  ]

  
  
    const [isModelOpen, setIsModelOpen] = useState(false);
  

 
  

  return (   

    <>  
    {/* <div className='max-w-7xl mx-auto'> */}
    <div className='max-w-[1500px] mx-auto'>
      <div className='card-container--ptb--50 card-container-section'>
        <h1 className='section-h1'>{cardtitle}</h1>    
        <h5 className='section-h5'>{cardsubtitle}</h5>  
        <div className='w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 card-container'>
            {productcard.map((item) => (
              <div className='card-box' key={item.id}>
                <img src={item.image}/>
                <div className='card-text'>
                  <button><i class="ri-shopping-bag-3-line"></i> Shop Now</button>
                </div>
                <div className='ulli-box'>
                    <ul>
                      <li><i class="ri-heart-3-line"></i></li>
                      <li><i class="ri-shopping-cart-2-line"></i></li>
                      <li onClick={() => {setIsModelOpen(true); alert("Button clicked!");}}>
                          <i className="ri-eye-line"></i>
                        </li>
                    </ul>
                </div>
                <div className='card-badge'>
                  <h3>{item.discount}%</h3>
                </div>
                <div className='mt-[-5%] rounded-b-lg card-detail-box space-y-4'>
                  <div className='pt-[8%] p-3'>
                    <div className='flex justify-between price-avialable-box price-avialable-box2'>
                      <h6 className='text-sm text-gray-600'>{item.productname}</h6>
                      <h6 className='text-sm text-gray-600'>{item.textrating} <span className='text-amber-700'>{item.textspanrating}*</span></h6>
                    </div>
                    <h1>{item.productname}</h1>
                    <div className='flex justify-between price-avialable-box'>
                      <div className='flex gap-3'>
                        <h2>₹{item.price}</h2>
                        <h3>₹{item.oldprice}</h3>
                      </div>
                      <h4>{item.available}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            
        </div>
      </div>
    </div>
    </>
  )
}

export default Card

