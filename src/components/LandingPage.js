import React from "react";
import "../styles/main.css"; // Import your CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video autoPlay muted loop className="video-bg">
        <source src="videos/myvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
