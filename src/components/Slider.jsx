import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div>
      <header>
          <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[600px] "
          >
            <SwiperSlide>
              <img src="/img/s1.jpg" alt="" className='h-full object-cover w-full'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/s2.jpg" alt="" className='h-full object-cover w-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/s3.jpg" alt="" className='h-full object-cover w-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/s4.jpg" alt="" className='h-full object-cover w-full' />
            </SwiperSlide>
          </Swiper>
        </header> 
    </div>
  )
}

export default Slider
