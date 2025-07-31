import React from "react";
import Navbar from "../src/Components/html/navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Banner1 from "../src/assests/bannner-1.webp";
import Banner2 from "../src/assests/banner-2.webp";
import '../src/home.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false,waitForTransition: true }}
          spaceBetween={0}
          speed={800}
          loop
        >
          <SwiperSlide>
            <div className="slide">
              <img src={Banner1} alt="Property 1" className="slide-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Banner2} alt="Property 2" className="slide-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;
