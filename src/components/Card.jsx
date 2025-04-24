import React, { useState } from 'react';

const Card = ({ cardtitle, cardsubtitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleModalToggle = (product = null) => {
    setSelectedProduct(product);
    setIsModalOpen(!isModalOpen);
  };

  const productcard = [
    {
      id: 1,
      image: 'images/cardproducts/product1.webp',
      textsub: "Womens",
      textrating: "Rating",
      textspanrating: 5,
      productname: "White Shirt",
      price: "900",
      oldprice: "1100",
      available: "In Stock",
      discount: 20,
    },
    {
      id: 2,
      image: 'images/cardproducts/product2.webp',
      textsub: "Girls",
      textrating: "Rating",
      textspanrating: 4.5,
      productname: "White Short Top",
      price: "1100",
      oldprice: "1300",
      available: "In Stock",
      discount: 24,
    },
    {
      id: 3,
      image: 'images/cardproducts/product3.webp',
      textsub: "Womens",
      textrating: "Rating",
      textspanrating: 4.1,
      productname: "Red Check Shirt",
      price: "800",
      oldprice: "1000",
      available: "In Stock",
      discount: 17,
    },
    {
      id: 4,
      image: 'images/cardproducts/product4.webp',
      textsub: "Girls",
      textrating: "Rating",
      textspanrating: 4.6,
      productname: "Blue Check Shirt",
      price: "1200",
      oldprice: "1400",
      available: "In Stock",
      discount: 22,
    },
    {
      id: 5,
      image: 'images/cardproducts/product5.webp',
      textsub: "Mens",
      textrating: "Rating",
      textspanrating: 5,
      productname: "Fully Black Shirt",
      price: "900",
      oldprice: "1100",
      available: "In Stock",
      discount: 28,
    },
    {
      id: 6,
      image: 'images/cardproducts/product6.webp',
      textsub: "Womens",
      textrating: "Rating",
      textspanrating: 4.8,
      productname: "Red Deep Suit",
      price: "1500",
      oldprice: "1800",
      available: "In Stock",
      discount: 19,
    },
    {
      id: 7,
      image: 'images/cardproducts/product7.webp',
      textsub: "Girls",
      textrating: "Rating",
      textspanrating: 3.9,
      productname: "Faded Denim Jacket",
      price: "1300",
      oldprice: "1600",
      available: "In Stock",
      discount: 23,
    },
    {
      id: 8,
      image: 'images/cardproducts/product8.webp',
      textsub: "Womens",
      textrating: "Rating",
      textspanrating: 5,
      productname: "Yellow 2pic Suit",
      price: "2000",
      oldprice: "2500",
      available: "In Stock",
      discount: 20,
    },
  ];

  return (
    <>
      <div className='max-w-[1500px] mx-auto'>
        <div className='card-container--ptb--50 card-container-section'>
          <h1 className='section-h1'>{cardtitle}</h1>
          <h5 className='section-h5'>{cardsubtitle}</h5>

          <div className='w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 card-container'>
            {productcard.map((item) => (
              <div className='card-box relative' key={item.id}>
                <img src={item.image} alt={item.productname} />
                <div className='card-text'>
                  <button><i className="ri-shopping-bag-3-line"></i> Shop Now</button>
                </div>
                <div className='ulli-box'>
                  <ul>
                    <li><i className="ri-heart-3-line"></i></li>
                    <li><i className="ri-shopping-cart-2-line"></i></li>
                    <li onClick={() => handleModalToggle(item)}>
                      <i className="ri-eye-line cursor-pointer hover:text-red-600"></i>
                    </li>
                  </ul>
                </div>
                <div className='card-badge absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded'>
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
                        <h3 className='line-through text-gray-400'>₹{item.oldprice}</h3>
                      </div>
                      <h4 className='text-green-600'>{item.available}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[600px] relative shadow-lg">
            <button
              onClick={() => handleModalToggle(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.productname}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">{selectedProduct.productname}</h2>
            <p className="text-sm text-gray-600">{selectedProduct.textsub}</p>
            <p className="mt-2">Rating: {selectedProduct.textspanrating} ★</p>

            <div className="flex gap-3 mt-4">
              <span className="text-xl text-red-600 font-bold">₹{selectedProduct.price}</span>
              <span className="line-through text-gray-500">₹{selectedProduct.oldprice}</span>
              <span className="text-green-600 font-medium">{selectedProduct.discount}% OFF</span>
            </div>

            <p className="mt-3 text-sm text-gray-500">{selectedProduct.available}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
