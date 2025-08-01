import React, { useState } from "react";
import "../../Components/css/popup.css";
import PhoneInput from "react-phone-input-2";
import 'remixicon/fonts/remixicon.css';

const EnquiryPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !consent) {
      alert("Please fill all fields and accept terms.");
      return;
    }

    // Trigger brochure download
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Brochure.pdf";
    link.click();

    // Close popup
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content" role="dialog" aria-modal="true">
        <button className="close-btn" onClick={onClose} aria-label="Close Popup">
          &times;
        </button>

        <h2 className="popup-heading">ENQUIRE NOW</h2>
        <div className="underline" />

        <form className="popup-body" onSubmit={handleSubmit}>
          <div className="popup-left">
           <div className="we-promise-box">
            <div className="we-promise-header">WE PROMISE</div>
            <ul className="we-promise-list">
              <li>
                <i className="ri-headphone-line"></i>
                <div>
                  <strong>INSTANT</strong><br />
                  <span>CALL BACK</span>
                </div>
              </li>
              <li>
                <i className="ri-taxi-line"></i>
                <div>
                  <strong>FREE</strong><br />
                  <span>SITE VISIT</span>
                </div>
              </li>
              <li>
                <i className="ri-currency-line"></i>
                <div>
                  <strong>UNMATCHED</strong><br />
                  <span>PRICE</span>
                </div>
              </li>
            </ul>
          </div>
          </div>

          <div className="popup-right">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
            <div className="phone-input">
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
                  autoFocus: false
                }}
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
                <a href="home.jsx"> Privacy Policy</a> | 
                <a href="home.jsx"> Terms & Conditions</a>.
                I Authorize Blox and its representatives to Call, SMS, Email or WhatsApp Me About Its Products and Offers. This Consent Overrides Any Registration For DNC/NDNC.
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>

        <div className="availability-box">
          <div className="availability-header">GET INFORMATION ON AVAILABILITIES</div>
          <div className="availability-options">
            <div className="option"><i className="ri-shield-check-line"></i> Available Units</div>
            <div className="option"><i className="ri-shield-check-line"></i> Payment Plan</div>
            <div className="option"><i className="ri-shield-check-line"></i> Floor Plans</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
