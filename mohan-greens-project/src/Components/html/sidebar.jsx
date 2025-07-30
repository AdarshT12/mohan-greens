import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../css/sidebar.css";
import freePickupImage from "../../assests/freepick.png";

const EnquiryForm = () => {
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert("Please provide consent before submitting.");
      return;
    }
    alert("Form submitted!");
  };

  return (
    <div className="enquiry-wrapper">
      {/* Header Strip */}
      <div className="header-strip">
        <div className="schedule-visit">Schedule Visit</div>
        <div className="divider"></div>
        <div className="phone-number">
          <span className="phone-icon"></span> +91 77100 65994
        </div>
      </div>

      {/* Call Back Box */}
      <div className="call-back-box">
        <button className="request-call">Request Call Back</button>
        <a
          href="https://wa.me/917710065994"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </div>

      {/* Enquiry Heading */}
      <h3 className="enquire-heading">ENQUIRE NOW</h3>

      {/* Form Starts */}
      <form className="enquiry-form-fields" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="name-input"
        />
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={setPhone}
          inputClass="custom-phone-input"
          buttonClass="custom-phone-button"
          containerClass="custom-phone-container"
        />

        {/* Consent Checkbox */}
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={consent}
            onChange={() => setConsent(!consent)}
          />
          <span className="consent-text">
            I Consent to the Processing of Provided Data According To{" "}
            <a href="#">Privacy Policy</a> |{" "}
            <a href="#">Terms & Conditions</a>. I Authorize Blox and its
            representatives to Call, SMS, Email or WhatsApp Me About Its
            Products and Offers. This Consent Overrides Any Registration For
            DNC/NDNC.
          </span>
        </label>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Pickup Banner */}
      <div className="pickup-banner">
        <img
          src={freePickupImage}
          alt="Pickup & Drop"
          className="pickup-img"
        />
        
      </div>
    </div>
  );
};

export default EnquiryForm;
