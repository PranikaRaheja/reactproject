import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/User.css"; // Import the CSS file
import "../styles/Detail.css";

const User = () => {
  return (
    <div className="login-container">
      <Navbar />
      <div className="login-page">
        <video className="video-background" autoPlay loop muted>
          <source src="videos/myvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="login-box-detail">
          <h2>Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="loc">Location</label>
              <select name="loc" id="loc">
                <option value="Select" default>
                  Select
                </option>
                <option value="Goa">Goa</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Andaman">Andaman</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Nepal">Nepal</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="days">Number of Days</label>
              <input type="number" id="days" name="days" />
            </div>
            <div className="form-group">
              <label htmlFor="mems">Number of Members</label>
              <input type="number" id="mems" name="mems" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer className="footer" /> {/* Apply the footer class */}
    </div>
  );
};

export default User;
