// User.js

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/User.css"; // Import the CSS file
import "../styles/main.css";

const User = () => {
  return (
    <div className="login-container">
      <Navbar />
      <div className="login-page">
        <img src="/images/hotelc.jpg" alt="Background" className="bg-image" />
        <div className="login-box">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer className="footer" /> {/* Apply the footer class */}
    </div>
  );
};

export default User;
