import React, { useState } from 'react';
import '../css/tabLayout.css'; 
import 'remixicon/fonts/remixicon.css';

const tabData = {
  Station: [
    "Ambernath Railway Station – 2.1 Kms",
    "Badlapur Railway Station – 7 Kms",
    "Ulhasnagar Railway Station – 6 Kms",
  ],
  "School & Colleges": [
    "Arya Gurukul – 100 mts",
    "Ryan International School – 1.6 Kms"
  ],
  Shopping: [
    "D Mart – 3.7 Kms",
    "Reliance Smart – 200 Mts",
    "Sawant Arcade Mall – 2.1 Kms",
    "Mohan Galleria Shopping Mall – 5 Kms"
  ],
  Hospitals: [
    "Sanjeevani Hospital – 2 Kms",
    "Dr. Koltes Shree Seva Hospital – 4 Kms",
    "Vijay Multispecialty Hospital – 3.3 Kms"
  ]
};

const getTabIcon = (tab) => {
  switch (tab) {
    case 'Station':
      return <i class="ri-train-line"></i>;
    case 'School & Colleges':
      return <i class="ri-school-line"></i>;
    case 'Shopping':
      return <i class="ri-shopping-bag-line"></i>;
    case 'Hospitals':
      return <i class="ri-hospital-line"></i>;
    default:
      return '📍';
  }
};

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState("Station");

  return (
    <div className="tab-wrapper">
      <div className="tab-header">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

     <div className="tab-content">
        <ul className="tab-list">
            {tabData[activeTab].map((item, idx) => (
            <li key={idx} className="tab-item">
                <span className="icon">{getTabIcon(activeTab)}</span> {item}
            </li>
            ))}
        </ul>
        </div>

      <div className="location-button-container">
        <button className="location-button">Request Location Details</button>
      </div>
    </div>
  );
};

export default TabLayout;
