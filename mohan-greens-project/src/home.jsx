import React, { useState } from "react";
import Navbar from "../src/Components/html/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Banner1 from "../src/assests/bannner-1.webp";
import Banner2 from "../src/assests/banner-2.webp";

import "./home.css";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Navbar />

      {/* Swiper Slider */}
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          speed={800}
        >
          <SwiperSlide>
            <div className="slide">
              <img src={Banner1} alt="Banner 1" className="slide-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Banner2} alt="Banner 2" className="slide-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Project Content */}
      <div className="project-container">
        <div className="project-content">
          <h2>Mohan Precious Greens</h2>
          <div className="underline" />

          <p>
            Mohan Precious Greens is a residential project by the Mohan Group,
            offering thoughtfully designed 1 & 2 BHK Homes with a focus on
            modern living and sustainability. The project features over 30
            lifestyle amenities, including a lap pool, clubhouse, mini-theatre,
            gym, spa, squash court, skating rink, cycling track, aroma gardens,
            and dedicated zones for seniors and children. Its architecture
            promotes eco-conscious living with green decks, landscaped gardens,
            and sustainable infrastructure, creating a healthy and vibrant
            community environment.
          </p>

          {showMore && (
            <p>
              Strategically located just minutes away from Ambernath railway
              station, Mohan Precious Greens offers excellent connectivity to
              Mumbai, Thane, and surrounding areas. The project enjoys close
              proximity to reputed schools, hospitals, supermarkets, and daily
              conveniences, making it a practical choice for families and
              working professionals alike. With a perfect blend of comfort,
              connectivity, and lifestyle, it stands as an ideal residential
              option in the fast-developing Ambernath East locality.
            </p>
          )}

          <a
            href="#"
            className="read-link"
            onClick={(e) => {
              e.preventDefault();
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Read less" : "Read more"}
          </a>

          <button className="brochure-btn">Request Brochure</button>
        </div>

        <div className="project-image">
          {/* Add image or map here if needed */}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-container">
        <h2 className="pricing-heading">Area & Pricing</h2>
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
            <p className="size">610–710 Sq. ft</p>
            <p className="price">₹ 52.50 Lacs* Onwards</p>
            <button className="costing-button">Complete Costing Details</button>
          </div>
        </div>
      </div>
        <div className="layout-container">
      <div className="layout-card">
        <h2 className="layout-heading">Master Plan Layout</h2>
        <div className="image-box left-rounded">
          <img src="/masterplan.jpg" alt="Master Plan" className="layout-image" />
          <div className="overlay-text">Request Master Plan Layout</div>
        </div>
        <button className="layout-btn">Request Master Plan Layout</button>
      </div>

      <div className="layout-card">
        <h2 className="layout-heading">Unit Plan Layout</h2>
        <div className="image-box right-rounded">
          <img src="/unitplan.jpg" alt="Unit Plan" className="layout-image" />
          <div className="overlay-text">Request Unit Plan Layout</div>
        </div>
        <button className="layout-btn">Request Unit Plan Layout</button>
      </div>
    </div>
        <div className="location-section">
      <h2 className="location-heading">Location</h2>
      <div className="underline" />

      <div className="map-container">
        <iframe
          title="Mohan Precious Greens Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.042356090269!2d73.17162891437993!3d19.192738952647885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be794c409bc2fc7%3A0x8a34c8aa0ed3de7f!2sMohan%20Precious%20Greens%20(MPG)!5e0!3m2!1sen!2sin!4v1691216929184!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
        <div className="footer-container">

        <p>Project MahaRERA No. – P51700046171</p>
        <p>Agent MahaRERA No. – A51900029429</p>
        <p>
          (<a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noreferrer">
            https://maharera.maharashtra.gov.in/
          </a>)
        </p>
      </div>

      <p className="disclaimer">
        Disclaimer : The content is for information purposes only and does not constitute an offer to avail of any service.
        The prices mentioned are subject to change without notice and the properties mentioned are subject to availability.
        Images are for representation purposes only. We are the authorized marketing partner, Project RERA No:
        P51700046171. We may send updates to the mobile number/email id registered with us.
      </p>

      <div className="footer-bottom">
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
        <p>All Rights Reserved. © 2025 Method & Madness Technology Pvt. Ltd</p>
      </div>
    </>
  );
}

export default Home;
