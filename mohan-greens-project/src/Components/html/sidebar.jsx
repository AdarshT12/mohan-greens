import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../css/sidebar.css";
import freePickupImage from "../../assets/freepick.png";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!phone || phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!consent) {
      alert("Please provide consent before submitting.");
      return;
    }

    try {
      const response = await fetch("https://yourdomain.com/enquiry.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Form submitted successfully!");
        setName("");
        setPhone("");
        setConsent(false);
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error("Submission failed:", err);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="enquiry-wrapper">
      <div className="header-strip">
        <div className="schedule-visit">Schedule Visit</div>
        <div className="divider"></div>
        <div className="phone-number">
          <span className="phone-icon"></span> +91 77100 65994
        </div>
      </div>

      <div className="call-back-box">
        <button className="request-call" onClick={handleSubmit}>
          Request Call Back
        </button>
        <a href="https://wa.me/919890834878" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </div>

      <h3 className="enquire-heading">ENQUIRE NOW</h3>

      <form className="enquiry-form-fields" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <PhoneInput
          country={"in"}
          value={phone}
          onChange={setPhone}
          inputClass="custom-phone-input"
          buttonClass="custom-phone-button"
          containerClass="custom-phone-container"
          inputProps={{
            required: true,
            name: "phone",
            autoFocus: false,
          }}
        />

        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={consent}
            onChange={() => setConsent(!consent)}
          />
          <span className="consent-text">
            I Consent to the Processing of Provided Data According To{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>. I Authorize Blox and its representatives to Call, SMS, Email
            or WhatsApp Me About Its Products and Offers. This Consent
            Overrides Any Registration For DNC/NDNC.
          </span>
        </label>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <div className="pickup-banner">
        <img src={freePickupImage} alt="Pickup & Drop" className="pickup-img" />
      </div>
    </div>
  );
};

export default EnquiryForm;
