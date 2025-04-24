import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode,Autoplay, Navigation } from 'swiper/modules';


const TopCategory = () => {

    const topitems = [
        {
            id:1,
            image:"images/topcategory/kids.webp",
            text:"KIDS FASHION"
        },
        {
            id:2,
            image:"images/topcategory/girl.webp",
            text:"GIRLS FASHION"
        },
        {
            id:3,
            image:"images/topcategory/boy.webp",
            text:"BOYS FASHION"
        },
        {
            id:4,
            image:"images/topcategory/men.webp",
            text:"MENS FASHION"
        },
        {
            id:5,
            image:"images/topcategory/women.webp",
            text:"WOMENS FASHION"
        },
        {
            id:6,
            image:"images/topcategory/kids.webp",
            text:"KIDS FASHION"
        },
        {
            id:7,
            image:"images/topcategory/girl.webp",
            text:"GIRLS FASHION"
        },
        {
            id:8,
            image:"images/topcategory/boy.webp",
            text:"BOYS FASHION"
        },
        {
            id:9,
            image:"images/topcategory/men.webp",
            text:"MENS FASHION"
        },
        {
            id:10,
            image:"images/topcategory/women.webp",
            text:"WOMENS FASHION"
        }
    ]

  return (
    <>
        <div className='max-w-[1500px] mx-auto'>
            <div className='topCategory-slider ptb--50'> 
                <h1 className='section-h1'>Top Category</h1>    
                <h5 className='section-h5'>Follow the most popular trends and get exclusive items in this summer.</h5>   
                <Swiper
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[FreeMode, Autoplay, Navigation]}
                    className="mySwiper topcategorySlider"
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        480: { slidesPerView: 3, spaceBetween: 5 },
                        768: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: 4, spaceBetween: 15 },
                        1280: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                >
                    {topitems.map((item)=>(
                        <SwiperSlide key={item.id}>
                            <a href="#">
                                <div className='topcategory-imgbox'>        
                                    <img src={item.image}/>
                                    <div className='text-box'>
                                        <h1>{item.text}</h1>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}                
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default TopCategory
