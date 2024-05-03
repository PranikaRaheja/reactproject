import React from "react";
import "../styles/main.css"; // Import your CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="/images/hotelc.jpg" alt="Background" className="bg-image" />
      <div className="landing-content">
        <h1>Venturia</h1>
        <p>
          Discover your
          <br />
          next adventure with us!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
