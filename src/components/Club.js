import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Club.css"; // Import the CSS file

const About = () => {
  return (
    <div className="login-container">
      <Navbar />
      <div className="login-page">
        <video
          className="video-background"
          autoPlay
          loop
          muted
          delay={100000000}
        >
          <source src="videos/myvid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="login-box-about1">
          <h2>Our clubs</h2>
          <p>
            <b>
              Embark on a journey of connection and adventure with our Clubs.
            </b>
            <br /> Join our Trekking Club for epic trails, our Camping Club for
            nights under the stars, or our Photography Club to capture every
            moment. <br />
            <b>
              Connect with like-minded explorers, plan trips together, and
              unlock exclusive discounts on gear and travel packages.
            </b>
            <br /> Join us and let the adventures begin!
          </p>
        </div>
        <div className="login-box-about2">
          <h3>Join a club ! </h3>
          <p>
            <table>
              <tr>
                <td>Trekking Club</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Camping Club </td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Stargazing Club</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Boating Club</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
            </table>
          </p>
        </div>
      </div>
      <Footer className="footer" /> {/* Apply the footer class */}
    </div>
  );
};

export default About;
