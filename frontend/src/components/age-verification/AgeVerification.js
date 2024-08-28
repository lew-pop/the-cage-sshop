import React, { useState, useEffect } from "react";
import "./AgeVerification.css";

const AgeVerification = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
    if (!ageVerified) {
      setShowModal(true); // Show the modal if the user has not verified their age
    } else {
      setIsVerified(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVerified(true);
    setShowModal(false);
  };

  const handleNo = () => {
    alert("Sorry, you must be 21 or older to enter this site.");
    // You can redirect to another page or simply prevent further access
    window.location.href = "https://www.example.com"; // Replace with a relevant URL
  };

  if (isVerified) return null; // Don't show the modal if the user is verified

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-header">
            <h2 className="header-text">Age Verification</h2>
          </div>
          <div className="modal-image">
            <img src="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/app_modal-2.0.png" alt="" />
          </div>
          <div className="age-disclaimer">
            <h4 className="disclaimer-text">MUST BE 21 YEARS OR OLDER</h4>
          </div>
          <div className="text-container">
            <p className="modal-content">
              The products available on The Cage SShop Online are age-restricted and
              intended for individuals of legal smoking age only.<br/>
              
            </p>
            <p className="modal-content">
            By entering, you confirm that you are of legal age to purchase nicotine products in your jurisdiction 
            and agree to comply with all local laws and regulations.
            </p>
          </div>
          <div className="modal-buttons">
            <button onClick={handleYes} className="modal-button-yes">
              Yes, I Agree
            </button>
            <button onClick={handleNo} className="modal-button-no">
              No, I Don't Agree
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AgeVerification;
