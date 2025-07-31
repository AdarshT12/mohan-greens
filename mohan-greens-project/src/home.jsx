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
    
    <div className="project-container">
      <div className="project-content">
        <h2>Mohan Precious Greens</h2>
        <div className="underline" />
        <p>
          Mohan Precious Greens is a residential project by the Mohan Group, offering thoughtfully designed 1 & 2 BHK Homes with a focus on modern living and sustainability. The project features over 30 lifestyle amenities, including a lap pool, clubhouse, mini-theatre, gym, spa, squash court, skating rink, cycling track, aroma gardens, and dedicated zones for seniors and children. Its architecture promotes eco-conscious living with green decks, landscaped gardens, and sustainable infrastructure, creating a healthy and vibrant community environment.
        </p>
        <p>
          Strategically located just minutes away from Ambernath railway station, Mohan Precious Greens offers excellent connectivity to Mumbai, Thane, and surrounding areas. The project enjoys close proximity to reputed schools, hospitals, supermarkets, and daily conveniences, making it a practical choice for families and working professionals alike. With a perfect blend of comfort, connectivity, and lifestyle, it stands as an ideal residential option in the fast-developing Ambernath East locality.
        </p>
        <a href="#" className="read-link">Read less</a>
        <button className="brochure-btn">
          
          Request Brochure
        </button>
      </div>
      <div className="project-image">
        
      </div>
    </div>
      <div className="pricing-container">
      <h2 className="pricing-heading">Area & pricing</h2>
      <div className="underline" />
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>1 BHK</h3>
          <p className="size">500 Sq. ft</p>
          <p className="price">₹ 36.50 Lacs* Onwards</p>
          <button className="costing-button">Complete Costing Details</button>
        </div>
        <div className="pricing-card">
          <h3>2 BHK</h3>
          <p className="size">610-710 Sq. ft</p>
          <p className="price">₹ 52.50 Lacs* Onwards</p>
          <button className="costing-button">Complete Costing Details</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;