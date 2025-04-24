import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const Testimonial = () => {

const testimonialcontent = [
        {
            id:1,
            texthead:"Product Quality!",
            textpara:`I absolutely love shopping here! The selection is 
                            fantastic, the prices are competitive, Highly recommend.`,
            image:"images/testimonial/testimonial-1.webp",
            name:"Jyoti Gupta"
        },
        {
            id:2,
            texthead:"Product Quality!",
            textpara:`I absolutely love shopping here! The selection is 
                            fantastic, the prices are competitive, Highly recommend.`,
            image:"images/testimonial/testimonial-1.webp",
            name:"Jyoti Gupta"
        },
        {
            id:3,
            texthead:"Product Quality!",
            textpara:`I absolutely love shopping here! The selection is 
                            fantastic, the prices are competitive, Highly recommend.`,
            image:"images/testimonial/testimonial-1.webp",
            name:"Jyoti Gupta"
        },
        {
            id:4,
            texthead:"Product Quality!",
            textpara:`I absolutely love shopping here! The selection is 
                            fantastic, the prices are competitive, Highly recommend.`,
            image:"images/testimonial/testimonial-1.webp",
            name:"Jyoti Gupta"
        },
        {
            id:5,
            texthead:"Product Quality!",
            textpara:`I absolutely love shopping here! The selection is 
                            fantastic, the prices are competitive, Highly recommend.`,
            image:"images/testimonial/testimonial-1.webp",
            name:"Jyoti Gupta"
        },
        {
            id:6,
            texthead:"Product Quality!",
            textpara:`I absolutely love shopping here! The selection is 
                            fantastic, the prices are competitive, Highly recommend.`,
            image:"images/testimonial/testimonial-1.webp",
            name:"Jyoti Gupta"
        }
    ]

  return (
    <div className='max-w-[1500px] mx-auto'>
        <div className='textimonial-section lg:px-13 md:px-8 px-4'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        speed={800}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,FreeMode, Autoplay]}
        className="mySwiper testimonialSection"
        breakpoints={{
            320: { slidesPerView: 1},
            480: { slidesPerView: 1},
            768: { slidesPerView: 2},
            1024: { slidesPerView: 3},
            1280: { slidesPerView: 3},
        }}
        >
            {testimonialcontent.map((items)=>(
                <SwiperSlide>
                <div key={items.id} className='testimonialcontentsection ptb--50'>
                    <div className='testimonialbox py-[30px] px-[30px] rounded' style={{background:"#EFECFF"}}>
                        <h1 className='text-1xl font-semibold'>{items.texthead}</h1>
                        <ul className='flex gap-2 text-amber-300'>
                            <li><i class="ri-star-fill"></i></li>
                            <li><i class="ri-star-fill"></i></li>
                            <li><i class="ri-star-fill"></i></li>
                            <li><i class="ri-star-fill"></i></li>
                            <li><i class="ri-star-fill"></i></li>
                        </ul>
                        <h3 className='mt-4 mb-7 text-xl italic'>
                            {items.textpara}
                        </h3>
                        <div className='flex items-center gap-4'>
                            <img className='w-[50px]' src={items.image}/>
                            <h1 className='text-lg font-semibold'>{items.name}</h1>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
       </div>      
    </div>
  )
}

export default Testimonial
