import React from "react";
import Navbar from "../src/Components/html/navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Home() {
  return (
    <>
      <Navbar/>
       <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="swiper-wrapper"
      >
        <SwiperSlide>
          <div className="slide">
            <img
              src="/path-to-your-image.png"
              alt="Property"
              className="slide-img"
            />
            <div className="property-card">
              <h2>GREENS</h2>
              <p>Ambernath East, Thane</p>
              <p><strong>Land Parcel:</strong> 10 Acres</p>
              <p><strong>Floors:</strong> 18 Storey</p>
              <p>1 & 2 BHK Homes Start</p>
              <h3>₹ 36.50 Lacs* Onwards</h3>
              <button className="enquire-btn">Enquire Now</button>
              <p className="rera">RERA : P517000046171</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more SwiperSlides for more projects */}
      </Swiper>
    </div>
    </>
  );
}

export default Home;