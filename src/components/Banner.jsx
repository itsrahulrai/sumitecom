import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';

const Banner = () => {
    const bannerimage = [
        {   
            id:1,
            image:"images/banner/herobanner3.webp"
        },
        {   
            id:2,
            image:"images/banner/herobanner1.jpg"
        },
        {   
            id:3,
            image:"images/banner/herobanner2.jpg"
        }
    ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
            {bannerimage.map((item)=>(
                <SwiperSlide>
                    <img key={item.id} src={item.image} alt={item.image}/>
                </SwiperSlide>
            ))}
        
      </Swiper>
    </>
  )
}

export default Banner;

// {bannerimage.map((item)=>(
//     <SwiperSlide key={item.id}>
//     <img src={item.image}/>
//     </SwiperSlide>
// ))}