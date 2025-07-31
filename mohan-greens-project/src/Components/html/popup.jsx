import React, { useState } from "react";
import "../../Components/css/popup.css";

const EnquiryPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim() || !consent) {
      alert("Please fill all fields and accept terms.");
      return;
    }

    // Form is valid — download brochure
    const link = document.createElement("a");
    link.href = "/brochure.pdf"; 
    link.download = "Brochure.pdf";
    link.click();

    // Close popup after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-heading">ENQUIRE NOW</h2>
        <div className="underline" />

        <div className="popup-body">
          <div className="popup-left">
            <h4 className="promise-title">WE PROMISE</h4>
            <ul className="promise-list">
              <li><strong>INSTANT</strong><br />CALL BACK</li>
              <li><strong>FREE</strong><br />SITE VISIT</li>
              <li><strong>₹ UNMATCHED</strong><br />PRICE</li>
            </ul>
          </div>

          <div className="popup-right">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            <div className="phone-input">
              <span className="country-code">🇮🇳 +91</span>
              <input
                type="text"
                placeholder="Enter Your Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="checkbox-area">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <label htmlFor="consent">
                I Consent to The Processing of Provided Data According To 
                <a href="#"> Privacy Policy</a> | 
                <a href="#"> Terms & Conditions</a>.
              </label>
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <div className="availability-section">
          <button>Available Units</button>
          <button>Payment Plan</button>
          <button>Floor Plans</button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
