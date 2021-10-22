import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from 'react';
import "swiper/swiper.scss";
import Testimony from "./Testimony";
import '../App.css'
import 'swiper/components/navigation/navigation.scss'
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

export default () => {
    useEffect(()=>{
        let el = document.querySelector(".swiper-button-next");
        el.classList.add('btn-left')
    },[])
  return (
      <div className="swiper-wrapper-1">
    <Swiper
      navigation
      spaceBetween={1}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Testimony imgSrc="https://ccinfo24.com/courses/wp-content/uploads/2019/11/pexels-photo-91227-500x500-1-150x150.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Testimony imgSrc="https://ccinfo24.com/courses/wp-content/uploads/2019/11/pexels-photo-769745-500x500-1-150x150.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Testimony imgSrc="https://ccinfo24.com/courses/wp-content/uploads/2019/11/pexels-photo-91227-500x500-1-150x150.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Testimony imgSrc="https://ccinfo24.com/courses/wp-content/uploads/2019/11/pexels-photo-769745-500x500-1-150x150.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Testimony imgSrc="https://ccinfo24.com/courses/wp-content/uploads/2019/11/pexels-photo-91227-500x500-1-150x150.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <Testimony imgSrc="https://ccinfo24.com/courses/wp-content/uploads/2019/11/pexels-photo-769745-500x500-1-150x150.jpg" />
      </SwiperSlide>
      {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
    </div>
  );
};
